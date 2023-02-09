const User = require("../model/userModel");
const Token = require("../model/tokenModel");
const bcrypt = require("bcryptjs");

const jwt = require('jsonwebtoken');


const register = async (req, res) => {
  const { username, email, password } = req.body;
  const userExistsByEmail = await User.findOne({ email });
  const userExistsByUsername = await User.findOne({ email });
  if (userExistsByEmail || userExistsByUsername ) {
      return res.status(409).send("User Already Exist. Please Login");
  }
  const encryptedPassword = await bcrypt.hash(password, 10);

  await User.create({
      username,
      email: email.toLowerCase(), 
      password: encryptedPassword,
    });

  res.status(200).json({username, password});
}


const login =  async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && (await bcrypt.compare(password, user.password))) {
      accessToken = jwt.sign({username: username, email: user.email }, process.env.JWT_SECRET, {expiresIn: "10s"});
      refreshToken = jwt.sign({username: username, email: user.email}, process.env.JWT_REFRESH_SECRET, { expiresIn: '1d' });
      Token.create({
        id: user._id,
        username: username,
        refreshToken
      })

      res.cookie('jwt', { httpOnly: true, 
          sameSite: 'None', secure: true, 
          maxAge: 24 * 60 * 60 * 1000 });

      return res.status(200).json({refreshToken, accessToken});
  }

  return res.status(400).json({message : "Invalid credentials"});
};

module.exports = {
  register,
  login
};


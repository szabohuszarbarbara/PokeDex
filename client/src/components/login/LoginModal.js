import {useContext, useState} from "react";
import "../pokemonData/CardModal.css"
import AuthContext from "../../context/authContext";

function LoginModal(props) {
    const setShow = props.setShow
    let {setUser} = useContext(AuthContext);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState("");
    const [state, setState] = useState("login")

    const closeModal = () => {
        setShow(false);
    }

    const clickLogin = async (e) => {
        e.preventDefault();
        const payload = {
            'username': username,
            'password': password
        };
        const user = await getUserData('/auth/login', payload);
        if (user.refreshToken) {
            console.log("RT")
        }
        if (user.accessToken) {
            localStorage.setItem("user", JSON.stringify(user));
            setUser(user);
            closeModal();
        } else {setError("Wrong username or password given!")}
    }

    const clickRegister = async (e) => {
        e.preventDefault();
        const payload = {
            'username': username,
            'password': password,
            'email': email
        }
        const registeredUser = await getUserData('/auth/register', payload);
        if (registeredUser) {
            await clickLogin(e);
        }
    }

    const validatePassword = (e) => {
        if (password !== confirmPassword) {
            setError("Password and Confirm Password do not match.");
        } else {
            setError("");
        }

    }

    const getUserData = async (url, payload) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"},
            body: JSON.stringify(payload),
        })
        return await response.json();}

    const changeToRegister = () => {
        setState("register")
    }
    const changeToLogin = () => {
        setState("login")
    }

    if (!props.show) { return null; }
    if (state === "login") {
    return (
        <div className={"modal-backdrop"} >
            <div className={"modal-container"} onClick={e => e.stopPropagation()}>
                <div className={`stripe "red"`} ></div>
                <div className={"close-modal"} onClick={closeModal}>X</div>

                    <form className='modalForm' onSubmit={clickLogin}>
                        <h1 className='loginWelcomeText'>Welcome Back!</h1>
                        <div className='inputBox'>
                            <span>Username</span>
                            <input type="text" required="required" onChange={ e => setUserName(e.target.value)} value={username}/>
                            <i></i>
                        </div>
                        <br/>
                        <div className='inputBox'>
                            <span>Password</span>
                            <input type="password" required="required" onChange={e => setPassword(e.target.value)} value={password}/>
                            <i></i>
                        </div>
                        <br/>
                        <span className="error">{error}</span>
                        <br/>
                        <button className='modalButton' type='submit' >Log In</button>
                    </form>
                    <li className="item" onClick={changeToRegister}>Don't have an account? Register here... </li>
            </div>
        </div>

    );}
    else {
        return (
            <div className={"modal-backdrop"} >
                <div className={"modal-container"} onClick={e => e.stopPropagation()}>
                    <div className={`stripe "red"`} ></div>
                    <div className={"close-modal"} onClick={closeModal}>X</div>

                    <form className='modalForm' onSubmit={clickRegister}>
                        <h1 className='loginWelcomeText'>Register</h1>
                        <div className='inputBox'>
                            <span>Username</span>
                            <input type="text" required="required" onChange={ e => setUserName(e.target.value)} value={username}/>
                            <i></i>
                        </div>
                        <br/>
                        <div className='inputBox'>
                            <span>E-mail</span>
                            <input type="email" required="required" onChange={ e => setEmail(e.target.value)} value={email}/>
                            <i></i>
                        </div>
                        <br/>
                        <div className='inputBox'>
                            <span>Password</span>
                            <input type="password" required="required" onChange={e => setPassword(e.target.value)} value={password}/>
                            <i></i>
                        </div>
                        <br/>
                        <div className='inputBox'>
                            <span>Confirm password</span>
                            <input type="password" required="required" onChange={e => setConfirmPassword(e.target.value)}
                                   onBlur={validatePassword} value={confirmPassword}/>
                            <i></i>
                        </div>
                        <br/>
                        <span className="error">{error}</span>
                        <br/>
                        <button className='modalButton' type='submit' >Register</button>
                    </form>
                    <li className="item" onClick={changeToLogin}>Go back to login</li>
                </div>
            </div>

        );
    }
}

export default LoginModal;
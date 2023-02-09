import { createContext, useState, useEffect } from "react";
import authUser from "./AuthUser";

const AuthContext = createContext({});

export const AuthProvider = ({ userData, children }) => {
    let [user, setUser] = useState(userData);

    const parseJwt = (token) => {
        try {
          return JSON.parse(atob(token.split(".")[1]));
        } catch (e) {
          return null;
        }
      };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user)

        if (user) {
        const decodedJwt = parseJwt(user.accessToken);

        if (decodedJwt.exp * 1000 < Date.now()) {
            console.log("expired");
            authUser.logOut();
        }
        }
    }, [userData, children]);


    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;


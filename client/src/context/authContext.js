import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ userData, children }) => {
    let [user, setUser] = useState(userData);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;


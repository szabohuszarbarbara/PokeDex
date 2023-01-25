import AuthContext from "./authContext";
import {useNavigate} from "react-router-dom"
import {useContext} from "react";

const AuthUser = () => {
    let {setUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        setUser(null);
        navigate("/");
    }

    return {
        logout
    };
}
export default AuthUser;
import AuthContext from "./authContext";
import {useContext} from "react";
import LoginModal from "../components/login/LoginModal";
import Home from "../pages/Home";

const ProtectedRoute = ({children, allowedRole }) => {
    let { user } = useContext(AuthContext);

    if (!user) {
        return <>
            <Home />
            <LoginModal show={true}/>;
            </>
        }
    else {
        return children;

    }



};
export default ProtectedRoute;
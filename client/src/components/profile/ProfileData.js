import AuthContext from "../../context/authContext";
import { useContext } from "react";

export default function ProfileData({ }) {
    const {user} = useContext(AuthContext);

    return (
        <>
            <div>Welcome {user.username}!</div>
        </>
    )
}
import PokemonLogo from "../img/PokemonLogoLayered.png"
import "./Header.css"
import NavBar from "../navbar/NavBar";
import {Link} from "react-router-dom";

function Header() {
    return (
        <>
            <div className={"header-container"}>
                <div className={"header-image"}><Link to="/home/"><img src={PokemonLogo} alt=""/></Link></div>
                <NavBar />
            </div>
        </>
    );
}

export default Header;
import "./Footer.css"
import Pikachu from"../img/pikachu.jpg";

function Footer(props) {
    return (
        <div className="footer">
            <div className="image-container"><img src={Pikachu} alt=""/></div>
            <div className={"footer-text"} >@szabohuszarbarbara</div>

        </div>
    );
}

export default Footer;
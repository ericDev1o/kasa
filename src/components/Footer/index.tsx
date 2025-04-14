import logo_footer from "../../assets/logo_footer_desktop.png";

function Footer() {
    return (
        <div id="footer">
            <img src={logo_footer} alt="logo footer" aria-hidden="true" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer;

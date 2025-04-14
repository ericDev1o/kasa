import logo_desktop from "../../assets/logo_header_desktop.png";

function Header() {
    return (
        <div id="header">
            <img src={logo_desktop} alt="logo desktop" aria-hidden="true" />
            <nav>
                <a href="/" aria-label="Allez à l'accueil">
                    Accueil
                </a>
                <a href="/about" aria-label="Découvrez-en plus sur nous">
                    À propos
                </a>
            </nav>
        </div>
    );
}

export default Header;

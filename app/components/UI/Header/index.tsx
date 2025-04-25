import headerLogo from "../../assets/dh_logo.png";

function Header() {
    return (
        <div>
            <img src={headerLogo} alt="Kasa" aria-hidden="true" />
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

import logo_desktop from '../../assets/dh_logo.png';

function Header() {
    return (
        <header>
            <img src={logo_desktop} alt="logo desktop" aria-hidden="true" />
            <nav>
                <a href="/" aria-label="Allez à l'accueil">
                    Accueil
                </a>
                <a href="/about" aria-label="Découvrez-en plus sur nous">
                    À propos
                </a>
            </nav>
        </header>
    );
}

export default Header;

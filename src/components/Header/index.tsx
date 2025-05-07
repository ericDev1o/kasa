import logo_mobile from '../../assets/images/mh_logo.png';

/**
 * 
 * @returns the .layout-container padded header.
 * It must have a mobile first small logo.
 * It may work with 
 *     <img 
            srcSet='../../assets/images/mh_logo.png 1024w, ../../assets/images/dh_logo.png 1240w'
            sizes='100vw' 
            src={logo_mobile} ...
 */
function Header() {
    return (
        <header>
            <img 
                src={logo_mobile} 
                alt='logo desktop' 
                aria-hidden='true' />
            <nav>
                <a href='/' aria-label="Allez à l'accueil">
                    Accueil
                </a>
                <a href='/about' aria-label='Découvrez-en plus sur nous'>
                    À propos
                </a>
            </nav>
        </header>
    );
}

export default Header;

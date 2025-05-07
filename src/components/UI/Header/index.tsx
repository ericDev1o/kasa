<<<<<<< HEAD:src/components/Header/index.tsx
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
=======
import { headerLogo } from '../../../../config/loadFileConfig';

function Header() {
    return (
        <div>
            <img src={headerLogo} alt="Kasa" aria-hidden="true" />
>>>>>>> refs/remotes/origin/feature/homestyle:src/components/UI/Header/index.tsx
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

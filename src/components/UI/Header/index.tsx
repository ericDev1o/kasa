import {useContext} from 'react';
import {PageContext} from '../../../contexts/PageContext';

import logo_mobile from '/src/assets/images/mh_logo.png';

/**
 * This component returns header's
 * <nav>
 *     <a></a>
 *    <a></a>
 * </nav>
 * elements
 * @param smallScreen is the screen width less than 1024px?
 * @param underlineHome is the user on the home page?
 * @param underlineAbout is the user on the about page? 
 * @returns the navbar with 
 *     home and 
 *     about page 
 * links
 * as per Figma design https://www.figma.com/design/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?node-id=4-1&t=8rMVbu3teHeYvEhs-0
 *     lower- or upper- cased and
 *     underlined
 */
function NavBar({smallScreen, underlineHome, underlineAbout}: 
    {smallScreen: boolean, underlineHome: boolean, underlineAbout: boolean}) 
{
    if (underlineHome && ! underlineAbout)
        return <nav>
            <a href = '/' aria-label="Allez à l'accueil"
                className='underline'
            >{smallScreen ? 'ACCUEIL' : 'Accueil'}</a>
            <a href = '/about' aria-label="Découvrez-en plus sur nous"
                className='no-underline'
            >{smallScreen ? 'À PROPOS' : 'À propos'}</a>
        </nav>
    else if (! underlineHome && underlineAbout)
        return <nav>
            <a href = '/' aria-label="Allez à l'accueil"
                className='no-underline'
            >{smallScreen ? 'ACCUEIL' : 'Accueil'}</a>
            <a href = '/about' aria-label="Découvrez-en plus sur nous"
                className='underline'
            >{smallScreen ? 'À PROPOS' : 'À propos'}</a>
        </nav>
    else if (! underlineHome && ! underlineAbout)
        return <nav>
            <a href = '/' aria-label="Allez à l'accueil"
                className='no-underline'
            >{smallScreen ? 'ACCUEIL' : 'Accueil'}</a>
            <a href = '/about' aria-label="Découvrez-en plus sur nous"
                className='no-underline'
            >{smallScreen ? 'À PROPOS' : 'À propos'}</a>
        </nav>
}

/**
 * This header with logo and navbar is used through the layout on all pages.
 * @returns the .layout-container padded header.
 * It must have a mobile first small logo.
 * It may work with 
 *     <img 
            srcSet='../../assets/images/mh_logo.png 1024w, ../../assets/images/dh_logo.png 1240w'
            sizes='100vw' 
            src={logo_mobile} ...
 */
function Header() {
    const page = useContext(PageContext);

    let underlnHome = false;
    let underlnAbout = false;
    switch (page) {
        case 'home':
            underlnHome = true;
            break;
        case 'about':
            underlnAbout = true;
            break;
    }

    let smallScrn = true;
    if(window.screen.width >= 1024) smallScrn = false;
    
    return (
        <header>
            <img 
                src = {logo_mobile}
                srcSet= '/src/assets/images/mh_logo.png 1023w, /src/assets/images/dh_logo.png 1024w'
                sizes='(max-width: 375px) 190vw, (max-width: 1024px) 720px'
                alt = 'logo Kasa' 
                aria-hidden = 'true' 
            />
            <NavBar 
                smallScreen = {smallScrn}
                underlineHome = {underlnHome}
                underlineAbout = {underlnAbout} 
            />
        </header>
    );
}

export default Header;

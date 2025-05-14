import {useContext} from 'react';
import {PageContext} from '../../../contexts/PageContext';

import logo_mobile from '../../../assets/images/mh_logo.png';

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
    const page = useContext(PageContext);
    let underlineHome = false;
    let underlineAbout = false;
    switch (page) {
        case 'home':
            underlineHome = true;
            break;
        case 'about':
            underlineAbout = true;
            break;
    }
    /*
    let aHome = '';
    const aHomeBegin = "<a href = '/' aria-label=\"Allez à l'accueil\"";
    const underlineClass=" className='underline";
    const aHomeEnd='>Accueil</a>';
    underlineHome 
    ? 
        aHome = aHomeBegin + underlineClass + aHomeEnd
    :
        aHome = aHomeBegin + aHomeEnd
    ;

    let aAbout = '';
    const aAboutBegin = "<a href = '/about' aria-label=\"Découvrez-en plus sur nous\"";
    const aAboutEnd='>À propos</a>';
    underlineAbout 
    ? 
        aAbout = aAboutBegin + underlineClass + aAboutEnd
    :
        aAbout = aAboutBegin + aAboutEnd
    ;*/
    if(underlineHome && ! underlineAbout) return (
        <header>
            <img 
                src = {logo_mobile} 
                alt = 'logo desktop' 
                aria-hidden = 'true' 
            />
            <nav>
                <a href = '/' aria-label="Allez à l'accueil"
                 className='underline'
                 >Accueil</a>
                <a href = '/about' aria-label="Découvrez-en plus sur nous"
                 className='no-underline'
                >À propos</a>
            </nav>
        </header>
    );
    else if (! underlineHome && underlineAbout) return (
        <header>
            <img 
                src = {logo_mobile} 
                alt = 'logo desktop' 
                aria-hidden = 'true' 
            />
            <nav>
                <a href = '/' aria-label="Allez à l'accueil"
                 className='no-underline'
                 >Accueil</a>
                <a href = '/about' aria-label="Découvrez-en plus sur nous"
                 className='underline'
                >À propos</a>
            </nav>
        </header>
    );
    else if (! underlineHome && ! underlineAbout) return (
        <header>
            <img 
                src = {logo_mobile} 
                alt = 'logo desktop' 
                aria-hidden = 'true' 
            />
            <nav>
                <a href = '/' aria-label="Allez à l'accueil"
                 className='no-underline'
                 >Accueil</a>
                <a href = '/about' aria-label="Découvrez-en plus sur nous"
                 className='no-underline'
                >À propos</a>
            </nav>
        </header>
    );
}

export default Header;

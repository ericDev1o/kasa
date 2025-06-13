import { useContext, useState, useEffect } from 'react';
import { PageContext } from '../../contexts/UI/PageContext';
import logoSmall from '/images/mh_logo.png';
import logoLarge from '/images/dh_logo.png';

/**
 * This component returns header's
 * <nav>
 *     <a></a>
 *     <a></a>
 * </nav>
 * elements.
 * It renders respectively the home, about and other(housing, error) pages.
 * @param smallScreen : is the screen width less than 1024px?
 * @param underlineHome : is the user on the home page?
 * @param underlineAbout : is the user on the about page? 
 * @returns the navbar with 
 *     home and 
 *     about page 
 * links
 * as per Figma design https://www.figma.com/design/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?node-id=4-1&t=8rMVbu3teHeYvEhs-0
 *     lower- or upper- cased and
 *     underlined.
 */
function NavBar({ smallScreen, underlineHome, underlineAbout }: 
    {smallScreen: boolean, underlineHome: boolean, underlineAbout: boolean}) 
{
    if (underlineHome && ! underlineAbout)
        return <nav>
            <a href = '/' aria-label="Allez à l'accueil"
                className='header__a underline'
            >{ smallScreen ? 'ACCUEIL' : 'Accueil' }</a>
            <a href = '/about' aria-label="Découvrez-en plus sur nous"
                className='header__a no-underline'
            >{ smallScreen ? 'A PROPOS' : 'A propos' }</a>
        </nav>
    else if (! underlineHome && underlineAbout)
        return <nav>
            <a href = '/' aria-label="Allez à l'accueil"
                className='header__a no-underline'
            >{smallScreen ? 'ACCUEIL' : 'Accueil' }</a>
            <a href = '/about' aria-label="Découvrez-en plus sur nous"
                className='header__a underline'
            >{smallScreen ? 'A PROPOS' : 'A propos' }</a>
        </nav>
    else if (! underlineHome && ! underlineAbout)
        return <nav>
            <a href = '/' aria-label="Allez à l'accueil"
                className='header__a no-underline'
            >{ smallScreen ? 'ACCUEIL' : 'Accueil' }</a>
            <a href = '/about' aria-label="Découvrez-en plus sur nous"
                className='header__a no-underline'
            >{ smallScreen ? 'A PROPOS' : 'A propos' }</a>
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
export default function Header() {
    const page = useContext(PageContext);
    const [logo, setLogo] = useState(logoSmall);

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
    if(window.innerWidth >= 1024) smallScrn = false;

    useEffect(() => {
        const updateLogo = () => {
            if(window.innerWidth > 1023)
                setLogo(logoLarge);
            else
                setLogo(logoSmall);
        };

        window.addEventListener('resize', updateLogo);
        updateLogo();

        return () => {
            window.removeEventListener('resize', updateLogo);
        };
    }, []);
    
    return (
        <header>
            <img 
                src = { logo }
                alt = 'logo Kasa' 
                aria-hidden = 'true' 
            />
            <NavBar 
                smallScreen = { smallScrn }
                underlineHome = { underlnHome }
                underlineAbout = { underlnAbout } 
            />
        </header>
    );
}
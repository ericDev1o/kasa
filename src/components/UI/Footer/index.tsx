import { footerLogo } from '../../../../config/loadFileConfig';

function Footer() {
    return (
        <footer>
            <img src={footerLogo} alt="Kasa" aria-hidden="true" />
            <p>©2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;

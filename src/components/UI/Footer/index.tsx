import logo_footer from '/images/df_logo.png';

function Footer() {
    return (
        <footer>
            <img src = { logo_footer } alt = 'logo footer' aria-hidden = 'true' />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;

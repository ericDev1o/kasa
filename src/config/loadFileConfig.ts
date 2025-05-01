// Home page lazy loading
export let bannerBackground: string = '../assets/bh_bckgrd.jpg';
export let card: string = '../assets/card.jpg';
export let footerLogo: string = '../assets/df_logo.png';
export let headerLogo: string = '../assets/dh_logo.png';

initFileConfig();

async function initFileConfig() {
    await loadFileConfig();
}

/**
 * File paths used in UI components shouldn't be static.
 * @returns the JSON (key - value) (file name - file path)
 */
async function loadFileConfig() {
    try {
        const baseURL = window.location.origin;
        const configPath = `${baseURL}/src/config/files_config.json`;
        const resConfigFetched = await fetch(configPath);
        if (resConfigFetched.ok) {
            const filePaths = await resConfigFetched.json();
            bannerBackground = filePaths.banner_background;
            card = filePaths.card;
            footerLogo = filePaths.logo_footer_desktop;
            headerLogo = filePaths.logo_header_desktop;
        } else alert('loadConfig() error : ' + resConfigFetched.statusText);
    } catch (error) {
        alert('loadConfig() error fetching files_config.json : ' + error);
    }
}

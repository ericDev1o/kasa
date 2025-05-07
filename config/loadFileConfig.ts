//import { MyLoggerFile } from '../src/loggers/MyLoggerFile';

// Home page lazy loading
export const bannerBackground: string = '../../assets/bh_bckgrd.jpg';
export const card: string = '../../assets/card.jpg';
export const footerLogo: string = '../../assets/df_logo.png';
export const headerLogo: string = '../../assets/dh_logo.png';

//initFileConfig();

/*async function initFileConfig() {
    await loadFileConfig();
}*/
/**
 * File paths used in UI components shouldn't be static.
 * @returns the JSON (key - value) (file name - file path)
 */
/*async function loadFileConfig() {
    try {
        const baseURL = window.location.origin;
        const configPath = `${baseURL}/config/files_config.json`;
        console.log('config path: ' + configPath);
        const resConfigFetched = await fetch(configPath);
        if (resConfigFetched.ok) {
            const filePaths = await resConfigFetched.json();
            bannerBackground = filePaths.banner_home;
            card = filePaths.card;
            footerLogo = filePaths.logo_footer_desktop;
            headerLogo = filePaths.logo_header_desktop;
        } else
        /*MyLoggerFile().log({
                level: 'error',
                message: 'loadConfig() error : ' + resConfigFetched.statusText,
            });*/
/*} catch (error) {
        /*MyLoggerFile().log({
            level: 'error',
            message: 'loadConfig() error fetching files_config.json : ' + error,
        });*/
/*}
}*/

import images from "./file_paths.json";

/**
 * Gérer le cas de fichier config.json pas trouvé
 */
export async function loadAssets() {
    try {
        const baseURI = window.location.origin;
        const assetsConfigPath = `${baseURI}/config/assets_paths_names.json`;
        const resAssetsConfigFetched = await fetch(assetsConfigPath);
        if (resAssetsConfigFetched.ok) return resAssetsConfigFetched.json();
        else
            console.error(
                "loadAssets() error : " + resAssetsConfigFetched.statusText
            );
    } catch (error) {
        console.error(
            "loadAssets() fetch /config/assets_paths_names.json error : " +
                error
        );
    }
}

const assets = await loadAssets();

export const banner_home = assets.banner_home;
export const banner_about = assets.banner_about;
export const card_background_example = assets.card_background_example;
export const logo_header_desktop = assets.logo_header_desktop;
export const logo_footer_desktop = assets.logo_footer_desktop;
export const logo_header_mobile = assets.logo_header_mobile;
export const logo_footer_mobile = assets.logo_footer_mobile;
export const room_example_desktop = assets.room_example_desktop;
export const room_example_mobile = assets.room_example_mobile;

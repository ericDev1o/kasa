export const configFilePath = "/src/config/config.json";

export async function fetchConfig(configFilePath: string) {
    try {
        const baseURI = window.location.origin;
        const configPath = `${baseURI}${configFilePath}`;
        console.log("path: " + configPath);
        const resConfigFetched = await fetch(configPath);
        if (resConfigFetched.ok) {
            const dataConfig = await resConfigFetched.json();
            return dataConfig;
        } else
            console.error(
                "fetchConfig() error: " + resConfigFetched.statusText
            );
    } catch (error) {
        console.error("fetchConfig() fetch config.json error: " + error);
    }
}

const fileURIs = await fetchConfig(configFilePath);
export const background_home = fileURIs.background_home;
export const background_about = fileURIs.background_about;

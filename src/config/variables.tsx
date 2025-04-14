export const configFilePath = "/src/config/config.json";

export async function fetchConfig(configFilePath: string) {
    try {
        const baseURI = window.location.origin;
        const configPath = `${baseURI}${configFilePath}`;
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

const variables = await fetchConfig(configFilePath);
export const background_home = variables.background_home;
export const background_about = variables.background_about;

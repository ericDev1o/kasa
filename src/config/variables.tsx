export async function loadVariables() {
    try {
        const baseURI = window.location.origin;
        const variablesPath = `${baseURI}/src/config/config.json`;
        const resConfigFetched = await fetch(variablesPath);
        if (resConfigFetched.ok) {
            const dataConfig = await resConfigFetched.json();
            return dataConfig;
        } else
            console.error(
                "loadVariables() error: " + resConfigFetched.statusText
            );
    } catch (error) {
        console.error("loadVariables() fetch config.json error: " + error);
    }
}

const variables = await loadVariables();
export const background_home = variables.background_home;

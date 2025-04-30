export async function loadConfig() {
    try {
        const baseURL = window.location.origin;
        const configPath = `${baseURL}/config/files_config.json`;
        const resConfigFetched = await fetch(configPath);
        if (resConfigFetched.ok) {
            return resConfigFetched.json();
        } else
            console.error(
                'loadConfig() error : ' + resConfigFetched.statusText
            );
    } catch (error) {
        console.error(
            'loadConfig() error fetching files_config.json : ' + error
        );
    }
}

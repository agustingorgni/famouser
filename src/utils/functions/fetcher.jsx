/*
* @param url - URL to fetch
* @returns JSON
*/

export const fetcher = async (url, options) => {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error with status ${response.status}`);
        }

        return await response.json();
    } catch (err) {
        throw new Error(`Fetch error - ${err.message}`);
    }
}

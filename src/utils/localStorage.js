/**
 * Saves data to browser's local storage.
 * @param {string} key - The key to store the data under.
 * @param {any} data - The data to be stored (will be JSON serialized).
 */
export const saveToLocalStorage = (key, data) => {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
    } catch (error) {
        console.error(`Error saving to localStorage: ${error}`);
    }
};

/**
 * Loads data from browser's local storage.
 * @param {string} key - The key of the data to retrieve.
 * @returns {any | null} The parsed data or null if not found/error.
 */
export const loadFromLocalStorage = (key) => {
    try {
        const serializedData = localStorage.getItem(key);
        if (serializedData === null) return null;
        return JSON.parse(serializedData);
    } catch (error) {
        console.error(`Error loading from localStorage: ${error}`);
        return null;
    }
};

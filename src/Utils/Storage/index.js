

class Storage {
    setLocalStorage(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    getLocalStorage(key) {
        const value = window.localStorage.getItem(key);

        return JSON.parse(value);
    }

    
}

export default new Storage();
function checkLocalStorage() {
    try {
        localStorage.setItem("test", "test");
        localStorage.removeItem("test");
        return true;
    } catch (e) {
        return false;
    }
}

class FallbackStorage {
    fallbackStorage: {
        [key: string]: string;
    } = {};

    valid: boolean = checkLocalStorage();

    setItem(key: string, rawValue: any) {
        const value = JSON.stringify(rawValue);
        if (this.valid) {
            localStorage.setItem(key, value);
            return;
        }
        this.fallbackStorage[key] = value;
    }

    getItem(key: string) {
        const value = this.valid ? localStorage.getItem(key) : this.fallbackStorage[key];
        try {
            return JSON.parse(value || "");
        } catch (e) {
            return null;
        }
    }

    removeItem(key: string) {
        if (this.valid) {
            localStorage.removeItem(key);
            return;
        }
        delete this.fallbackStorage[key];
    }
}

const storage = new FallbackStorage();

export default storage;

export const loadState = () => {
    try {
        const stateFromStorage = localStorage.getItem('state');
        if (stateFromStorage === null) {
            return undefined;
        }
        return JSON.parse(stateFromStorage);
    } catch (err) {
        return undefined;
    }
}

export const saveState = state => {
    try {
        const savedState = JSON.stringify(state);
        localStorage.setItem('state', savedState);
    } catch (err) {}
}


export const setToLocalStorage = (tag: string, value: boolean) => {
    console.log('SETTING TO LOCAL STORAGE');
    localStorage.setItem(tag, String(value));
}

export const deleteFromLocalStorage = (tag: string) => {
    console.log('DELETING FROM LOCAL STORAGE');
    localStorage.removeItem(tag);
}

export const getFromLocalStorage = (tag: string) => {
    return Boolean(localStorage.getItem(tag)) || false;
}
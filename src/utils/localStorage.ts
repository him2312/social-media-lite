export const setToLocalStorage = (tag: string, value: boolean) => {
    // localStorage.setItem(tag, String(value));
    chrome.storage?.local?.set({ [tag]: value }).then(() => {
        console.log("Value is set to " + value);
    });
}

export const deleteFromLocalStorage = (tag: string) => {
    // localStorage.removeItem(tag);
    chrome.storage?.local?.remove(tag)
}

export const getFromLocalStorage = (tag: string) => {
    return new Promise((resolve) => {
        chrome.storage?.local?.get([tag]).then((result) => {
            console.log(`Value currently is ${tag} : ${result[tag]}`);
            resolve(result[tag])
        });
    })
    // return Boolean(localStorage.getItem(tag)) || false;
}
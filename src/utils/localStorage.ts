export const setToLocalStorage = (tag: string, value: boolean) => {
    chrome.storage?.local?.set({ [tag]: value }).then(() => {
        console.log("Value is set to " + value);
    });
}

export const deleteFromLocalStorage = (tag: string) => {
    console.log('deleteFromLocalStorage', tag)
    chrome.storage?.local?.remove(tag)
}

export const getFromLocalStorage = (tag: string) => {
    return new Promise((resolve) => {
        chrome.storage?.local?.get([tag]).then((result) => {
            console.log(`Value currently is ${tag} : ${result[tag]}`);
            resolve(result[tag])
        });
    })
}

type LocalStorageType = Record<string, boolean>

export const getAllItemsFromStorage = (): Promise<LocalStorageType> => {
    return new Promise((resolve) => {
        chrome.storage?.local?.get().then((result) => {
            console.log(`Local storage: ${result}`);
            resolve(result)
        });
    })
}


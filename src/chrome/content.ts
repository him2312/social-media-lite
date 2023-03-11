import { actOnEvent } from "./css_modifier";

// Existing user preferences
chrome.storage.local.get().then((items) => {
    // console.log('exist key', items)
    for (let [key, value] of Object.entries(items)) {
        actOnEvent({
            tag: key,
            remove: value
        })
    }
})

// Changing user preferences
chrome.storage.onChanged.addListener((changes) => {
    for (let [key, { newValue }] of Object.entries(changes)) {
        actOnEvent({
            tag: key,
            remove: newValue
        })
    }
});

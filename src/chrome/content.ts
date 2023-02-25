// import { ChromeMessage, Sender } from "../types";
import { actOnEvent } from "./css_modifier.js";

// const messagesFromReactAppListener = (message: ChromeMessage, sender:any, response: any) => {
//     console.log('[content.js]. Message received', {
//         message,
//         sender,
//     })

    // if (message.from === Sender.Background && message.message === 'Page loaded') {
    //     console.log('Message from background', message.message);
    // }

    // if (
    //     sender.id === chrome.runtime.id &&
    //     message.from === Sender.Extension) {
    //         let parsedPayload = JSON.parse(message.message);
    //         console.log('RECEIVED', parsedPayload);

    //         // TODO: Now you don't need to sendMessageFromReact
    //         // chrome.storage will manage that.
    //         actOnEvent(parsedPayload);
    //         response('Executed');
    //     }
// }


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

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
// chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
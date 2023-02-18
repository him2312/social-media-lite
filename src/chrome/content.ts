import { ChromeMessage, Sender } from "../types";
import { actOnEvent } from "./css_modifier.js";

const messagesFromReactAppListener = (message: ChromeMessage, sender:any, response: any) => {
    console.log('[content.js]. Message received', {
        message,
        sender,
    })

    if (
        sender.id === chrome.runtime.id &&
        message.from === Sender.React) {
            let parsedPayload = JSON.parse(message.message);
            console.log('RECEIVED', parsedPayload);
            actOnEvent(parsedPayload);
            response('Executed');
        }
}


/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
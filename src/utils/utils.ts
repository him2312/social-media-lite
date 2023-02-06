import { ChromeMessage, Sender } from "../types";

export const sendMessageToContent = (messageText: string, callback?: any) => {
    const message: ChromeMessage = {
        from: Sender.React,
        message: messageText,
    }

    const queryInfo: chrome.tabs.QueryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
        const currentTabId = Number(tabs[0].id);
        chrome.tabs.sendMessage(
            currentTabId,
            message,
            (response) => {
                callback && callback(response);
            });
    });
}
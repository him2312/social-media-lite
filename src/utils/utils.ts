import { ChromeMessage, Sender } from "../types";

export const sendMessageToContent = (messageText: string, messageFrom: Sender, callback?: any) => {
    const message: ChromeMessage = {
        from: messageFrom,
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

export const removeTodoIdentifier = (task: string | undefined) => {
    if (task) {
        return task.replace('todo_', '')
    }
    return ''
}

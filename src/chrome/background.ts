import { createTodo } from "./todoModal";

const runTodoScript = (tabId: number) => {
    chrome.storage.local.get().then((items) => {
            
        let todoItems = Object.keys(items).filter(item => item.startsWith('todo'));
        chrome.scripting.executeScript(
            {
              target: {tabId: tabId, allFrames: true},
              func: createTodo,
              args: [JSON.stringify(todoItems)]
            }
        )
    })
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'loading') { 
        runTodoScript(tabId)
    }
});

// This will trigger on tab switch.
// Eg. If Instagram was already open, and you added some tasks
// When you come back it should be blocked.
chrome.tabs.onActivated.addListener(() => {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        var tabId = Number(tabs[0].id);
        runTodoScript(tabId)
    })
});

export {}
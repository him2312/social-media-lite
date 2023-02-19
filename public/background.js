/* eslint-disable no-undef */
// TODO: On page load, extension should pull data from localStorage and run apply the 
// user's selection.
import { detectPlatform } from "../src/platform";

chrome.tabs.onUpdated.addListener((tabId, tab) => {
  let queryOptions = { active: true, currentWindow: true };
  chrome.tabs.query(queryOptions, (tabs) => {
    let supportedPlatform = detectPlatform(tabs[0].url);

    if (supportedPlatform) {
      chrome.tabs.sendMessage(tabId, {
        message: "Browser loaded",
      });
    }
  });
});

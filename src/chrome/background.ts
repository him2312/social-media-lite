import { Sender } from "../types";

// TODO: Populate this filter from PLATFORM_METADATA
const supportedWebsites = {
  url: [
    {
      urlMatches: 'https://www.youtube.com',
    },
    {
      urlMatches: 'https://m.youtube.com',
    },
    {
      urlMatches: 'https://www.instagram.com',
    },
    {
      urlMatches: 'https://www.linkedin.com',
    },
    {
      urlMatches: 'https://mail.google.com',
    },
    {
      urlMatches: 'https://twitter.com',
    },
  ],
};

// This will fire the service worker only for the above mentioned supportedWebsites.

chrome.webNavigation.onCompleted.addListener(({tabId, url}) => {
  chrome.tabs.sendMessage(tabId, {
    message: "Page loaded",
    url: url,
    from: Sender.Background
  });
}, supportedWebsites);

export {};
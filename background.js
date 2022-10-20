chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url && tab.url.includes("linkedin.com/search/results/people/")) {
    chrome.action.setPopup({ tabId, popup: "popup.html" });
  } else {
    chrome.action.setPopup({ tabId, popup: "unsupportedUrl.html" });
  }
});

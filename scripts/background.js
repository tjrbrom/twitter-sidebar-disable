
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.tabs.executeScript({
        file: "scripts/disable.js"
    });
});

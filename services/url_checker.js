
export function isTabContainsUrl(keywords, callback) {
    onNavigationCompleted(function(details) {
        getTabUrl(details.tabId, function(url, tabId) {
            if (checkUrl(url, keywords)) {
                callback(url, tabId);
            }
        });
    });
}

function checkUrl(url, keywords) {
    return keywords.every(keyword => url.includes(keyword));
}

function getTabUrl(tabId, callback) {
    chrome.tabs.get(tabId, function(tab) {
        if (tab && tab.url) {
            callback(tab.url, tabId);
        }
    });
}

function onNavigationCompleted(listener) {
    chrome.webNavigation.onCompleted.addListener(listener);
}

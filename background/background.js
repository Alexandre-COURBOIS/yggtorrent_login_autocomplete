import { isTabContainsUrl } from '../services/url_checker.js';
import { handleCredentialRequests } from '../services/messaging.js';

console.log('Background script loaded');

isTabContainsUrl(['yggtorrent', 'auth', 'login'], (url, tabId) => {
    console.log('URL contains keywords:', url);
    chrome.scripting.executeScript({
        target: { tabId },
        files: ['script/inject_input.js']
    });
});

handleCredentialRequests();

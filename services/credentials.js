export function getCredentials(callback) {
    chrome.storage.local.get(['yggLogin', 'yggPassword'], ({ yggLogin, yggPassword }) => {
        callback({ login: yggLogin, password: yggPassword });
    });
}

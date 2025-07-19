import { getCredentials } from './credentials.js';

export function handleCredentialRequests() {
    console.log('Gestion des requêtes d\'identifiants activée');
    chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
        if (msg.action === "requestCredentials") {
            getCredentials((creds) => {
                sendResponse(creds);
            })
            ;
            return true;
        }
    });
}

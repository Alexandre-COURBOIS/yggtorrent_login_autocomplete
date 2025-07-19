
console.log('Script inject_input.js chargé');

function getAndSetInputsByNames(inputUsernameName, inputPasswordName, inputUsernameValue, inputPasswordValue) {
    const el1 = document.querySelector(`[name="${inputUsernameName}"]`);
    const el2 = document.querySelector(`[name="${inputPasswordName}"]`);
    if (el1 && el1.tagName === "INPUT") el1.value = inputUsernameValue;
    if (el2 && el2.tagName === "INPUT") el2.value = inputPasswordValue;
    console.log('Inputs set:', el1, el2);
}

function requestAndFillCredentials() {
    chrome.runtime.sendMessage({ action: "requestCredentials" }, (response) => {
        console.log('Réponse reçue:', response);
        if (response && response.login && response.password) {
            getAndSetInputsByNames('id', 'pass', response.login, response.password);
        } else {
            console.warn("Aucun identifiant reçu !");
        }
    });
}

requestAndFillCredentials();
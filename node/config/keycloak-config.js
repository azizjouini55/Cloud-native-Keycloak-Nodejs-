var session = require('express-session');
var Keycloak = require('keycloak-connect');

let _keycloak;

var keycloakConfig = {
    clientId: 'node-app',
    bearerOnly: false,
    serverUrl: 'http://127.0.0.1:8180/',
    realmPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkyU0Tbj439xlNC+pFbi3UBQGTNoMHD0wWxr15umQetLjtcM5VC26HlhuHCu1hQ9YVvQuqnYXPTV6J9KT3NbSwPrn/OfOHpOerGMAbHlyDvihNQdHRF4Wz5qnfUzm95TLTLz7ZHyCGdUOr3m2tw5LMzlrPYqdO6xyMEe+pc1FMiWZ53xcPeIbQeLRIbVdvV/W3CQeeUBPzOhjCwUbgaodRxjG251JFUpZm0pxr9Z1BeMWWH6iLhXf+prDuflfGKXf9LXd9QBdwFsGvHvUvbQSa218NMTjOFff79KbIKE6DWQxGBfq0YT+Kef2uFnaRfHkZnYOLfZ7EYMDwr/FkPXyUQIDAQAB',
    realm: 'web-app',
    credentials: {
        secret: '075ed4cb-c0ec-45df-890d-0f136a347b79'
    }
};
function initKeycloak(memoryStore)
 { if (_keycloak) 
    { console.warn("Trying to init Keycloak again!");
     return _keycloak; }  
    else { console.log("Initializing Keycloak..."); 
    _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig); 
    return _keycloak; } }

function getKeycloak() {
    if (!_keycloak){
        console.error('Keycloak has not been initialized. Please called init first.');
    } 
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak
};
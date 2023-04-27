var express = require('express');
var router = express.Router();
const keycloak = require('../config/keycloak-config.js').getKeycloak();



router.get('/user', keycloak.protect("realm:web-app"), function(req, res){
    res.send("Hello User");
});



router.get('/all-user', keycloak.protect(['user','admin']), function(req, res){
    res.send("Hello All User");
});

module.exports = router;
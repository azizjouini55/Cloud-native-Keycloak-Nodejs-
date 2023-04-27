var express = require('express');
var session = require('express-session');
var Keycloak = require('keycloak-connect');
const dotenv = require('dotenv');
dotenv.load();
var app = express();


var memoryStore = new session.MemoryStore(); 

app.use(session({ secret: 'secret', resave: false, saveUninitialized: true, store: memoryStore })); 

var keycloakConfig = {
   resource:process.env.CLIENT,
   bearerOnly:false,
   serverUrl:process.env.AUTH_URL,
   realm:process.env.REALM,
   "use-resource-role-mappings": true,
   credentials: {
       secret:process.env.SECRET
   }
};

let keycloak = new Keycloak({ store: memoryStore }, keycloakConfig); 

app.use(keycloak.middleware());

app.get('/user', keycloak.protect(), function(req, res){
   res.sendFile(__dirname + '/index.html');
});


app.get('/', function(req, res){
   res.send("Server is up!");
});

app.listen(3000);
var express = require('express');
var router = express.Router();
 
/* GET home page. */
module.exports = function(app){
	var home = app.controllers.home;
	app.get('/', home.index);	
	app.post('/entrar', home.login);
	app.get('/sair', home.logout);
};
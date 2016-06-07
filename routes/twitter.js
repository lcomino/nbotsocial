module.exports = function(app){
	var twitter = app.controllers.twitter;
	app.get('/twitter', twitter.index);	
	app.post('/twitter/tweetar', twitter.tweetar);	
};
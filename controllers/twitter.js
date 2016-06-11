var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

module.exports = function(app){
	var TwitterController = {
		index : function(req, res){
			res.render('twitter/index');
			var params = {screen_name: 'nodejs'};
			client.get('statuses/user_timeline', params, function(error, tweets, response){
			  if (!error) {
			    //console.log(tweets);
			  }
			});
		},
		tweetar : function(req, res){

			client.post('statuses/update', {status: req.body.mensagem + '#NodeJs #javascript #soudev'},  function(error, tweet, response){
			  if(error) throw error;
			  res.render('twitter/index');
			});
		}
	};

	return TwitterController;
}
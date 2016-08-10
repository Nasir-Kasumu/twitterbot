console.log("hello world");

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

//set up user stream
var stream = T.stream('user');
// Anytime someone follows me
stream.on('follow', followed);

function followed(eventMsg){
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetIt('@' + screenName + 'Thank you for following');
}

var params = {
	q: 'rainbow', 
	count: 2 
} 

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses;
  for(var i = 0; i < tweets.length; i++){
  	console.log(tweets[i].text);
  }
}

//tweetIt();
// activate this every 1000 miliseconds * 60 which is minute
// it will tweet setInterval(tweetIt, 1000*60)
function tweetIt(txt){
	var tweet = {
		status: txt
	}
}

function tweetIt(){
	var r = Math.floor(Math.random()*100);
	var tweet = {
		status: 'Thereisno ' + r
	}

	T.post('statuses/update',tweet, tweeted);


	function tweeted(err, data, response) {
	  if(err){
	  	console.log("Something went wrong!");
	  }
	  else{
	  	console.log("It worked!");
	  }
	}
}
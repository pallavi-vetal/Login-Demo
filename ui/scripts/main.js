require.config({
	paths: {
		'skrollr' : "skrollr.min"
	},
	waitSeconds: 15
});

require(['skrollr'], function(skrollr){
	var s = skrollr.init({
	});
});
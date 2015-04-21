Template.registerHelper('createExcerpt', function(e, tlength) {
	var str = e;
	var length = tlength;
	if(str.length > length) {
		return str.substr( 0, length ) + "...";
	} else {
		return str;
	}
});

Template.registerHelper('prettyDate', function() {
  return moment(this.date).format("dddd, MMMM Do YYYY");
});

Template.registerHelper('iTunesLink', function() {
  return "https://itunes.apple.com/us/podcast/scaling-deploy-meteor-meteor/id984131621?i=339627585&mt=2"
});

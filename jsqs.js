/**
 *	Gets a parameter from the params object, returns null if it does not exist
 */
Window.prototype.getParam = function(k){
	if (typeof this.params[k] == 'undefined')
		return null;
	return(this.params[k]);
}

/**
 *	Set a param value, overrides the old value if it already exists
 */
Window.prototype.setParam = function(k,v){
	this.params[k]=v.toString();
}

/**
 *	Parses the query string and builds the params object
 */
Window.prototype.loadParams = function(){
	var origLoc = this.location.search.substring(1);
	var kvps = origLoc.split('&');
	this.params = {};
	for(var i=0; i<kvps.length; i++){
		var kv = kvps[i].split('=');
		this.params[kv[0]] = kv[1];
	}
}

/**
 *	Sets the window location to a provided url (or blank) with a query string based on new params
 */
Window.prototype.sendParams = function(url){
	var qs = this.paramsString();
	url = url ? url + qs : qs;
	if(url)
		this.location = url;
}

/**
 *	Returns the parameters as a query string
 */
Window.prototype.paramsString = function(){
	var qs = '';
	for(var k in window.params){
		if(typeof window.params[k] != 'undefined'){
			qs += qs ? '&' : '?';
			qs += k + '=' + window.params[k];
		}
	}
	return qs;
}

window.loadParams();
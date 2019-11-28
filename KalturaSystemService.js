
/**
 *Class definition for the Kaltura service: system.
 **/
var KalturaSystemService = {
	/**
	 * Gets the current level of the KLogger.
	 **/
	getLogLevel: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "getLogLevel", kparams);
	},
	
	/**
	 * Returns current server timestamp.
	 **/
	getTime: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "getTime", kparams);
	},
	
	/**
	 * Returns current server version.
	 **/
	getVersion: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "getVersion", kparams);
	},
	
	/**
	 * Returns true.
	 **/
	ping: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "ping", kparams);
	},
	
	/**
	 * Sets the current level of the KLogger.
	 * @param	level	string		Possible levels: trace, debug, info, warning, error, all (optional, enum: KalturaLogLevel)
	 **/
	setLogLevel: function(level){
		var kparams = new Object();
		kparams.level = level;
		return new KalturaRequestBuilder("system", "setLogLevel", kparams);
	}
}

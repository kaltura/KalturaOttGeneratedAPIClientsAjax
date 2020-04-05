
/**
 *Class definition for the Kaltura service: iot.
 **/
var KalturaIotService = {
	/**
	 * Get iot Client Configuration.
	 **/
	getClientConfiguration: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("iot", "getClientConfiguration", kparams);
	},
	
	/**
	 * Register IOT device.
	 **/
	register: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("iot", "register", kparams);
	}
}


/**
 *Class definition for the Kaltura service: duration.
 **/
var KalturaDurationService = {
	/**
	 * Get the list of optinal Duration codes.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("duration", "list", kparams);
	}
}

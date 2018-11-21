
/**
 *Class definition for the Kaltura service: deviceFamily.
 **/
var KalturaDeviceFamilyService = {
	/**
	 * Return a list of the available device families..
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("devicefamily", "list", kparams);
	}
}

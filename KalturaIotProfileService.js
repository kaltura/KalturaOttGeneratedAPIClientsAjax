
/**
 *Class definition for the Kaltura service: iotProfile.
 **/
var KalturaIotProfileService = {
	/**
	 * Add new new environment in aws.
	 **/
	add: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("iotprofile", "add", kparams);
	}
}

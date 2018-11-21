
/**
 *Class definition for the Kaltura service: drmProfile.
 **/
var KalturaDrmProfileService = {
	/**
	 * Returns all DRM adapters for partner.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("drmprofile", "list", kparams);
	}
}

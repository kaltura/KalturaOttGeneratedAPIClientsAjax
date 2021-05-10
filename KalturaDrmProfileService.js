
/**
 *Class definition for the Kaltura service: drmProfile.
 **/
var KalturaDrmProfileService = {
	/**
	 * Internal API !!! Insert new DrmProfile.
	 * @param	drmProfile	KalturaDrmProfile		Drm adapter Object (optional)
	 **/
	add: function(drmProfile){
		var kparams = new Object();
		kparams.drmProfile = drmProfile;
		return new KalturaRequestBuilder("drmprofile", "add", kparams);
	},
	
	/**
	 * Internal API !!! Delete DrmProfile.
	 * @param	id	int		Drm adapter id (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("drmprofile", "delete", kparams);
	},
	
	/**
	 * Returns all DRM adapters for partner.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("drmprofile", "list", kparams);
	}
}

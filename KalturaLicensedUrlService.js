
/**
 *Class definition for the Kaltura service: licensedUrl.
 **/
var KalturaLicensedUrlService = {
	/**
	 * Get the URL for playing an asset - program, media or recording.
	 * @param	request	KalturaLicensedUrlBaseRequest		Licensed URL request parameters (optional)
	 **/
	get: function(request){
		var kparams = new Object();
		kparams.request = request;
		return new KalturaRequestBuilder("licensedurl", "get", kparams);
	}
}

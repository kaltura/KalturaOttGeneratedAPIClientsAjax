
/**
 *Class definition for the Kaltura service: partner.
 **/
var KalturaPartnerService = {
	/**
	 * Returns a login session for external system (like OVP).
	 **/
	externalLogin: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("partner", "externalLogin", kparams);
	}
}

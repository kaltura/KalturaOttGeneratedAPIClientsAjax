
/**
 *Class definition for the Kaltura service: personalActivityCleanup.
 **/
var KalturaPersonalActivityCleanupService = {
	/**
	 * PersonalActivityCleanupConfiguration get.
	 **/
	getPartnerConfiguration: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("personalactivitycleanup", "getPartnerConfiguration", kparams);
	},
	
	/**
	 * PersonalActivityCleanupConfiguration Update.
	 * @param	personalActivityCleanupConfiguration	KalturaPersonalActivityCleanupConfiguration		PersonalActivityCleanupConfiguration details (optional)
	 **/
	updatePartnerConfiguration: function(personalActivityCleanupConfiguration){
		var kparams = new Object();
		kparams.personalActivityCleanupConfiguration = personalActivityCleanupConfiguration;
		return new KalturaRequestBuilder("personalactivitycleanup", "updatePartnerConfiguration", kparams);
	}
}

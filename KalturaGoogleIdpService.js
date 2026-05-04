
/**
 *Class definition for the Kaltura service: googleIdp.
 **/
var KalturaGoogleIdpService = {
	/**
	 * Attaches the KS’s ottUser to a Google identity. Note: Attempting to attach to an IDP, a user that is already attached to the IDP in question, will fail with the appropriate error..
	 * @param	idToken	string		The Google OIDC ID Token obtained from the client. (optional)
	 **/
	attach: function(idToken){
		var kparams = new Object();
		kparams.idToken = idToken;
		return new KalturaRequestBuilder("googleidp", "attach", kparams);
	},
	
	/**
	 * Detaches the KS’s ottUser from the Google identity that he is connected to. Note: Attempting to detach from an IDP, a user that is not attached to the IDP in question, will fail with the appropriate error..
	 **/
	detach: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("googleidp", "detach", kparams);
	},
	
	/**
	 * Returns the identification of Kaltura’s partner (acting as the service provider) in Google (acting as the identity provider)..
	 **/
	getServiceId: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("googleidp", "getServiceId", kparams);
	},
	
	/**
	 * Returns whether the user in question is attached to the Google..
	 **/
	isAttached: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("googleidp", "isAttached", kparams);
	},
	
	/**
	 * Login an ottUser (acquire KS) using a Google id token..
	 * @param	partnerId	int		Partner identifier (optional)
	 * @param	idToken	string		The Google OIDC ID Token used to verify user identity. (optional)
	 * @param	extraParams	map		Partner specific extra parameters for the login process (optional, default: null)
	 * @param	udid	string		The user device identification (optional, default: null)
	 **/
	login: function(partnerId, idToken, extraParams, udid){
		if(!extraParams)
			extraParams = null;
		if(!udid)
			udid = null;
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.idToken = idToken;
		if (extraParams != null)
			kparams.extraParams = extraParams;
		kparams.udid = udid;
		return new KalturaRequestBuilder("googleidp", "login", kparams);
	},
	
	/**
	 * Sets the identification of Kaltura’s partner (that acts as a service provider) in Google (that acts as identity provider)..
	 * @param	serviceId	string		The Google App ID (Application Identifier). (optional)
	 **/
	setServiceId: function(serviceId){
		var kparams = new Object();
		kparams.serviceId = serviceId;
		return new KalturaRequestBuilder("googleidp", "setServiceId", kparams);
	}
}

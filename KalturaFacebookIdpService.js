
/**
 *Class definition for the Kaltura service: facebookIdp.
 **/
var KalturaFacebookIdpService = {
	/**
	 * Attaches the KS’s ottUser to a Facebook identity. Note: Attempting to attach to an IDP, a user that is already attached to the IDP in question, will fail with the appropriate error..
	 * @param	accessToken	string		The valid Facebook Access Token obtained from the client-side login. (optional)
	 **/
	attach: function(accessToken){
		var kparams = new Object();
		kparams.accessToken = accessToken;
		return new KalturaRequestBuilder("facebookidp", "attach", kparams);
	},
	
	/**
	 * Detaches the KS’s ottUser from the Facebook identity that he is connected to. Note: Attempting to detach from an IDP, a user that is not attached to the IDP in question, will fail with the appropriate error..
	 **/
	detach: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("facebookidp", "detach", kparams);
	},
	
	/**
	 * Returns the identification of Kaltura’s partner (acting as the service provider) in Facebook (acting as the identity provider)..
	 **/
	getServiceId: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("facebookidp", "getServiceId", kparams);
	},
	
	/**
	 * Returns whether the user in question is attached to the Facebook..
	 **/
	isAttached: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("facebookidp", "isAttached", kparams);
	},
	
	/**
	 * Login an ottUser (acquire KS) using a Facebook access token..
	 * @param	partnerId	int		Partner identifier (optional)
	 * @param	accessToken	string		The valid Facebook Access Token used to verify the user identity. (optional)
	 * @param	extraParams	map		Partner specific extra parameters for the login process (optional, default: null)
	 * @param	udid	string		The user device identification (optional, default: null)
	 **/
	login: function(partnerId, accessToken, extraParams, udid){
		if(!extraParams)
			extraParams = null;
		if(!udid)
			udid = null;
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.accessToken = accessToken;
		if (extraParams != null)
			kparams.extraParams = extraParams;
		kparams.udid = udid;
		return new KalturaRequestBuilder("facebookidp", "login", kparams);
	},
	
	/**
	 * Sets the secret that is shared between Kaltura’s partner (that acts as a service provider) in Facebook (that acts as identity provider) that enables Facebook to identify the partner..
	 * @param	secret	string		The shared secret key provided by Facebook for the application. (optional)
	 **/
	setSecret: function(secret){
		var kparams = new Object();
		kparams.secret = secret;
		return new KalturaRequestBuilder("facebookidp", "setSecret", kparams);
	},
	
	/**
	 * Sets the identification of Kaltura’s partner (that acts as a service provider) in Facebook (that acts as identity provider)..
	 * @param	serviceId	string		The Facebook App ID (Application Identifier). (optional)
	 **/
	setServiceId: function(serviceId){
		var kparams = new Object();
		kparams.serviceId = serviceId;
		return new KalturaRequestBuilder("facebookidp", "setServiceId", kparams);
	}
}

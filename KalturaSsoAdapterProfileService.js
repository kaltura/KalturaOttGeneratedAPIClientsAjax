
/**
 *Class definition for the Kaltura service: ssoAdapterProfile.
 **/
var KalturaSsoAdapterProfileService = {
	/**
	 * Insert new sso adapter for partner.
	 * @param	ssoAdapter	KalturaSSOAdapterProfile		SSO Adapter Object to be added (optional)
	 **/
	add: function(ssoAdapter){
		var kparams = new Object();
		kparams.ssoAdapter = ssoAdapter;
		return new KalturaRequestBuilder("ssoadapterprofile", "add", kparams);
	},
	
	/**
	 * Delete sso adapters by sso adapters id.
	 * @param	ssoAdapterId	int		SSO Adapter Identifier (optional)
	 **/
	deleteAction: function(ssoAdapterId){
		var kparams = new Object();
		kparams.ssoAdapterId = ssoAdapterId;
		return new KalturaRequestBuilder("ssoadapterprofile", "delete", kparams);
	},
	
	/**
	 * Generate SSO Adapter shared secret.
	 * @param	ssoAdapterId	int		SSO Adapter identifier (optional)
	 **/
	generateSharedSecret: function(ssoAdapterId){
		var kparams = new Object();
		kparams.ssoAdapterId = ssoAdapterId;
		return new KalturaRequestBuilder("ssoadapterprofile", "generateSharedSecret", kparams);
	},
	
	/**
	 * Request validation against 3rd party.
	 * @param	intent	string		intent (optional)
	 * @param	adapterData	array		adapter Data (optional)
	 **/
	invoke: function(intent, adapterData){
		var kparams = new Object();
		kparams.intent = intent;
		kparams.adapterData = adapterData;
		return new KalturaRequestBuilder("ssoadapterprofile", "invoke", kparams);
	},
	
	/**
	 * Returns all sso adapters for partner : id + name.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("ssoadapterprofile", "list", kparams);
	},
	
	/**
	 * Update sso adapter details.
	 * @param	ssoAdapterId	int		SSO Adapter Identifier (optional)
	 * @param	ssoAdapter	KalturaSSOAdapterProfile		SSO Adapter Object (optional)
	 **/
	update: function(ssoAdapterId, ssoAdapter){
		var kparams = new Object();
		kparams.ssoAdapterId = ssoAdapterId;
		kparams.ssoAdapter = ssoAdapter;
		return new KalturaRequestBuilder("ssoadapterprofile", "update", kparams);
	}
}

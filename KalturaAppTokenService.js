
/**
 *Class definition for the Kaltura service: appToken.
 **/
var KalturaAppTokenService = {
	/**
	 * Add new application authentication token.
	 * @param	appToken	KalturaAppToken		Application token (optional)
	 **/
	add: function(appToken){
		var kparams = new Object();
		kparams.appToken = appToken;
		return new KalturaRequestBuilder("apptoken", "add", kparams);
	},
	
	/**
	 * Delete application authentication token by id.
	 * @param	id	string		Application token identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("apptoken", "delete", kparams);
	},
	
	/**
	 * Get application authentication token by id.
	 * @param	id	string		Application token identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("apptoken", "get", kparams);
	},
	
	/**
	 * Starts a new KS (Kaltura Session) based on application authentication token id.
	 * @param	id	string		application token id (optional)
	 * @param	tokenHash	string		hashed token - current KS concatenated with the application token hashed using the application token ‘hashType’ (optional)
	 * @param	userId	string		session user id, will be ignored if a different user id already defined on the application token (optional, default: null)
	 * @param	expiry	int		session expiry (in seconds), could be overwritten by shorter expiry of the application token and the session-expiry that defined on the application token (optional, default: null)
	 * @param	udid	string		Device UDID (optional, default: null)
	 * @param	extraParams	map		extra params (optional, default: null)
	 **/
	startSession: function(id, tokenHash, userId, expiry, udid, extraParams){
		if(!userId)
			userId = null;
		if(!expiry)
			expiry = null;
		if(!udid)
			udid = null;
		if(!extraParams)
			extraParams = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.tokenHash = tokenHash;
		kparams.userId = userId;
		kparams.expiry = expiry;
		kparams.udid = udid;
		if (extraParams != null)
			kparams.extraParams = extraParams;
		return new KalturaRequestBuilder("apptoken", "startSession", kparams);
	}
}

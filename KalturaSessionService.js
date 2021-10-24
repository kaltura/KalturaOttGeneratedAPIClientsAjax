
/**
 *Class definition for the Kaltura service: session.
 **/
var KalturaSessionService = {
	/**
	 * Create session characteristic.
	 * @param	userId	string		user identifier (optional)
	 * @param	householdId	int		household identifier (optional)
	 * @param	udid	string		device UDID (optional)
	 * @param	expiration	int		relative expiration(TTL) in seconds, should be equal or greater than KS expiration (optional)
	 * @param	regionId	int		region identifier (optional, default: null)
	 * @param	sessionCharacteristicParams	map		session characteristic dynamic params (optional, default: null)
	 **/
	createSessionCharacteristic: function(userId, householdId, udid, expiration, regionId, sessionCharacteristicParams){
		if(!regionId)
			regionId = null;
		if(!sessionCharacteristicParams)
			sessionCharacteristicParams = null;
		var kparams = new Object();
		kparams.userId = userId;
		kparams.householdId = householdId;
		kparams.udid = udid;
		kparams.expiration = expiration;
		kparams.regionId = regionId;
		if (sessionCharacteristicParams != null)
			kparams.sessionCharacteristicParams = sessionCharacteristicParams;
		return new KalturaRequestBuilder("session", "createSessionCharacteristic", kparams);
	},
	
	/**
	 * Parses KS.
	 * @param	session	string		Additional KS to parse, if not passed the user's KS will be parsed (optional, default: null)
	 **/
	get: function(session){
		if(!session)
			session = null;
		var kparams = new Object();
		kparams.session = session;
		return new KalturaRequestBuilder("session", "get", kparams);
	},
	
	/**
	 * Revokes all the sessions (KS) of a given user.
	 **/
	revoke: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("session", "revoke", kparams);
	},
	
	/**
	 * Switching the user in the session by generating a new session for a new user within the same household.
	 * @param	userIdToSwitch	string		The identifier of the user to change (optional)
	 **/
	switchUser: function(userIdToSwitch){
		var kparams = new Object();
		kparams.userIdToSwitch = userIdToSwitch;
		return new KalturaRequestBuilder("session", "switchUser", kparams);
	}
}

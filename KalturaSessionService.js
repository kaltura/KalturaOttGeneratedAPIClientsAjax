
/**
 *Class definition for the Kaltura service: session.
 **/
var KalturaSessionService = {
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

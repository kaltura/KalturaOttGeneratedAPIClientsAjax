
/**
 *Class definition for the Kaltura service: userInterest.
 **/
var KalturaUserInterestService = {
	/**
	 * Insert new user interest for partner user.
	 * @param	userInterest	KalturaUserInterest		User interest Object (optional)
	 **/
	add: function(userInterest){
		var kparams = new Object();
		kparams.userInterest = userInterest;
		return new KalturaRequestBuilder("userinterest", "add", kparams);
	},
	
	/**
	 * Delete new user interest for partner user.
	 * @param	id	string		User interest identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("userinterest", "delete", kparams);
	},
	
	/**
	 * Delete new user interest for partner user.
	 * @param	id	string		User interest identifier (optional)
	 * @param	token	string		User's token identifier (optional)
	 * @param	partnerId	int		Partner identifier (optional)
	 **/
	deleteWithToken: function(id, token, partnerId){
		var kparams = new Object();
		kparams.id = id;
		kparams.token = token;
		kparams.partnerId = partnerId;
		return new KalturaRequestBuilder("userinterest", "deleteWithToken", kparams);
	},
	
	/**
	 * Returns all Engagement for partner.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("userinterest", "list", kparams);
	}
}

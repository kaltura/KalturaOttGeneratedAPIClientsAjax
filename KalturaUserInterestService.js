
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
	 * Returns all Engagement for partner.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("userinterest", "list", kparams);
	}
}

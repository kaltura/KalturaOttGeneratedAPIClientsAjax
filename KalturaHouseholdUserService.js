
/**
 *Class definition for the Kaltura service: householdUser.
 **/
var KalturaHouseholdUserService = {
	/**
	 * Adds a user to household.
	 * @param	householdUser	KalturaHouseholdUser		User details to add (optional)
	 **/
	add: function(householdUser){
		var kparams = new Object();
		kparams.householdUser = householdUser;
		return new KalturaRequestBuilder("householduser", "add", kparams);
	},
	
	/**
	 * Removes a user from household.
	 * @param	id	string		The identifier of the user to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("householduser", "delete", kparams);
	},
	
	/**
	 * Returns the users within the household.
	 * @param	filter	KalturaHouseholdUserFilter		Household user filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("householduser", "list", kparams);
	}
}

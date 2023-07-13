
/**
 *Class definition for the Kaltura service: household.
 **/
var KalturaHouseholdService = {
	/**
	 * Creates a household for the user.
	 * @param	household	KalturaHousehold		Household object (optional)
	 **/
	add: function(household){
		var kparams = new Object();
		kparams.household = household;
		return new KalturaRequestBuilder("household", "add", kparams);
	},
	
	/**
	 * Fully delete a household. Delete all of the household information, including users, devices, entitlements, payment methods and notification date..
	 * @param	id	int		Household identifier (optional, default: null)
	 **/
	deleteAction: function(id){
		if(!id)
			id = null;
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("household", "delete", kparams);
	},
	
	/**
	 * Returns the household model.
	 * @param	id	int		Household identifier (optional, default: null)
	 **/
	get: function(id){
		if(!id)
			id = null;
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("household", "get", kparams);
	},
	
	/**
	 * Retrive household for the partner filter by external identifier.
	 * @param	filter	KalturaHouseholdFilter		Filter parameters for filtering out the result (optional)
	 * @param	pager	KalturaFilterPager		Page size and index. Number of assets to return per page. Possible range 5 ≤ size ≥ 50. If omitted - will be set to 25. If a value > 50 provided – will set to 50 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("household", "list", kparams);
	},
	
	/**
	 * Purge a household. Delete all of the household information, including users, devices, entitlements, payment methods and notification date..
	 * @param	id	int		Household identifier (optional)
	 **/
	purge: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("household", "purge", kparams);
	},
	
	/**
	 * Reset a household’s time limitation for removing user or device.
	 * @param	frequencyType	string		Possible values: devices – reset the device change frequency.
 *	            users – reset the user add/remove frequency (optional, enum: KalturaHouseholdFrequencyType)
	 **/
	resetFrequency: function(frequencyType){
		var kparams = new Object();
		kparams.frequencyType = frequencyType;
		return new KalturaRequestBuilder("household", "resetFrequency", kparams);
	},
	
	/**
	 * Resumed a given household service to its previous service settings.
	 **/
	resume: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("household", "resume", kparams);
	},
	
	/**
	 * Suspend a given household service. Sets the household status to “suspended&quot;.The household service settings are maintained for later resume.
	 * @param	roleId	int		roleId (optional, default: null)
	 **/
	suspend: function(roleId){
		if(!roleId)
			roleId = null;
		var kparams = new Object();
		kparams.roleId = roleId;
		return new KalturaRequestBuilder("household", "suspend", kparams);
	},
	
	/**
	 * Update the household name and description.
	 * @param	household	KalturaHousehold		Household object (optional)
	 **/
	update: function(household){
		var kparams = new Object();
		kparams.household = household;
		return new KalturaRequestBuilder("household", "update", kparams);
	}
}

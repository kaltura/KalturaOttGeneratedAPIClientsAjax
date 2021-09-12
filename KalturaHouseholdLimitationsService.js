
/**
 *Class definition for the Kaltura service: householdLimitations.
 **/
var KalturaHouseholdLimitationsService = {
	/**
	 * Add household limitation.
	 * @param	householdLimitations	KalturaHouseholdLimitations		Household limitations (optional)
	 **/
	add: function(householdLimitations){
		var kparams = new Object();
		kparams.householdLimitations = householdLimitations;
		return new KalturaRequestBuilder("householdlimitations", "add", kparams);
	},
	
	/**
	 * Delete household limitation.
	 * @param	householdLimitationsId	int		Id of household limitation (optional)
	 **/
	deleteAction: function(householdLimitationsId){
		var kparams = new Object();
		kparams.householdLimitationsId = householdLimitationsId;
		return new KalturaRequestBuilder("householdlimitations", "delete", kparams);
	},
	
	/**
	 * Get the limitation module by id.
	 * @param	id	int		Household limitations module identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("householdlimitations", "get", kparams);
	},
	
	/**
	 * Checks if the DLM is used.
	 * @param	dlmId	int		Household limitations module identifier (optional)
	 **/
	isUsed: function(dlmId){
		var kparams = new Object();
		kparams.dlmId = dlmId;
		return new KalturaRequestBuilder("householdlimitations", "isUsed", kparams);
	},
	
	/**
	 * Get the list of PartnerConfiguration.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("householdlimitations", "list", kparams);
	},
	
	/**
	 * Updates household limitation.
	 * @param	dlmId	int		Id of household limitation (optional)
	 * @param	householdLimitation	KalturaHouseholdLimitations		household limitation (optional)
	 **/
	update: function(dlmId, householdLimitation){
		var kparams = new Object();
		kparams.dlmId = dlmId;
		kparams.householdLimitation = householdLimitation;
		return new KalturaRequestBuilder("householdlimitations", "update", kparams);
	}
}

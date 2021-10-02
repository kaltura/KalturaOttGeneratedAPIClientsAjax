
/**
 *Class definition for the Kaltura service: householdLimitations.
 **/
var KalturaHouseholdLimitationsService = {
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
	 * Get the list of PartnerConfiguration.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("householdlimitations", "list", kparams);
	}
}


/**
 *Class definition for the Kaltura service: householdPremiumService.
 **/
var KalturaHouseholdPremiumServiceService = {
	/**
	 * Returns all the premium services allowed for the household.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("householdpremiumservice", "list", kparams);
	}
}


/**
 *Class definition for the Kaltura service: householdQuota.
 **/
var KalturaHouseholdQuotaService = {
	/**
	 * Returns the household&#39;s quota data.
	 **/
	get: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("householdquota", "get", kparams);
	}
}

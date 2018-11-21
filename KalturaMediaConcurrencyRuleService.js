
/**
 *Class definition for the Kaltura service: mediaConcurrencyRule.
 **/
var KalturaMediaConcurrencyRuleService = {
	/**
	 * Get the list of meta mappings for the partner.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("mediaconcurrencyrule", "list", kparams);
	}
}

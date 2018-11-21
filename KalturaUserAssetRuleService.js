
/**
 *Class definition for the Kaltura service: userAssetRule.
 **/
var KalturaUserAssetRuleService = {
	/**
	 * Retrieve all the rules (parental, geo, device or user-type) that applies for this user and asset..
	 * @param	filter	KalturaUserAssetRuleFilter		Filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("userassetrule", "list", kparams);
	}
}

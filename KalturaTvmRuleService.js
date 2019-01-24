
/**
 *Class definition for the Kaltura service: tvmRule.
 **/
var KalturaTvmRuleService = {
	/**
	 * Get the list of tvm rules for the partner.
	 * @param	filter	KalturaTvmRuleFilter		TvmRuleFilter Filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("tvmrule", "list", kparams);
	}
}

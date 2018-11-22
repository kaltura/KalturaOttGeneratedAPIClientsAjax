
/**
 *Class definition for the Kaltura service: parentalRule.
 **/
var KalturaParentalRuleService = {
	/**
	 * Disables a parental rule that was previously defined by the household master. Disable can be at specific user or household level..
	 * @param	ruleId	int		Rule Identifier (optional)
	 * @param	entityReference	string		Reference type to filter by (optional, enum: KalturaEntityReferenceBy)
	 **/
	disable: function(ruleId, entityReference){
		var kparams = new Object();
		kparams.ruleId = ruleId;
		kparams.entityReference = entityReference;
		return new KalturaRequestBuilder("parentalrule", "disable", kparams);
	},
	
	/**
	 * Disables a parental rule that was defined at account level. Disable can be at specific user or household level..
	 * @param	entityReference	string		Reference type to filter by (optional, enum: KalturaEntityReferenceBy)
	 **/
	disableDefault: function(entityReference){
		var kparams = new Object();
		kparams.entityReference = entityReference;
		return new KalturaRequestBuilder("parentalrule", "disableDefault", kparams);
	},
	
	/**
	 * Enable a parental rules for a user.
	 * @param	ruleId	int		Rule Identifier (optional)
	 * @param	entityReference	string		Reference type to filter by (optional, enum: KalturaEntityReferenceBy)
	 **/
	enable: function(ruleId, entityReference){
		var kparams = new Object();
		kparams.ruleId = ruleId;
		kparams.entityReference = entityReference;
		return new KalturaRequestBuilder("parentalrule", "enable", kparams);
	},
	
	/**
	 * Return the parental rules that applies for the user or household. Can include rules that have been associated in account, household, or user level.
 *	            Association level is also specified in the response..
	 * @param	filter	KalturaParentalRuleFilter		Filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("parentalrule", "list", kparams);
	}
}

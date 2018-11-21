
/**
 *Class definition for the Kaltura service: businessModuleRule.
 **/
var KalturaBusinessModuleRuleService = {
	/**
	 * Add business module rule.
	 * @param	businessModuleRule	KalturaBusinessModuleRule		Business module rule (optional)
	 **/
	add: function(businessModuleRule){
		var kparams = new Object();
		kparams.businessModuleRule = businessModuleRule;
		return new KalturaRequestBuilder("businessmodulerule", "add", kparams);
	},
	
	/**
	 * Delete business module rule.
	 * @param	id	int		Business module rule ID (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("businessmodulerule", "delete", kparams);
	},
	
	/**
	 * Get business module rule by ID.
	 * @param	id	int		ID to get (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("businessmodulerule", "get", kparams);
	},
	
	/**
	 * Get the list of business module rules for the partner.
	 * @param	filter	KalturaBusinessModuleRuleFilter		filter by condition name (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("businessmodulerule", "list", kparams);
	},
	
	/**
	 * Update business module rule.
	 * @param	id	int		Business module rule ID to update (optional)
	 * @param	businessModuleRule	KalturaBusinessModuleRule		Business module rule (optional)
	 **/
	update: function(id, businessModuleRule){
		var kparams = new Object();
		kparams.id = id;
		kparams.businessModuleRule = businessModuleRule;
		return new KalturaRequestBuilder("businessmodulerule", "update", kparams);
	}
}

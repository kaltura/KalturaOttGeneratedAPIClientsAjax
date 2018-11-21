
/**
 *Class definition for the Kaltura service: assetUserRule.
 **/
var KalturaAssetUserRuleService = {
	/**
	 * Add asset user rule.
	 * @param	assetUserRule	KalturaAssetUserRule		Asset user rule (optional)
	 **/
	add: function(assetUserRule){
		var kparams = new Object();
		kparams.assetUserRule = assetUserRule;
		return new KalturaRequestBuilder("assetuserrule", "add", kparams);
	},
	
	/**
	 * Attach AssetUserRule To User.
	 * @param	ruleId	int		AssetUserRule id to add (optional)
	 **/
	attachUser: function(ruleId){
		var kparams = new Object();
		kparams.ruleId = ruleId;
		return new KalturaRequestBuilder("assetuserrule", "attachUser", kparams);
	},
	
	/**
	 * Delete asset user rule.
	 * @param	id	int		Asset user rule ID (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("assetuserrule", "delete", kparams);
	},
	
	/**
	 * Detach AssetUserRule from user.
	 * @param	ruleId	int		AssetUserRule id to remove (optional)
	 **/
	detachUser: function(ruleId){
		var kparams = new Object();
		kparams.ruleId = ruleId;
		return new KalturaRequestBuilder("assetuserrule", "detachUser", kparams);
	},
	
	/**
	 * Get the list of asset user rules for the partner.
	 * @param	filter	KalturaAssetUserRuleFilter		AssetUserRule Filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("assetuserrule", "list", kparams);
	},
	
	/**
	 * Update asset user rule.
	 * @param	id	int		Asset user rule ID to update (optional)
	 * @param	assetUserRule	KalturaAssetUserRule		Asset user rule (optional)
	 **/
	update: function(id, assetUserRule){
		var kparams = new Object();
		kparams.id = id;
		kparams.assetUserRule = assetUserRule;
		return new KalturaRequestBuilder("assetuserrule", "update", kparams);
	}
}

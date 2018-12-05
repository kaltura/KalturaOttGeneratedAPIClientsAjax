
/**
 *Class definition for the Kaltura service: assetRule.
 **/
var KalturaAssetRuleService = {
	/**
	 * Add asset rule.
	 * @param	assetRule	KalturaAssetRule		Asset rule (optional)
	 **/
	add: function(assetRule){
		var kparams = new Object();
		kparams.assetRule = assetRule;
		return new KalturaRequestBuilder("assetrule", "add", kparams);
	},
	
	/**
	 * Delete asset rule.
	 * @param	id	int		Asset rule ID (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("assetrule", "delete", kparams);
	},
	
	/**
	 * Get the list of asset rules for the partner.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("assetrule", "list", kparams);
	},
	
	/**
	 * Update asset rule.
	 * @param	id	int		Asset rule ID to update (optional)
	 * @param	assetRule	KalturaAssetRule		Asset rule (optional)
	 **/
	update: function(id, assetRule){
		var kparams = new Object();
		kparams.id = id;
		kparams.assetRule = assetRule;
		return new KalturaRequestBuilder("assetrule", "update", kparams);
	}
}


/**
 *Class definition for the Kaltura service: geoBlockRule.
 **/
var KalturaGeoBlockRuleService = {
	/**
	 * Add a new geo block rule.
	 * @param	geoBlockRule	KalturaGeoBlockRule		The geo block rule to add (optional)
	 **/
	add: function(geoBlockRule){
		var kparams = new Object();
		kparams.geoBlockRule = geoBlockRule;
		return new KalturaRequestBuilder("geoblockrule", "add", kparams);
	},
	
	/**
	 * Delete a geo block rule.
	 * @param	id	int		The id of the geo block rule to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("geoblockrule", "delete", kparams);
	},
	
	/**
	 * Get the list of geo block rules for the partner.
	 * @param	filter	KalturaGeoBlockRuleFilter		Filter criteria for the geo block rules (optional, default: null)
	 * @param	pager	KalturaFilterPager		Paging information for retrieving paginated results (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("geoblockrule", "list", kparams);
	},
	
	/**
	 * Update an existing geo block rule.
	 * @param	id	int		The id of the geo block rule to update (optional)
	 * @param	geoBlockRule	KalturaGeoBlockRule		The geo block rule data to update (optional)
	 **/
	update: function(id, geoBlockRule){
		var kparams = new Object();
		kparams.id = id;
		kparams.geoBlockRule = geoBlockRule;
		return new KalturaRequestBuilder("geoblockrule", "update", kparams);
	}
}

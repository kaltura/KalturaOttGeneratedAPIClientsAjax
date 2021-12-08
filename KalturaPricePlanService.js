
/**
 *Class definition for the Kaltura service: pricePlan.
 **/
var KalturaPricePlanService = {
	/**
	 * Returns a list of price plans by IDs.
	 * @param	filter	KalturaPricePlanFilter		Filter request (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("priceplan", "list", kparams);
	},
	
	/**
	 * Updates a price plan.
	 * @param	id	int		Price plan ID (optional)
	 * @param	pricePlan	KalturaPricePlan		Price plan to update (optional)
	 **/
	update: function(id, pricePlan){
		var kparams = new Object();
		kparams.id = id;
		kparams.pricePlan = pricePlan;
		return new KalturaRequestBuilder("priceplan", "update", kparams);
	}
}


/**
 *Class definition for the Kaltura service: pricePlan.
 **/
var KalturaPricePlanService = {
	/**
	 * Internal API !!!  Insert new PriceDetails for partner.
	 * @param	pricePlan	KalturaPricePlan		Price plan Object (optional)
	 **/
	add: function(pricePlan){
		var kparams = new Object();
		kparams.pricePlan = pricePlan;
		return new KalturaRequestBuilder("priceplan", "add", kparams);
	},
	
	/**
	 * Internal API !!! Delete PricePlan.
	 * @param	id	int		PricePlan identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("priceplan", "delete", kparams);
	},
	
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

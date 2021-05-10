
/**
 *Class definition for the Kaltura service: priceDetails.
 **/
var KalturaPriceDetailsService = {
	/**
	 * Internal API !!! Insert new PriceDetails for partner.
	 * @param	priceDetails	KalturaPriceDetails		PriceDetails Object (optional)
	 **/
	add: function(priceDetails){
		var kparams = new Object();
		kparams.priceDetails = priceDetails;
		return new KalturaRequestBuilder("pricedetails", "add", kparams);
	},
	
	/**
	 * Internal API !!! Delete PriceDetails.
	 * @param	id	int		PriceDetails identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("pricedetails", "delete", kparams);
	},
	
	/**
	 * Returns the list of available prices, can be filtered by price IDs.
	 * @param	filter	KalturaPriceDetailsFilter		Filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("pricedetails", "list", kparams);
	}
}

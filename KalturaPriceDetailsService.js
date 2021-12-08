
/**
 *Class definition for the Kaltura service: priceDetails.
 **/
var KalturaPriceDetailsService = {
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

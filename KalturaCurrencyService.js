
/**
 *Class definition for the Kaltura service: currency.
 **/
var KalturaCurrencyService = {
	/**
	 * Get the list of currencies for the partner with option to filter by currency codes.
	 * @param	filter	KalturaCurrencyFilter		currency filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("currency", "list", kparams);
	}
}

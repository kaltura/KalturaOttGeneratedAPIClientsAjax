
/**
 *Class definition for the Kaltura service: productPrice.
 **/
var KalturaProductPriceService = {
	/**
	 * Returns a price and a purchase status for each subscription or/and media file, for a given user (if passed) and with the consideration of a coupon code (if passed)..
	 * @param	filter	KalturaProductPriceFilter		Request filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("productprice", "list", kparams);
	}
}

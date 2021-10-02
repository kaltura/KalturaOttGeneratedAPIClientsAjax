
/**
 *Class definition for the Kaltura service: discountDetails.
 **/
var KalturaDiscountDetailsService = {
	/**
	 * Returns the list of available discounts details, can be filtered by discount codes.
	 * @param	filter	KalturaDiscountDetailsFilter		Filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("discountdetails", "list", kparams);
	}
}

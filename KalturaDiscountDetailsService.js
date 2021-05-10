
/**
 *Class definition for the Kaltura service: discountDetails.
 **/
var KalturaDiscountDetailsService = {
	/**
	 * Internal API !!! Insert new DiscountDetails for partner.
	 * @param	discountDetails	KalturaDiscountDetails		Discount details Object (optional)
	 **/
	add: function(discountDetails){
		var kparams = new Object();
		kparams.discountDetails = discountDetails;
		return new KalturaRequestBuilder("discountdetails", "add", kparams);
	},
	
	/**
	 * Internal API !!! Delete DiscountDetails.
	 * @param	id	int		DiscountDetails id (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("discountdetails", "delete", kparams);
	},
	
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

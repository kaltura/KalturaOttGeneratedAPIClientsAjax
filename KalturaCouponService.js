
/**
 *Class definition for the Kaltura service: coupon.
 **/
var KalturaCouponService = {
	/**
	 * Returns information about a coupon.
	 * @param	code	string		Coupon code (optional)
	 **/
	get: function(code){
		var kparams = new Object();
		kparams.code = code;
		return new KalturaRequestBuilder("coupon", "get", kparams);
	},
	
	/**
	 * Lists coupon codes..
	 * @param	filter	KalturaCouponFilter		Filter options (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("coupon", "list", kparams);
	}
}


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
	 * get all coupon codes of a specific couponGroup.
	 * @param	couponsGroupId	int		The couponsGroup ID for which its file links will be listed (optional)
	 **/
	getFilesLinks: function(couponsGroupId){
		var kparams = new Object();
		kparams.couponsGroupId = couponsGroupId;
		return new KalturaRequestBuilder("coupon", "getFilesLinks", kparams);
	}
}


/**
 *Class definition for the Kaltura service: couponsGroup.
 **/
var KalturaCouponsGroupService = {
	/**
	 * Add coupons group.
	 * @param	couponsGroup	KalturaCouponsGroup		Coupons group (optional)
	 **/
	add: function(couponsGroup){
		var kparams = new Object();
		kparams.couponsGroup = couponsGroup;
		return new KalturaRequestBuilder("couponsgroup", "add", kparams);
	},
	
	/**
	 * Delete a coupons group.
	 * @param	id	int		Coupons group identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("couponsgroup", "delete", kparams);
	},
	
	/**
	 * Generate a coupon.
	 * @param	id	int		Coupon group identifier (optional)
	 * @param	couponGenerationOptions	KalturaCouponGenerationOptions		Coupon generation options (optional)
	 **/
	generate: function(id, couponGenerationOptions){
		var kparams = new Object();
		kparams.id = id;
		kparams.couponGenerationOptions = couponGenerationOptions;
		return new KalturaRequestBuilder("couponsgroup", "generate", kparams);
	},
	
	/**
	 * Returns information about coupons group.
	 * @param	id	int		Coupons group ID (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("couponsgroup", "get", kparams);
	},
	
	/**
	 * Returns information about partner coupons groups.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("couponsgroup", "list", kparams);
	},
	
	/**
	 * Update coupons group.
	 * @param	id	int		Coupons group identifier (optional)
	 * @param	couponsGroup	KalturaCouponsGroup		Coupons group (optional)
	 **/
	update: function(id, couponsGroup){
		var kparams = new Object();
		kparams.id = id;
		kparams.couponsGroup = couponsGroup;
		return new KalturaRequestBuilder("couponsgroup", "update", kparams);
	}
}

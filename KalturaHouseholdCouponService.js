
/**
 *Class definition for the Kaltura service: householdCoupon.
 **/
var KalturaHouseholdCouponService = {
	/**
	 * householdCoupon add.
	 * @param	objectToAdd	KalturaHouseholdCoupon		householdCoupon details (optional)
	 **/
	add: function(objectToAdd){
		var kparams = new Object();
		kparams.objectToAdd = objectToAdd;
		return new KalturaRequestBuilder("householdcoupon", "add", kparams);
	},
	
	/**
	 * Remove coupon from household.
	 * @param	id	string		Coupon code (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("householdcoupon", "delete", kparams);
	},
	
	/**
	 * Gets all HouseholdCoupon items for a household.
	 * @param	filter	KalturaHouseholdCouponFilter		Filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("householdcoupon", "list", kparams);
	}
}

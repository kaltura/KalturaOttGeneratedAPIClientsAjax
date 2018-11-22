
/**
 *Class definition for the Kaltura service: subscription.
 **/
var KalturaSubscriptionService = {
	/**
	 * Returns a list of subscriptions requested by Subscription ID or file ID.
	 * @param	filter	KalturaSubscriptionFilter		Filter request (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("subscription", "list", kparams);
	},
	
	/**
	 * Returns information about a coupon for subscription.
	 * @param	id	int		subscription id (optional)
	 * @param	code	string		coupon code (optional)
	 **/
	validateCoupon: function(id, code){
		var kparams = new Object();
		kparams.id = id;
		kparams.code = code;
		return new KalturaRequestBuilder("subscription", "validateCoupon", kparams);
	}
}

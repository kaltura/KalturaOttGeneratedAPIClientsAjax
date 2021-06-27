
/**
 *Class definition for the Kaltura service: subscription.
 **/
var KalturaSubscriptionService = {
	/**
	 * Internal API !!! Insert new subscription for partner.
	 * @param	subscription	KalturaSubscriptionInternal		subscription object (optional)
	 **/
	add: function(subscription){
		var kparams = new Object();
		kparams.subscription = subscription;
		return new KalturaRequestBuilder("subscription", "add", kparams);
	},
	
	/**
	 * Internal API !!! Delete subscription.
	 * @param	id	int		Subscription id (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("subscription", "delete", kparams);
	},
	
	/**
	 * Returns a list of subscriptions requested by Subscription ID or file ID.
	 * @param	filter	KalturaSubscriptionFilter		Filter request (optional, default: null)
	 * @param	pager	KalturaFilterPager		Page size and index (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
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

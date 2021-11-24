
/**
 *Class definition for the Kaltura service: subscription.
 **/
var KalturaSubscriptionService = {
	/**
	 * Insert new subscription for partner.
	 * @param	subscription	KalturaSubscription		subscription object (optional)
	 **/
	add: function(subscription){
		var kparams = new Object();
		kparams.subscription = subscription;
		return new KalturaRequestBuilder("subscription", "add", kparams);
	},
	
	/**
	 * Delete subscription.
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
	 * Update Subscription.
	 * @param	id	int		Subscription id (optional)
	 * @param	subscription	KalturaSubscription		Subscription (optional)
	 **/
	update: function(id, subscription){
		var kparams = new Object();
		kparams.id = id;
		kparams.subscription = subscription;
		return new KalturaRequestBuilder("subscription", "update", kparams);
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

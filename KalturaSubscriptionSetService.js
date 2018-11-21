
/**
 *Class definition for the Kaltura service: subscriptionSet.
 **/
var KalturaSubscriptionSetService = {
	/**
	 * Add a new subscriptionSet.
	 * @param	subscriptionSet	KalturaSubscriptionSet		SubscriptionSet Object (optional)
	 **/
	add: function(subscriptionSet){
		var kparams = new Object();
		kparams.subscriptionSet = subscriptionSet;
		return new KalturaRequestBuilder("subscriptionset", "add", kparams);
	},
	
	/**
	 * Delete a subscriptionSet.
	 * @param	id	int		SubscriptionSet Identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("subscriptionset", "delete", kparams);
	},
	
	/**
	 * Get the subscriptionSet according to the Identifier.
	 * @param	id	int		SubscriptionSet Identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("subscriptionset", "get", kparams);
	},
	
	/**
	 * Returns a list of subscriptionSets requested by ids or subscription ids.
	 * @param	filter	KalturaSubscriptionSetFilter		SubscriptionSet filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("subscriptionset", "list", kparams);
	},
	
	/**
	 * Update the subscriptionSet.
	 * @param	id	int		SubscriptionSet Identifier (optional)
	 * @param	subscriptionSet	KalturaSubscriptionSet		SubscriptionSet Object (optional)
	 **/
	update: function(id, subscriptionSet){
		var kparams = new Object();
		kparams.id = id;
		kparams.subscriptionSet = subscriptionSet;
		return new KalturaRequestBuilder("subscriptionset", "update", kparams);
	}
}

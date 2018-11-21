
/**
 *Class definition for the Kaltura service: entitlement.
 **/
var KalturaEntitlementService = {
	/**
	 * Immediately cancel a subscription, PPV or collection. Cancel is possible only if within cancellation window and content not already consumed.
	 * @param	assetId	int		The mediaFileID to cancel (optional)
	 * @param	productType	string		The product type for the cancelation (optional, enum: KalturaTransactionType)
	 **/
	cancel: function(assetId, productType){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.productType = productType;
		return new KalturaRequestBuilder("entitlement", "cancel", kparams);
	},
	
	/**
	 * Cancel a household service subscription at the next renewal. The subscription stays valid till the next renewal..
	 * @param	subscriptionId	string		Subscription Code (optional)
	 **/
	cancelRenewal: function(subscriptionId){
		var kparams = new Object();
		kparams.subscriptionId = subscriptionId;
		return new KalturaRequestBuilder("entitlement", "cancelRenewal", kparams);
	},
	
	/**
	 * Cancel Scheduled Subscription.
	 * @param	scheduledSubscriptionId	int		Scheduled Subscription Identifier (optional)
	 **/
	cancelScheduledSubscription: function(scheduledSubscriptionId){
		var kparams = new Object();
		kparams.scheduledSubscriptionId = scheduledSubscriptionId;
		return new KalturaRequestBuilder("entitlement", "cancelScheduledSubscription", kparams);
	},
	
	/**
	 * Reconcile the user household&#39;s entitlements with an external entitlements source. This request is frequency protected to avoid too frequent calls per household..
	 **/
	externalReconcile: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("entitlement", "externalReconcile", kparams);
	},
	
	/**
	 * Immediately cancel a subscription, PPV or collection. Cancel applies regardless of cancellation window and content consumption status.
	 * @param	assetId	int		The mediaFileID to cancel (optional)
	 * @param	productType	string		The product type for the cancelation (optional, enum: KalturaTransactionType)
	 **/
	forceCancel: function(assetId, productType){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.productType = productType;
		return new KalturaRequestBuilder("entitlement", "forceCancel", kparams);
	},
	
	/**
	 * Returns the data about the next renewal.
	 * @param	id	int		Purchase Id (optional)
	 **/
	getNextRenewal: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("entitlement", "getNextRenewal", kparams);
	},
	
	/**
	 * Grant household for an entitlement for a PPV or Subscription..
	 * @param	productId	int		Identifier for the product package from which this content is offered (optional)
	 * @param	productType	string		Product package type. Possible values: PPV, Subscription, Collection (optional, enum: KalturaTransactionType)
	 * @param	history	bool		Controls if the new entitlements grant will appear in the user’s history. True – will add a history entry. False (or if ommited) – no history entry will be added (optional)
	 * @param	contentId	int		Identifier for the content. Relevant only if Product type = PPV (optional)
	 **/
	grant: function(productId, productType, history, contentId){
		if(!contentId)
			contentId = 0;
		var kparams = new Object();
		kparams.productId = productId;
		kparams.productType = productType;
		kparams.history = history;
		kparams.contentId = contentId;
		return new KalturaRequestBuilder("entitlement", "grant", kparams);
	},
	
	/**
	 * Gets all the entitled media items for a household.
	 * @param	filter	KalturaEntitlementFilter		Request filter (optional)
	 * @param	pager	KalturaFilterPager		Request pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("entitlement", "list", kparams);
	},
	
	/**
	 * Swap current entitlement (subscription) with new entitlement (subscription) - only Grant.
	 * @param	currentProductId	int		Identifier for the current product package (optional)
	 * @param	newProductId	int		Identifier for the new product package (optional)
	 * @param	history	bool		Controls if the new entitlements swap will appear in the user’s history. True – will add a history entry. False (or if ommited) – no history entry will be added (optional)
	 **/
	swap: function(currentProductId, newProductId, history){
		var kparams = new Object();
		kparams.currentProductId = currentProductId;
		kparams.newProductId = newProductId;
		kparams.history = history;
		return new KalturaRequestBuilder("entitlement", "swap", kparams);
	},
	
	/**
	 * Update Kaltura Entitelment by Purchase id.
	 * @param	id	int		Purchase Id (optional)
	 * @param	entitlement	KalturaEntitlement		KalturaEntitlement object (optional)
	 **/
	update: function(id, entitlement){
		var kparams = new Object();
		kparams.id = id;
		kparams.entitlement = entitlement;
		return new KalturaRequestBuilder("entitlement", "update", kparams);
	}
}

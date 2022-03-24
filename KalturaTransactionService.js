
/**
 *Class definition for the Kaltura service: transaction.
 **/
var KalturaTransactionService = {
	/**
	 * downgrade specific subscription for a household. entitlements will be updated on the existing subscription end date..
	 * @param	purchase	KalturaPurchase		Purchase properties (optional)
	 **/
	downgrade: function(purchase){
		var kparams = new Object();
		kparams.purchase = purchase;
		return new KalturaRequestBuilder("transaction", "downgrade", kparams);
	},
	
	/**
	 * Retrieve the purchase session identifier.
	 * @param	purchaseSession	KalturaPurchaseSession		Purchase properties (optional)
	 **/
	getPurchaseSessionId: function(purchaseSession){
		var kparams = new Object();
		kparams.purchaseSession = purchaseSession;
		return new KalturaRequestBuilder("transaction", "getPurchaseSessionId", kparams);
	},
	
	/**
	 * Purchase specific product, subscription or Program asset group offer (PAGO) for a household. Upon successful charge entitlements to use the requested product or subscription are granted..
	 * @param	purchase	KalturaPurchase		Purchase properties (optional)
	 **/
	purchase: function(purchase){
		var kparams = new Object();
		kparams.purchase = purchase;
		return new KalturaRequestBuilder("transaction", "purchase", kparams);
	},
	
	/**
	 * This method shall set the waiver flag on the user entitlement table and the waiver date field to the current date..
	 * @param	assetId	int		Asset identifier (optional)
	 * @param	transactionType	string		The transaction type (optional, enum: KalturaTransactionType)
	 **/
	setWaiver: function(assetId, transactionType){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.transactionType = transactionType;
		return new KalturaRequestBuilder("transaction", "setWaiver", kparams);
	},
	
	/**
	 * Updates a pending purchase transaction state..
	 * @param	paymentGatewayId	string		Payment gateway identifier (optional)
	 * @param	externalTransactionId	string		external transaction identifier (optional)
	 * @param	signature	string		Security signature to validate the caller is a payment gateway adapter application (optional)
	 * @param	status	KalturaTransactionStatus		Status properties (optional)
	 **/
	updateStatus: function(paymentGatewayId, externalTransactionId, signature, status){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.externalTransactionId = externalTransactionId;
		kparams.signature = signature;
		kparams.status = status;
		return new KalturaRequestBuilder("transaction", "updateStatus", kparams);
	},
	
	/**
	 * upgrade specific subscription for a household. Upon successful charge entitlements to use the requested product or subscription are granted..
	 * @param	purchase	KalturaPurchase		Purchase properties (optional)
	 **/
	upgrade: function(purchase){
		var kparams = new Object();
		kparams.purchase = purchase;
		return new KalturaRequestBuilder("transaction", "upgrade", kparams);
	},
	
	/**
	 * Verifies PPV/Subscription/Collection client purchase (such as InApp) and entitles the user..
	 * @param	externalReceipt	KalturaExternalReceipt		Receipt properties (optional)
	 **/
	validateReceipt: function(externalReceipt){
		var kparams = new Object();
		kparams.externalReceipt = externalReceipt;
		return new KalturaRequestBuilder("transaction", "validateReceipt", kparams);
	}
}

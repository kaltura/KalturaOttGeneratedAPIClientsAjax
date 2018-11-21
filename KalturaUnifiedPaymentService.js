
/**
 *Class definition for the Kaltura service: unifiedPayment.
 **/
var KalturaUnifiedPaymentService = {
	/**
	 * Returns the data about the next renewal.
	 * @param	id	int		Unified payment ID (optional)
	 **/
	getNextRenewal: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("unifiedpayment", "getNextRenewal", kparams);
	}
}

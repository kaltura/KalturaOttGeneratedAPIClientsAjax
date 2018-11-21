
/**
 *Class definition for the Kaltura service: paymentMethodProfile.
 **/
var KalturaPaymentMethodProfileService = {
	/**
	 * TBD.
	 * @param	paymentMethod	KalturaPaymentMethodProfile		Payment method to add (optional)
	 **/
	add: function(paymentMethod){
		var kparams = new Object();
		kparams.paymentMethod = paymentMethod;
		return new KalturaRequestBuilder("paymentmethodprofile", "add", kparams);
	},
	
	/**
	 * Delete payment method profile.
	 * @param	paymentMethodId	int		Payment method identifier to delete (optional)
	 **/
	deleteAction: function(paymentMethodId){
		var kparams = new Object();
		kparams.paymentMethodId = paymentMethodId;
		return new KalturaRequestBuilder("paymentmethodprofile", "delete", kparams);
	},
	
	/**
	 * TBD.
	 * @param	filter	KalturaPaymentMethodProfileFilter		Payment gateway method profile filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("paymentmethodprofile", "list", kparams);
	},
	
	/**
	 * Update payment method.
	 * @param	paymentMethodId	int		Payment method identifier to update (optional)
	 * @param	paymentMethod	KalturaPaymentMethodProfile		Payment method to update (optional)
	 **/
	update: function(paymentMethodId, paymentMethod){
		var kparams = new Object();
		kparams.paymentMethodId = paymentMethodId;
		kparams.paymentMethod = paymentMethod;
		return new KalturaRequestBuilder("paymentmethodprofile", "update", kparams);
	}
}

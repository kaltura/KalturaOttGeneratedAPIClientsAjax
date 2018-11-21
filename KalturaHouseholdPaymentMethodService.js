
/**
 *Class definition for the Kaltura service: householdPaymentMethod.
 **/
var KalturaHouseholdPaymentMethodService = {
	/**
	 * Add a new payment method for household.
	 * @param	householdPaymentMethod	KalturaHouseholdPaymentMethod		Household payment method (optional)
	 **/
	add: function(householdPaymentMethod){
		var kparams = new Object();
		kparams.householdPaymentMethod = householdPaymentMethod;
		return new KalturaRequestBuilder("householdpaymentmethod", "add", kparams);
	},
	
	/**
	 * Force remove of a payment method of the household..
	 * @param	paymentGatewayId	int		Payment Gateway Identifier (optional)
	 * @param	paymentMethodId	int		Payment method Identifier (optional)
	 **/
	forceRemove: function(paymentGatewayId, paymentMethodId){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.paymentMethodId = paymentMethodId;
		return new KalturaRequestBuilder("householdpaymentmethod", "forceRemove", kparams);
	},
	
	/**
	 * Get a list of all payment methods of the household..
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("householdpaymentmethod", "list", kparams);
	},
	
	/**
	 * Removes a payment method of the household..
	 * @param	paymentGatewayId	int		Payment Gateway Identifier (optional)
	 * @param	paymentMethodId	int		Payment method Identifier (optional)
	 **/
	remove: function(paymentGatewayId, paymentMethodId){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.paymentMethodId = paymentMethodId;
		return new KalturaRequestBuilder("householdpaymentmethod", "remove", kparams);
	},
	
	/**
	 * Set a payment method as default for the household..
	 * @param	paymentGatewayId	int		Payment Gateway Identifier (optional)
	 * @param	paymentMethodId	int		Payment method Identifier (optional)
	 **/
	setAsDefault: function(paymentGatewayId, paymentMethodId){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.paymentMethodId = paymentMethodId;
		return new KalturaRequestBuilder("householdpaymentmethod", "setAsDefault", kparams);
	}
}

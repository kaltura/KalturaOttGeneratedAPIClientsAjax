
/**
 *Class definition for the Kaltura service: paymentGatewayProfile.
 **/
var KalturaPaymentGatewayProfileService = {
	/**
	 * Insert new payment gateway for partner.
	 * @param	paymentGateway	KalturaPaymentGatewayProfile		Payment Gateway Object (optional)
	 **/
	add: function(paymentGateway){
		var kparams = new Object();
		kparams.paymentGateway = paymentGateway;
		return new KalturaRequestBuilder("paymentgatewayprofile", "add", kparams);
	},
	
	/**
	 * Delete payment gateway by payment gateway id.
	 * @param	paymentGatewayId	int		Payment Gateway Identifier (optional)
	 **/
	deleteAction: function(paymentGatewayId){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		return new KalturaRequestBuilder("paymentgatewayprofile", "delete", kparams);
	},
	
	/**
	 * Generate payment gateway shared secret.
	 * @param	paymentGatewayId	int		Payment gateway identifier (optional)
	 **/
	generateSharedSecret: function(paymentGatewayId){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		return new KalturaRequestBuilder("paymentgatewayprofile", "generateSharedSecret", kparams);
	},
	
	/**
	 * Gets the Payment Gateway Configuration for the payment gateway identifier given.
	 * @param	alias	string		The payemnt gateway for which to return the registration URL/s for the household. If omitted – return the regisration URL for the household for the default payment gateway (optional)
	 * @param	intent	string		Represent the client’s intent for working with the payment gateway. Intent options to be coordinated with the applicable payment gateway adapter. (optional)
	 * @param	extraParameters	array		Additional parameters to send to the payment gateway adapter. (optional)
	 **/
	getConfiguration: function(alias, intent, extraParameters){
		var kparams = new Object();
		kparams.alias = alias;
		kparams.intent = intent;
		kparams.extraParameters = extraParameters;
		return new KalturaRequestBuilder("paymentgatewayprofile", "getConfiguration", kparams);
	},
	
	/**
	 * Returns all payment gateways for partner : id + name.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("paymentgatewayprofile", "list", kparams);
	},
	
	/**
	 * Update payment gateway details.
	 * @param	paymentGatewayId	int		Payment Gateway Identifier (optional)
	 * @param	paymentGateway	KalturaPaymentGatewayProfile		Payment Gateway Object (optional)
	 **/
	update: function(paymentGatewayId, paymentGateway){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.paymentGateway = paymentGateway;
		return new KalturaRequestBuilder("paymentgatewayprofile", "update", kparams);
	}
}

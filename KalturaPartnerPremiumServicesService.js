
/**
 *Class definition for the Kaltura service: partnerPremiumServices.
 **/
var KalturaPartnerPremiumServicesService = {
	/**
	 * Returns list of services.
	 **/
	get: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("partnerpremiumservices", "get", kparams);
	},
	
	/**
	 * update partnerPremiumServices.
	 * @param	partnerPremiumServices	KalturaPartnerPremiumServices		partnerPremiumServices to update (optional)
	 **/
	update: function(partnerPremiumServices){
		var kparams = new Object();
		kparams.partnerPremiumServices = partnerPremiumServices;
		return new KalturaRequestBuilder("partnerpremiumservices", "update", kparams);
	}
}

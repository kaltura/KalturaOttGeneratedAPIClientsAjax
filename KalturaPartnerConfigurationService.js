
/**
 *Class definition for the Kaltura service: partnerConfiguration.
 **/
var KalturaPartnerConfigurationService = {
	/**
	 * Update Partner Configuration.
	 * @param	configuration	KalturaPartnerConfiguration		Partner Configuration
 *	            possible configuration type: 
 *	            "configuration": { "value": 0, "partner_configuration_type": { "type": "OSSAdapter", "objectType": "KalturaPartnerConfigurationHolder" },
 *	            "objectType": "KalturaBillingPartnerConfig"} (optional)
	 **/
	update: function(configuration){
		var kparams = new Object();
		kparams.configuration = configuration;
		return new KalturaRequestBuilder("partnerconfiguration", "update", kparams);
	}
}

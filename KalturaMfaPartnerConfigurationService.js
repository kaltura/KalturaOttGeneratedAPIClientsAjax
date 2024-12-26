
/**
 *Class definition for the Kaltura service: mfaPartnerConfiguration.
 **/
var KalturaMfaPartnerConfigurationService = {
	/**
	 * Get MFA partner configuration..
	 **/
	get: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("mfapartnerconfiguration", "get", kparams);
	},
	
	/**
	 * Update MFA partner configuration..
	 * @param	configuration	KalturaMultifactorAuthenticationPartnerConfiguration		MFA configuration (optional)
	 **/
	update: function(configuration){
		var kparams = new Object();
		kparams.configuration = configuration;
		return new KalturaRequestBuilder("mfapartnerconfiguration", "update", kparams);
	}
}

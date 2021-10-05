
/**
 *Class definition for the Kaltura service: epgServicePartnerConfiguration.
 **/
var KalturaEpgServicePartnerConfigurationService = {
	/**
	 * Returns EPG cache service partner configurations.
	 **/
	get: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("epgservicepartnerconfiguration", "get", kparams);
	},
	
	/**
	 * Returns EPG cache service partner configurations.
	 * @param	config	KalturaEpgServicePartnerConfiguration		the partner config updates (optional)
	 **/
	update: function(config){
		var kparams = new Object();
		kparams.config = config;
		return new KalturaRequestBuilder("epgservicepartnerconfiguration", "update", kparams);
	}
}

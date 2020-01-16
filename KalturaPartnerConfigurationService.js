
/**
 *Class definition for the Kaltura service: partnerConfiguration.
 **/
var KalturaPartnerConfigurationService = {
	/**
	 * Get the list of PartnerConfiguration.
	 * @param	filter	KalturaPartnerConfigurationFilter		filter by PartnerConfiguration type (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("partnerconfiguration", "list", kparams);
	},
	
	/**
	 * Update/set Partner Configuration.
	 * @param	configuration	KalturaPartnerConfiguration		Partner Configuration to update (optional)
	 **/
	update: function(configuration){
		var kparams = new Object();
		kparams.configuration = configuration;
		return new KalturaRequestBuilder("partnerconfiguration", "update", kparams);
	}
}

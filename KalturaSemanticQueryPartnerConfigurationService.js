
/**
 *Class definition for the Kaltura service: semanticQueryPartnerConfiguration.
 **/
var KalturaSemanticQueryPartnerConfigurationService = {
	/**
	 * Retrieves partner configuration for semantic query service..
	 **/
	get: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("semanticquerypartnerconfiguration", "get", kparams);
	},
	
	/**
	 * Updates the partner configuration for semantic query service..
	 * @param	configuration	KalturaSemanticQueryPartnerConfiguration		The partner configuration for semantic query generation. (optional)
	 **/
	update: function(configuration){
		var kparams = new Object();
		kparams.configuration = configuration;
		return new KalturaRequestBuilder("semanticquerypartnerconfiguration", "update", kparams);
	}
}

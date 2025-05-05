
/**
 *Class definition for the Kaltura service: semanticQueryPartnerConfiguration.
 **/
var KalturaSemanticQueryPartnerConfigurationService = {
	/**
	 * Retrieves the current partner configuration for semantic query..
	 **/
	get: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("semanticquerypartnerconfiguration", "get", kparams);
	},
	
	/**
	 * Updates the partner configuration for semantic query..
	 * @param	configuration	KalturaSemanticQueryPartnerConfiguration		The configuration parameters for semantic query generation. (optional)
	 **/
	update: function(configuration){
		var kparams = new Object();
		kparams.configuration = configuration;
		return new KalturaRequestBuilder("semanticquerypartnerconfiguration", "update", kparams);
	}
}


/**
 *Class definition for the Kaltura service: semanticQuery.
 **/
var KalturaSemanticQueryService = {
	/**
	 * Generates semantic queries based on the input query..
	 * @param	query	KalturaGenerateSemanticQuery		The semantic query generation request containing the input query text. (optional)
	 **/
	generate: function(query){
		var kparams = new Object();
		kparams.query = query;
		return new KalturaRequestBuilder("semanticquery", "generate", kparams);
	},
	
	/**
	 * Retrieves the current partner configuration for semantic query..
	 **/
	getPartnerConfiguration: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("semanticquery", "getPartnerConfiguration", kparams);
	},
	
	/**
	 * Updates the partner configuration for semantic query..
	 * @param	configuration	KalturaSemanticQueryPartnerConfiguration		The configuration parameters for semantic query generation. (optional)
	 **/
	updatePartnerConfiguration: function(configuration){
		var kparams = new Object();
		kparams.configuration = configuration;
		return new KalturaRequestBuilder("semanticquery", "updatePartnerConfiguration", kparams);
	}
}

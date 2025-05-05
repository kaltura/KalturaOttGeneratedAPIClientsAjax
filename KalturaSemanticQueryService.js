
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
	}
}

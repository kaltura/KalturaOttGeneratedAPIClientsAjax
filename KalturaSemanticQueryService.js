
/**
 *Class definition for the Kaltura service: semanticQuery.
 **/
var KalturaSemanticQueryService = {
	/**
	 * Generates a title and semantic sub-queries..
	 * @param	query	KalturaGenerateSemanticQuery		Parameters required for generating semantic queries. (optional)
	 **/
	generate: function(query){
		var kparams = new Object();
		kparams.query = query;
		return new KalturaRequestBuilder("semanticquery", "generate", kparams);
	}
}


/**
 *Class definition for the Kaltura service: semanticAssetSearchPartnerConfig.
 **/
var KalturaSemanticAssetSearchPartnerConfigService = {
	/**
	 * Retrieve the filtering condition configuration for the partner..
	 **/
	getFilteringCondition: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("semanticassetsearchpartnerconfig", "getFilteringCondition", kparams);
	},
	
	/**
	 * Retrieve the filtering condition configuration for program assets..
	 **/
	getProgramFilteringCondition: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("semanticassetsearchpartnerconfig", "getProgramFilteringCondition", kparams);
	},
	
	/**
	 * Retrieve the current program field configurations for semantic search..
	 **/
	getProgramSearchableAttributes: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("semanticassetsearchpartnerconfig", "getProgramSearchableAttributes", kparams);
	},
	
	/**
	 * Retrieve the current field configurations for semantic search..
	 * @param	assetStructId	int		Asset structure ID to filter configurations. (optional)
	 **/
	getSearchableAttributes: function(assetStructId){
		var kparams = new Object();
		kparams.assetStructId = assetStructId;
		return new KalturaRequestBuilder("semanticassetsearchpartnerconfig", "getSearchableAttributes", kparams);
	},
	
	/**
	 * Update rule that controls embedding generation and search behavior..
	 * @param	filteringCondition	KalturaFilteringCondition		Rule configuration parameters. (optional)
	 **/
	upsertFilteringCondition: function(filteringCondition){
		var kparams = new Object();
		kparams.filteringCondition = filteringCondition;
		return new KalturaRequestBuilder("semanticassetsearchpartnerconfig", "upsertFilteringCondition", kparams);
	},
	
	/**
	 * Update rule that controls embedding generation and search behavior for program assets..
	 * @param	filteringCondition	KalturaFilteringCondition		Rule configuration parameters for programs. (optional)
	 **/
	upsertProgramFilteringCondition: function(filteringCondition){
		var kparams = new Object();
		kparams.filteringCondition = filteringCondition;
		return new KalturaRequestBuilder("semanticassetsearchpartnerconfig", "upsertProgramFilteringCondition", kparams);
	},
	
	/**
	 * Update which fields should be included in semantic search for program assets..
	 * @param	programAttributes	KalturaProgramSearchableAttributes		Program searchable attributes configuration containing comma-separated attribute names. (optional)
	 **/
	upsertProgramSearchableAttributes: function(programAttributes){
		var kparams = new Object();
		kparams.programAttributes = programAttributes;
		return new KalturaRequestBuilder("semanticassetsearchpartnerconfig", "upsertProgramSearchableAttributes", kparams);
	},
	
	/**
	 * Update which fields should be included in semantic search for specific asset types..
	 * @param	attributes	KalturaSearchableAttributes		Fields configuration parameters. (optional)
	 **/
	upsertSearchableAttributes: function(attributes){
		var kparams = new Object();
		kparams.attributes = attributes;
		return new KalturaRequestBuilder("semanticassetsearchpartnerconfig", "upsertSearchableAttributes", kparams);
	}
}

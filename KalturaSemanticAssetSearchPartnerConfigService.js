
/**
 *Class definition for the Kaltura service: semanticAssetSearchPartnerConfig.
 **/
var KalturaSemanticAssetSearchPartnerConfigService = {
	/**
	 * Retrieves the filtering condition applied to asset searches..
	 **/
	getFilteringCondition: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("semanticassetsearchpartnerconfig", "getFilteringCondition", kparams);
	},
	
	/**
	 * Retrieves the searchable attributes associated with a specific asset structure..
	 * @param	assetStructId	int		The unique identifier of the asset structure. (optional)
	 **/
	getSearchableAttributes: function(assetStructId){
		var kparams = new Object();
		kparams.assetStructId = assetStructId;
		return new KalturaRequestBuilder("semanticassetsearchpartnerconfig", "getSearchableAttributes", kparams);
	},
	
	/**
	 * Adds or updates a filtering condition for asset searches..
	 * @param	filteringCondition	KalturaFilteringCondition		The filtering condition to be applied to asset searches. (optional)
	 **/
	upsertFilteringCondition: function(filteringCondition){
		var kparams = new Object();
		kparams.filteringCondition = filteringCondition;
		return new KalturaRequestBuilder("semanticassetsearchpartnerconfig", "upsertFilteringCondition", kparams);
	},
	
	/**
	 * Adds or updates searchable attributes for a given asset structure..
	 * @param	attributes	KalturaSearchableAttributes		The searchable attributes to be added or updated. (optional)
	 **/
	upsertSearchableAttributes: function(attributes){
		var kparams = new Object();
		kparams.attributes = attributes;
		return new KalturaRequestBuilder("semanticassetsearchpartnerconfig", "upsertSearchableAttributes", kparams);
	}
}

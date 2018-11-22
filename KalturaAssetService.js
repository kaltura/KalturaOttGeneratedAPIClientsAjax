
/**
 *Class definition for the Kaltura service: asset.
 **/
var KalturaAssetService = {
	/**
	 * Returns a group-by result for media or EPG according to given filter. Lists values of each field and their respective count..
	 * @param	filter	KalturaSearchAssetFilter		Filtering the assets request (optional, default: null)
	 **/
	count: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("asset", "count", kparams);
	},
	
	/**
	 * Returns media or EPG asset by media / EPG internal or external identifier.
	 * @param	id	string		Asset identifier (optional)
	 * @param	assetReferenceType	string		Asset type (optional, enum: KalturaAssetReferenceType)
	 **/
	get: function(id, assetReferenceType){
		var kparams = new Object();
		kparams.id = id;
		kparams.assetReferenceType = assetReferenceType;
		return new KalturaRequestBuilder("asset", "get", kparams);
	},
	
	/**
	 * Returns the data for ads control.
	 * @param	assetId	string		Asset identifier (optional)
	 * @param	assetType	string		Asset type (optional, enum: KalturaAssetType)
	 * @param	contextDataParams	KalturaPlaybackContextOptions		Parameters for the request (optional)
	 **/
	getAdsContext: function(assetId, assetType, contextDataParams){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.assetType = assetType;
		kparams.contextDataParams = contextDataParams;
		return new KalturaRequestBuilder("asset", "getAdsContext", kparams);
	},
	
	/**
	 * This action delivers all data relevant for player.
	 * @param	assetId	string		Asset identifier (optional)
	 * @param	assetType	string		Asset type (optional, enum: KalturaAssetType)
	 * @param	contextDataParams	KalturaPlaybackContextOptions		Parameters for the request (optional)
	 **/
	getPlaybackContext: function(assetId, assetType, contextDataParams){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.assetType = assetType;
		kparams.contextDataParams = contextDataParams;
		return new KalturaRequestBuilder("asset", "getPlaybackContext", kparams);
	},
	
	/**
	 * Returns media or EPG assets. Filters by media identifiers or by EPG internal or external identifier..
	 * @param	filter	KalturaAssetFilter		Filtering the assets request (optional, default: null)
	 * @param	pager	KalturaFilterPager		Paging the request (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("asset", "list", kparams);
	}
}

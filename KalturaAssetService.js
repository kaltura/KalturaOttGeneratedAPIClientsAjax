
/**
 *Class definition for the Kaltura service: asset.
 **/
var KalturaAssetService = {
	/**
	 * Add a new asset.
 *	            For metas of type bool-&gt; use kalturaBoolValue, type number-&gt; KalturaDoubleValue, type date -&gt; KalturaLongValue, type string -&gt; KalturaStringValue.
	 * @param	asset	KalturaAsset		Asset object (optional)
	 **/
	add: function(asset){
		var kparams = new Object();
		kparams.asset = asset;
		return new KalturaRequestBuilder("asset", "add", kparams);
	},
	
	/**
	 * Add new bulk upload batch job Conversion profile id can be specified in the API (note that the total request body size is limited to 10MB)..
	 * @param	fileData	HTMLElement		fileData (optional)
	 * @param	bulkUploadJobData	KalturaBulkUploadJobData		bulkUploadJobData (optional)
	 * @param	bulkUploadAssetData	KalturaBulkUploadAssetData		bulkUploadAssetData (optional)
	 **/
	addFromBulkUpload: function(fileData, bulkUploadJobData, bulkUploadAssetData){
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		kparams.bulkUploadJobData = bulkUploadJobData;
		kparams.bulkUploadAssetData = bulkUploadAssetData;
		return new KalturaRequestBuilder("asset", "addFromBulkUpload", kparams, kfiles);
	},
	
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
	 * Delete an existing asset.
	 * @param	id	int		Asset Identifier (optional)
	 * @param	assetReferenceType	string		Type of asset (optional, enum: KalturaAssetReferenceType)
	 **/
	deleteAction: function(id, assetReferenceType){
		var kparams = new Object();
		kparams.id = id;
		kparams.assetReferenceType = assetReferenceType;
		return new KalturaRequestBuilder("asset", "delete", kparams);
	},
	
	/**
	 * Returns media or EPG asset by media / EPG internal or external identifier.
 *	            Note: OPC accounts asset.get for internal identifier doesn&#39;t take under consideration personalized aspects neither shop limitations..
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
	 * Gets the bulk playback context for assets..
	 * @param	fileTypes	array		The types of files to include in the playback context. (optional)
	 * @param	streamerType	string		The type of streamer to use. (optional)
	 * @param	context	string		The context for the playback. (optional, enum: KalturaPlaybackContextType)
	 * @param	urlType	string		The type of URL to generate. (optional, enum: KalturaUrlType)
	 **/
	getBulkPlaybackContext: function(fileTypes, streamerType, context, urlType){
		var kparams = new Object();
		kparams.fileTypes = fileTypes;
		kparams.streamerType = streamerType;
		kparams.context = context;
		kparams.urlType = urlType;
		return new KalturaRequestBuilder("asset", "getBulkPlaybackContext", kparams);
	},
	
	/**
	 * This action delivers all data relevant for player.
	 * @param	assetId	string		Asset identifier (optional)
	 * @param	assetType	string		Asset type (optional, enum: KalturaAssetType)
	 * @param	contextDataParams	KalturaPlaybackContextOptions		Parameters for the request (optional)
	 * @param	sourceType	string		Filter sources by type (optional, default: null)
	 **/
	getPlaybackContext: function(assetId, assetType, contextDataParams, sourceType){
		if(!sourceType)
			sourceType = null;
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.assetType = assetType;
		kparams.contextDataParams = contextDataParams;
		kparams.sourceType = sourceType;
		return new KalturaRequestBuilder("asset", "getPlaybackContext", kparams);
	},
	
	/**
	 * This action delivers all data relevant for player.
	 * @param	assetId	string		Asset identifier (optional)
	 * @param	assetType	string		Asset type (optional, enum: KalturaAssetType)
	 * @param	contextDataParams	KalturaPlaybackContextOptions		Parameters for the request (optional)
	 * @param	sourceType	string		Filter sources by type (optional, default: null)
	 **/
	getPlaybackManifest: function(assetId, assetType, contextDataParams, sourceType){
		if(!sourceType)
			sourceType = null;
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.assetType = assetType;
		kparams.contextDataParams = contextDataParams;
		kparams.sourceType = sourceType;
		return new KalturaRequestBuilder("asset", "getPlaybackManifest", kparams);
	},
	
	/**
	 * Returns assets deduplicated by asset metadata (or supported asset&#39;s property)..
	 * @param	groupBy	KalturaAssetGroupBy		A metadata (or supported asset's property) to group by the assets (optional)
	 * @param	unmatchedItemsPolicy	string		Defines the policy to handle assets that don't have groupBy property (optional, enum: KalturaUnmatchedItemsPolicy)
	 * @param	orderBy	KalturaBaseAssetOrder		A metadata or supported asset's property to sort by (optional, default: null)
	 * @param	filter	KalturaListGroupsRepresentativesFilter		Filtering the assets request (optional, default: null)
	 * @param	selectionPolicy	KalturaRepresentativeSelectionPolicy		A policy that implements a well defined parametric process to select an asset out of group (optional, default: null)
	 * @param	pager	KalturaFilterPager		Paging the request (optional, default: null)
	 **/
	groupRepresentativeList: function(groupBy, unmatchedItemsPolicy, orderBy, filter, selectionPolicy, pager){
		if(!orderBy)
			orderBy = null;
		if(!filter)
			filter = null;
		if(!selectionPolicy)
			selectionPolicy = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.groupBy = groupBy;
		kparams.unmatchedItemsPolicy = unmatchedItemsPolicy;
		if (orderBy != null)
			kparams.orderBy = orderBy;
		if (filter != null)
			kparams.filter = filter;
		if (selectionPolicy != null)
			kparams.selectionPolicy = selectionPolicy;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("asset", "groupRepresentativeList", kparams);
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
	},
	
	/**
	 * Returns recent selected assets.
	 * @param	filter	KalturaPersonalAssetSelectionFilter		Filtering the assets request (optional)
	 **/
	listPersonalSelection: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("asset", "listPersonalSelection", kparams);
	},
	
	/**
	 * remove metas and tags from asset.
	 * @param	id	int		Asset Identifier (optional)
	 * @param	assetReferenceType	string		Type of asset (optional, enum: KalturaAssetReferenceType)
	 * @param	idIn	string		comma separated ids of metas and tags (optional)
	 **/
	removeMetasAndTags: function(id, assetReferenceType, idIn){
		var kparams = new Object();
		kparams.id = id;
		kparams.assetReferenceType = assetReferenceType;
		kparams.idIn = idIn;
		return new KalturaRequestBuilder("asset", "removeMetasAndTags", kparams);
	},
	
	/**
	 * update an existing asset.
 *	            For metas of type bool-&gt; use kalturaBoolValue, type number-&gt; KalturaDoubleValue, type date -&gt; KalturaLongValue, type string -&gt; KalturaStringValue.
	 * @param	id	int		Asset Identifier (optional)
	 * @param	asset	KalturaAsset		Asset object (optional)
	 **/
	update: function(id, asset){
		var kparams = new Object();
		kparams.id = id;
		kparams.asset = asset;
		return new KalturaRequestBuilder("asset", "update", kparams);
	},
	
	/**
	 * Return list of assets - assets are personal recommendations for the caller..
	 * @param	profileId	int		WatchBasedRecommendations profile id (optional)
	 **/
	watchBasedRecommendationsList: function(profileId){
		var kparams = new Object();
		kparams.profileId = profileId;
		return new KalturaRequestBuilder("asset", "watchBasedRecommendationsList", kparams);
	}
}

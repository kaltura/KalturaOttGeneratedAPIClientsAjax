
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
	 * Add new bulk upload batch job Conversion profile id can be specified in the API..
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
	}
}

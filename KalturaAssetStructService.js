
/**
 *Class definition for the Kaltura service: assetStruct.
 **/
var KalturaAssetStructService = {
	/**
	 * Add a new assetStruct.
	 * @param	assetStruct	KalturaAssetStruct		AssetStruct Object (optional)
	 **/
	add: function(assetStruct){
		var kparams = new Object();
		kparams.assetStruct = assetStruct;
		return new KalturaRequestBuilder("assetstruct", "add", kparams);
	},
	
	/**
	 * Delete an existing assetStruct.
	 * @param	id	int		AssetStruct Identifier, id = 0 is identified as program AssetStruct (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("assetstruct", "delete", kparams);
	},
	
	/**
	 * Get AssetStruct by ID.
	 * @param	id	int		ID to get (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("assetstruct", "get", kparams);
	},
	
	/**
	 * Return a list of asset structs for the account with optional filter.
	 * @param	filter	KalturaBaseAssetStructFilter		Filter parameters for filtering out the result (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("assetstruct", "list", kparams);
	},
	
	/**
	 * Update an existing assetStruct.
	 * @param	id	int		AssetStruct Identifier, id = 0 is identified as program AssetStruct (optional)
	 * @param	assetStruct	KalturaAssetStruct		AssetStruct Object (optional)
	 **/
	update: function(id, assetStruct){
		var kparams = new Object();
		kparams.id = id;
		kparams.assetStruct = assetStruct;
		return new KalturaRequestBuilder("assetstruct", "update", kparams);
	}
}

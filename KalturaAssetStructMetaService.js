
/**
 *Class definition for the Kaltura service: assetStructMeta.
 **/
var KalturaAssetStructMetaService = {
	/**
	 * Return a list of asset struct metas for the account with optional filter.
	 * @param	filter	KalturaAssetStructMetaFilter		Filter parameters for filtering out the result (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("assetstructmeta", "list", kparams);
	},
	
	/**
	 * Update Asset struct meta.
	 * @param	assetStructId	int		AssetStruct Identifier (optional)
	 * @param	metaId	int		Meta Identifier (optional)
	 * @param	assetStructMeta	KalturaAssetStructMeta		AssetStructMeta Object (optional)
	 **/
	update: function(assetStructId, metaId, assetStructMeta){
		var kparams = new Object();
		kparams.assetStructId = assetStructId;
		kparams.metaId = metaId;
		kparams.assetStructMeta = assetStructMeta;
		return new KalturaRequestBuilder("assetstructmeta", "update", kparams);
	}
}

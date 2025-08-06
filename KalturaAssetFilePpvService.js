
/**
 *Class definition for the Kaltura service: assetFilePpv.
 **/
var KalturaAssetFilePpvService = {
	/**
	 * Add asset file ppv.
	 * @param	assetFilePpv	KalturaAssetFilePpv		asset file ppv (optional)
	 **/
	add: function(assetFilePpv){
		var kparams = new Object();
		kparams.assetFilePpv = assetFilePpv;
		return new KalturaRequestBuilder("assetfileppv", "add", kparams);
	},
	
	/**
	 * Delete asset file ppv.
	 * @param	assetFileId	int		Asset file id (optional)
	 * @param	ppvModuleId	int		Ppv module id (optional)
	 **/
	deleteAction: function(assetFileId, ppvModuleId){
		var kparams = new Object();
		kparams.assetFileId = assetFileId;
		kparams.ppvModuleId = ppvModuleId;
		return new KalturaRequestBuilder("assetfileppv", "delete", kparams);
	},
	
	/**
	 * Return a list of asset files ppvs for the account with optional filter.
	 * @param	filter	KalturaAssetFilePpvFilter		Filter parameters for filtering out the result (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("assetfileppv", "list", kparams);
	},
	
	/**
	 * Update assetFilePpv.
	 * @param	assetFileId	int		Asset file id (optional)
	 * @param	ppvModuleId	int		Ppv module id (optional)
	 * @param	assetFilePpv	KalturaAssetFilePpv		assetFilePpv (optional)
	 **/
	update: function(assetFileId, ppvModuleId, assetFilePpv){
		var kparams = new Object();
		kparams.assetFileId = assetFileId;
		kparams.ppvModuleId = ppvModuleId;
		kparams.assetFilePpv = assetFilePpv;
		return new KalturaRequestBuilder("assetfileppv", "update", kparams);
	}
}

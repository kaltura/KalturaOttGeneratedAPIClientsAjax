
/**
 *Class definition for the Kaltura service: assetFile.
 **/
var KalturaAssetFileService = {
	/**
	 * get KalturaAssetFileContext.
	 * @param	id	string		Asset file identifier (optional)
	 * @param	contextType	string		Kaltura Context Type (none = 0, recording = 1) (optional, enum: KalturaContextType)
	 **/
	getContext: function(id, contextType){
		var kparams = new Object();
		kparams.id = id;
		kparams.contextType = contextType;
		return new KalturaRequestBuilder("assetfile", "getContext", kparams);
	},
	
	/**
	 * Redirects to play manifest.
	 * @param	partnerId	int		Partner identifier (optional)
	 * @param	assetId	string		Asset identifier (optional)
	 * @param	assetType	string		Asset type (optional, enum: KalturaAssetType)
	 * @param	assetFileId	int		Asset file identifier (optional)
	 * @param	contextType	string		Playback context type (optional, enum: KalturaPlaybackContextType)
	 * @param	ks	string		Kaltura session for the user, not mandatory for anonymous user (optional, default: null)
	 **/
	playManifest: function(partnerId, assetId, assetType, assetFileId, contextType, ks){
		if(!ks)
			ks = null;
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.assetId = assetId;
		kparams.assetType = assetType;
		kparams.assetFileId = assetFileId;
		kparams.contextType = contextType;
		kparams.ks = ks;
		return new KalturaRequestBuilder("assetfile", "playManifest", kparams);
	}
}

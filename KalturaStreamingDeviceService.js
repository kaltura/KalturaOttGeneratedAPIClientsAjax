
/**
 *Class definition for the Kaltura service: streamingDevice.
 **/
var KalturaStreamingDeviceService = {
	/**
	 * Reserves a concurrency slot for the given asset-device combination.
	 * @param	fileId	string		KalturaMediaFile.id media file belonging to the asset for which a concurrency slot is being reserved (optional)
	 * @param	assetId	string		KalturaAsset.id - asset for which a concurrency slot is being reserved (optional)
	 * @param	assetType	string		Identifies the type of asset for which the concurrency slot is being reserved (optional, enum: KalturaAssetType)
	 * @param	externalRecordingProgramId	int		Optional EPG program ID used as fallback for concurrency checks when the external recording ID does not exist in the backend (e.g., recording not yet created). Only applicable for recording asset types when external recordings feature is enabled. (optional, default: null)
	 **/
	bookPlaybackSession: function(fileId, assetId, assetType, externalRecordingProgramId){
		if(!externalRecordingProgramId)
			externalRecordingProgramId = null;
		var kparams = new Object();
		kparams.fileId = fileId;
		kparams.assetId = assetId;
		kparams.assetType = assetType;
		kparams.externalRecordingProgramId = externalRecordingProgramId;
		return new KalturaRequestBuilder("streamingdevice", "bookPlaybackSession", kparams);
	},
	
	/**
	 * Lists of devices that are streaming at that moment.
	 * @param	filter	KalturaStreamingDeviceFilter		Segmentation type filter - basically empty (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("streamingdevice", "list", kparams);
	}
}

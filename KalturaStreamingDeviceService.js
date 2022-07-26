
/**
 *Class definition for the Kaltura service: streamingDevice.
 **/
var KalturaStreamingDeviceService = {
	/**
	 * Reserves a concurrency slot for the given asset-device combination.
	 * @param	fileId	string		KalturaMediaFile.id media file belonging to the asset for which a concurrency slot is being reserved (optional)
	 * @param	assetId	string		KalturaAsset.id - asset for which a concurrency slot is being reserved (optional)
	 * @param	assetType	string		Identifies the type of asset for which the concurrency slot is being reserved (optional, enum: KalturaAssetType)
	 **/
	bookPlaybackSession: function(fileId, assetId, assetType){
		var kparams = new Object();
		kparams.fileId = fileId;
		kparams.assetId = assetId;
		kparams.assetType = assetType;
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

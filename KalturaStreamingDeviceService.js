
/**
 *Class definition for the Kaltura service: streamingDevice.
 **/
var KalturaStreamingDeviceService = {
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


/**
 *Class definition for the Kaltura service: bulkUpload.
 **/
var KalturaBulkUploadService = {
	/**
	 * Get list of KalturaBulkUpload by filter.
	 * @param	filter	KalturaBulkUploadFilter		Filtering the bulk action request (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("bulkupload", "list", kparams);
	}
}

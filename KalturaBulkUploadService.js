
/**
 *Class definition for the Kaltura service: bulkUpload.
 **/
var KalturaBulkUploadService = {
	/**
	 * Get BulkUpload by ID.
	 * @param	id	int		ID to get (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("bulkupload", "get", kparams);
	},
	
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


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
		return new KalturaRequestBuilder("bulkupload", "list", kparams);
	}
}

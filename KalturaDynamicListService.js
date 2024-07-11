
/**
 *Class definition for the Kaltura service: dynamicList.
 **/
var KalturaDynamicListService = {
	/**
	 * Add new KalturaDynamicList.
	 * @param	objectToAdd	KalturaDynamicList		KalturaDynamicList Object to add (optional)
	 **/
	add: function(objectToAdd){
		var kparams = new Object();
		kparams.objectToAdd = objectToAdd;
		return new KalturaRequestBuilder("dynamiclist", "add", kparams);
	},
	
	/**
	 * Add new bulk upload batch job Conversion profile id can be specified in the API (note that the total request body size is limited to 10MB)..
	 * @param	fileData	HTMLElement		fileData (optional)
	 * @param	jobData	KalturaBulkUploadExcelJobData		jobData (optional)
	 * @param	bulkUploadData	KalturaBulkUploadDynamicListData		bulkUploadData (optional)
	 **/
	addFromBulkUpload: function(fileData, jobData, bulkUploadData){
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		kparams.jobData = jobData;
		kparams.bulkUploadData = bulkUploadData;
		return new KalturaRequestBuilder("dynamiclist", "addFromBulkUpload", kparams, kfiles);
	},
	
	/**
	 * Delete existing DynamicList.
	 * @param	id	int		DynamicList identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("dynamiclist", "delete", kparams);
	},
	
	/**
	 * Returns the list of available DynamicList.
	 * @param	filter	KalturaDynamicListFilter		Filter (optional)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("dynamiclist", "list", kparams);
	},
	
	/**
	 * Update existing KalturaDynamicList.
	 * @param	id	int		id of KalturaDynamicList to update (optional)
	 * @param	objectToUpdate	KalturaDynamicList		KalturaDynamicList Object to update (optional)
	 **/
	update: function(id, objectToUpdate){
		var kparams = new Object();
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new KalturaRequestBuilder("dynamiclist", "update", kparams);
	}
}

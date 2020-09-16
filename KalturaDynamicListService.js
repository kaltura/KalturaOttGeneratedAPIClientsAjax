
/**
 *Class definition for the Kaltura service: dynamicList.
 **/
var KalturaDynamicListService = {
	/**
	 * Add an object.
	 * @param	objectToAdd	KalturaDynamicList		Object to add (optional)
	 **/
	add: function(objectToAdd){
		var kparams = new Object();
		kparams.objectToAdd = objectToAdd;
		return new KalturaRequestBuilder("dynamiclist", "add", kparams);
	},
	
	/**
	 * Update an object.
	 * @param	id	int		Object ID to update (optional)
	 * @param	objectToUpdate	KalturaDynamicList		Object to update (optional)
	 **/
	update: function(id, objectToUpdate){
		var kparams = new Object();
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new KalturaRequestBuilder("dynamiclist", "update", kparams);
	},
	
	/**
	 * Delete an object.
	 * @param	id	int		Object ID to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("dynamiclist", "delete", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaDynamicListFilter		Request filter (optional)
	 * @param	pager	KalturaFilterPager		Request pager (optional, default: null)
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
	 * Add new bulk upload batch job Conversion profile id can be specified in the API..
	 * @param	fileData	HTMLElement		fileData (optional)
	 * @param	jobData	KalturaBulkUploadExcelJobData		jobData (optional)
	 * @param	bulkUploadAssetData	KalturaBulkUploadAssetData		bulkUploadAssetData (optional)
	 **/
	addFromBulkUpload: function(fileData, jobData, bulkUploadAssetData){
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		kparams.jobData = jobData;
		kparams.bulkUploadAssetData = bulkUploadAssetData;
		return new KalturaRequestBuilder("dynamiclist", "addFromBulkUpload", kparams, kfiles);
	}
}

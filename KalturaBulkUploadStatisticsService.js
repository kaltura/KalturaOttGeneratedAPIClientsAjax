
/**
 *Class definition for the Kaltura service: bulkUploadStatistics.
 **/
var KalturaBulkUploadStatisticsService = {
	/**
	 * Get BulkUploadStatistics count summary by status.
	 * @param	bulkObjectTypeEqual	string		bulkUploadObject for status summary (optional)
	 * @param	createDateGreaterThanOrEqual	int		date created filter (optional)
	 **/
	get: function(bulkObjectTypeEqual, createDateGreaterThanOrEqual){
		var kparams = new Object();
		kparams.bulkObjectTypeEqual = bulkObjectTypeEqual;
		kparams.createDateGreaterThanOrEqual = createDateGreaterThanOrEqual;
		return new KalturaRequestBuilder("bulkuploadstatistics", "get", kparams);
	}
}

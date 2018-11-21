
/**
 *Class definition for the Kaltura service: assetStatistics.
 **/
var KalturaAssetStatisticsService = {
	/**
	 * Returns statistics for given list of assets by type and / or time period.
	 * @param	query	KalturaAssetStatisticsQuery		Query for assets statistics (optional)
	 **/
	query: function(query){
		var kparams = new Object();
		kparams.query = query;
		return new KalturaRequestBuilder("assetstatistics", "query", kparams);
	}
}

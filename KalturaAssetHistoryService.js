
/**
 *Class definition for the Kaltura service: assetHistory.
 **/
var KalturaAssetHistoryService = {
	/**
	 * Clean the user’s viewing history.
	 * @param	filter	KalturaAssetHistoryFilter		List of assets identifier (optional, default: null)
	 **/
	clean: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("assethistory", "clean", kparams);
	},
	
	/**
	 * Get next episode by last watch asset in given seriesId.
	 * @param	seriesId	string		series Id to search for next episode (optional)
	 **/
	getNextEpisode: function(seriesId){
		var kparams = new Object();
		kparams.seriesId = seriesId;
		return new KalturaRequestBuilder("assethistory", "getNextEpisode", kparams);
	},
	
	/**
	 * Get recently watched media for user, ordered by recently watched first..
	 * @param	filter	KalturaAssetHistoryFilter		Filter parameters for filtering out the result (optional, default: null)
	 * @param	pager	KalturaFilterPager		Page size and index. Number of assets to return per page. Possible range 5 ≤ size ≥ 50. If omitted - will be set to 25. If a value > 50 provided – will set to 50 (optional, default: null)
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
		return new KalturaRequestBuilder("assethistory", "list", kparams);
	}
}

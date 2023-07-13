
/**
 *Class definition for the Kaltura service: searchHistory.
 **/
var KalturaSearchHistoryService = {
	/**
	 * Clean the user’s search history.
	 * @param	filter	KalturaSearchHistoryFilter		Filter of search history (optional, default: null)
	 **/
	clean: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("searchhistory", "clean", kparams);
	},
	
	/**
	 * Delete a specific search history.
 *	            Possible error code: 2032 - ItemNotFound.
	 * @param	id	string		ID of the search history reference as shown in the list action (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("searchhistory", "delete", kparams);
	},
	
	/**
	 * Get user&#39;s last search requests.
	 * @param	filter	KalturaSearchHistoryFilter		Filter parameters for filtering out the result (optional, default: null)
	 * @param	pager	KalturaFilterPager		Page size and index. Number of assets to return per page. Possible range 5 ≤ size ≥ 50. If omitted - will be set to 25. If a value > 50 provided – will set to 50> (optional, default: null)
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
		return new KalturaRequestBuilder("searchhistory", "list", kparams);
	}
}

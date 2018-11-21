
/**
 *Class definition for the Kaltura service: bulk.
 **/
var KalturaBulkService = {
	/**
	 * List bulk actions.
	 * @param	filter	KalturaBulkFilter		Filtering the bulk action request (optional, default: null)
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
		return new KalturaRequestBuilder("bulk", "list", kparams);
	},
	
	/**
	 * ServeLog action returns the log file for the bulk action.
	 * @param	id	int		bulk action id (optional)
	 **/
	serveLog: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("bulk", "serveLog", kparams);
	}
}

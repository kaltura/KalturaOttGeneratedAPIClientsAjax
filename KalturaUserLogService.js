
/**
 *Class definition for the Kaltura service: userLog.
 **/
var KalturaUserLogService = {
	/**
	 * Retrieves a list of user log entries matching the specified filter criteria..
	 * @param	filter	KalturaUserLogFilter		Filters user logs by user ID(s), message content, and creation date. (optional)
	 * @param	pager	KalturaFilterPager		Specify the requested page. (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("userlog", "list", kparams);
	}
}

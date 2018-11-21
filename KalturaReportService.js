
/**
 *Class definition for the Kaltura service: report.
 **/
var KalturaReportService = {
	/**
	 * Return a device configuration retrieval log request for a specific device..
	 * @param	udid	string		Device UDID (optional)
	 **/
	get: function(udid){
		var kparams = new Object();
		kparams.udid = udid;
		return new KalturaRequestBuilder("report", "get", kparams);
	},
	
	/**
	 * Return device configurations retrieval log. Supports paging and can be filtered with the parameter &quot;FromData&quot;..
	 * @param	filter	KalturaReportFilter		Filter option for from date (sec) (optional)
	 * @param	pager	KalturaFilterPager		Page size and index (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("report", "list", kparams);
	}
}

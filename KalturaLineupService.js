
/**
 *Class definition for the Kaltura service: lineup.
 **/
var KalturaLineupService = {
	/**
	 * Returns regional lineup (list of lineup channel asset objects) based on the requester session characteristics and his region.
 *	            NOTE: Calling lineup.get action using HTTP POST is supported only for tests (non production environment) and is rate limited or blocked.
 *	            For production, HTTP GET shall be used: GET https://{Host_IP}/{build version}/api_v3/service/lineup/action/get.
	 * @param	pageIndex	int		Page index - The page index to retrieve, (if it is not sent the default page size is 1). (optional)
	 * @param	pageSize	int		Page size - The page size to retrieve. Must be one of the follow numbers: 100, 200, 800, 1200, 1600 (if it is not sent the default page size is 500). (optional)
	 **/
	get: function(pageIndex, pageSize){
		var kparams = new Object();
		kparams.pageIndex = pageIndex;
		kparams.pageSize = pageSize;
		return new KalturaRequestBuilder("lineup", "get", kparams);
	},
	
	/**
	 * Returns list of lineup regional linear channels associated with one LCN and its region information. Allows to apply sorting and filtering by LCN and linear channels..
	 * @param	filter	KalturaLineupRegionalChannelFilter		Request filter (optional)
	 * @param	pager	KalturaFilterPager		Paging the request (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("lineup", "list", kparams);
	},
	
	/**
	 * Sends lineup update requested notification..
	 * @param	regionIds	string		Region IDs separated by commas. (optional)
	 **/
	sendUpdatedNotification: function(regionIds){
		var kparams = new Object();
		kparams.regionIds = regionIds;
		return new KalturaRequestBuilder("lineup", "sendUpdatedNotification", kparams);
	}
}

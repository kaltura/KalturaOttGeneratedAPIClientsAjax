
/**
 *Class definition for the Kaltura service: lineup.
 **/
var KalturaLineupService = {
	/**
	 * Return regional lineup (list of lineup channel asset objects) based on the requester session characteristics and his region..
	 * @param	pageIndex	int		Page index - The page index to retrieve, (if it is not sent the default page size is 1). (optional)
	 * @param	pageSize	int		Page size - The page size to retrieve. Must be one of the follow numbers: 100, 200, 800, 1200, 1600 (if it is not sent the default page size is 500). (optional)
	 **/
	get: function(pageIndex, pageSize){
		var kparams = new Object();
		kparams.pageIndex = pageIndex;
		kparams.pageSize = pageSize;
		return new KalturaRequestBuilder("lineup", "get", kparams);
	}
}

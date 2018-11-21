
/**
 *Class definition for the Kaltura service: personalFeed.
 **/
var KalturaPersonalFeedService = {
	/**
	 * List user&#39;s feeds.
 *	            Possible status codes:.
	 * @param	filter	KalturaPersonalFeedFilter		Required sort option to apply for the identified assets. If omitted – will use relevancy.
 *	            Possible values: relevancy, a_to_z, z_to_a, views, ratings, votes, newest. (optional)
	 * @param	pager	KalturaFilterPager		Page size and index (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("personalfeed", "list", kparams);
	}
}

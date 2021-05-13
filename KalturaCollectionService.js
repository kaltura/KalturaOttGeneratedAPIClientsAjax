
/**
 *Class definition for the Kaltura service: collection.
 **/
var KalturaCollectionService = {
	/**
	 * Returns a list of subscriptions requested by Subscription ID or file ID.
	 * @param	filter	KalturaCollectionFilter		Filter request (optional, default: null)
	 * @param	pager	KalturaFilterPager		Page size and index (optional, default: null)
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
		return new KalturaRequestBuilder("collection", "list", kparams);
	}
}

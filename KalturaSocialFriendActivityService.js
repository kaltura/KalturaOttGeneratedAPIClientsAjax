
/**
 *Class definition for the Kaltura service: socialFriendActivity.
 **/
var KalturaSocialFriendActivityService = {
	/**
	 * Get a list of the social friends activity for a user.
	 * @param	filter	KalturaSocialFriendActivityFilter		Social friend activity filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
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
		return new KalturaRequestBuilder("socialfriendactivity", "list", kparams);
	}
}

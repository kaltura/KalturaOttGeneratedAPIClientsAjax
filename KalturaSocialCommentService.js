
/**
 *Class definition for the Kaltura service: socialComment.
 **/
var KalturaSocialCommentService = {
	/**
	 * Get a list of all social comments filtered by asset ID and social platform.
	 * @param	filter	KalturaSocialCommentFilter		Country filter (optional)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("socialcomment", "list", kparams);
	}
}

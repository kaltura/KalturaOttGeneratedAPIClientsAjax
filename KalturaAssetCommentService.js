
/**
 *Class definition for the Kaltura service: assetComment.
 **/
var KalturaAssetCommentService = {
	/**
	 * Add asset comments by asset id.
	 * @param	comment	KalturaAssetComment		comment (optional)
	 **/
	add: function(comment){
		var kparams = new Object();
		kparams.comment = comment;
		return new KalturaRequestBuilder("assetcomment", "add", kparams);
	},
	
	/**
	 * Returns asset comments by asset id.
	 * @param	filter	KalturaAssetCommentFilter		Filtering the assets comments request (optional)
	 * @param	pager	KalturaFilterPager		Page size and index (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("assetcomment", "list", kparams);
	}
}

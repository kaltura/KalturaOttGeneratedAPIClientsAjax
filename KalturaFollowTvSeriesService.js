
/**
 *Class definition for the Kaltura service: followTvSeries.
 **/
var KalturaFollowTvSeriesService = {
	/**
	 * Add a user&#39;s tv series follow.
 *	            Possible status codes: UserAlreadyFollowing = 8013, NotFound = 500007, InvalidAssetId = 4024.
	 * @param	followTvSeries	KalturaFollowTvSeries		Follow series request parameters (optional)
	 **/
	add: function(followTvSeries){
		var kparams = new Object();
		kparams.followTvSeries = followTvSeries;
		return new KalturaRequestBuilder("followtvseries", "add", kparams);
	},
	
	/**
	 * Delete a user&#39;s tv series follow.
 *	            Possible status codes: UserNotFollowing = 8012, NotFound = 500007, InvalidAssetId = 4024, AnnouncementNotFound = 8006.
	 * @param	assetId	int		Asset identifier (optional)
	 **/
	deleteAction: function(assetId){
		var kparams = new Object();
		kparams.assetId = assetId;
		return new KalturaRequestBuilder("followtvseries", "delete", kparams);
	},
	
	/**
	 * List user&#39;s tv series follows.
 *	            Possible status codes:.
	 * @param	filter	KalturaFollowTvSeriesFilter		Follow TV series filter (optional)
	 * @param	pager	KalturaFilterPager		pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("followtvseries", "list", kparams);
	}
}


/**
 *Class definition for the Kaltura service: userSegment.
 **/
var KalturaUserSegmentService = {
	/**
	 * Adds a segment to a user.
	 * @param	userSegment	KalturaUserSegment		User segment (optional)
	 **/
	add: function(userSegment){
		var kparams = new Object();
		kparams.userSegment = userSegment;
		return new KalturaRequestBuilder("usersegment", "add", kparams);
	},
	
	/**
	 * Deletes a segment from a user.
	 * @param	userId	string		User id (optional)
	 * @param	segmentId	int		Segment id (optional)
	 **/
	deleteAction: function(userId, segmentId){
		var kparams = new Object();
		kparams.userId = userId;
		kparams.segmentId = segmentId;
		return new KalturaRequestBuilder("usersegment", "delete", kparams);
	},
	
	/**
	 * Retrieve all the segments that apply for this user.
	 * @param	filter	KalturaUserSegmentFilter		Filter (optional)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("usersegment", "list", kparams);
	}
}

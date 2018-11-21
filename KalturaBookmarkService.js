
/**
 *Class definition for the Kaltura service: bookmark.
 **/
var KalturaBookmarkService = {
	/**
	 * Report player position and action for the user on the watched asset. Player position is used to later allow resume watching..
	 * @param	bookmark	KalturaBookmark		Bookmark details (optional)
	 **/
	add: function(bookmark){
		var kparams = new Object();
		kparams.bookmark = bookmark;
		return new KalturaRequestBuilder("bookmark", "add", kparams);
	},
	
	/**
	 * Returns player position record/s for the requested asset and the requesting user. 
 *	            If default user makes the request – player position records are provided for all of the users in the household.
 *	            If non-default user makes the request - player position records are provided for the requesting user and the default user of the household..
	 * @param	filter	KalturaBookmarkFilter		Filter option for the last position (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("bookmark", "list", kparams);
	}
}

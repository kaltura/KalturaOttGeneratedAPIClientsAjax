
/**
 *Class definition for the Kaltura service: favorite.
 **/
var KalturaFavoriteService = {
	/**
	 * Add media to user&#39;s favorite list.
	 * @param	favorite	KalturaFavorite		Favorite details. (optional)
	 **/
	add: function(favorite){
		var kparams = new Object();
		kparams.favorite = favorite;
		return new KalturaRequestBuilder("favorite", "add", kparams);
	},
	
	/**
	 * Remove media from user&#39;s favorite list.
	 * @param	id	int		Media identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("favorite", "delete", kparams);
	},
	
	/**
	 * Retrieving users&#39; favorites.
	 * @param	filter	KalturaFavoriteFilter		Request filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("favorite", "list", kparams);
	}
}

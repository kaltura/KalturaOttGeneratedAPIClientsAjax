
/**
 *Class definition for the Kaltura service: categoryTree.
 **/
var KalturaCategoryTreeService = {
	/**
	 * Duplicate category Item.
	 * @param	categoryItemId	int		Category item identifier (optional)
	 **/
	duplicate: function(categoryItemId){
		var kparams = new Object();
		kparams.categoryItemId = categoryItemId;
		return new KalturaRequestBuilder("categorytree", "duplicate", kparams);
	},
	
	/**
	 * Retrive category tree..
	 * @param	categoryItemId	int		Category item identifier (optional)
	 **/
	get: function(categoryItemId){
		var kparams = new Object();
		kparams.categoryItemId = categoryItemId;
		return new KalturaRequestBuilder("categorytree", "get", kparams);
	}
}

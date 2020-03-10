
/**
 *Class definition for the Kaltura service: categoryTree.
 **/
var KalturaCategoryTreeService = {
	/**
	 * Duplicate category Item.
	 * @param	categoryItemId	int		Category item identifier (optional)
	 * @param	name	string		Root category name (optional)
	 **/
	duplicate: function(categoryItemId, name){
		var kparams = new Object();
		kparams.categoryItemId = categoryItemId;
		kparams.name = name;
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

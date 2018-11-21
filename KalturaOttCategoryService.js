
/**
 *Class definition for the Kaltura service: ottCategory.
 **/
var KalturaOttCategoryService = {
	/**
	 * Retrieve the list of categories (hierarchical) and their associated channels.
	 * @param	id	int		Category Identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("ottcategory", "get", kparams);
	}
}

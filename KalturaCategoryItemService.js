
/**
 *Class definition for the Kaltura service: categoryItem.
 **/
var KalturaCategoryItemService = {
	/**
	 * categoryItem add.
	 * @param	objectToAdd	KalturaCategoryItem		categoryItem details (optional)
	 **/
	add: function(objectToAdd){
		var kparams = new Object();
		kparams.objectToAdd = objectToAdd;
		return new KalturaRequestBuilder("categoryitem", "add", kparams);
	},
	
	/**
	 * categoryItem update.
	 * @param	id	int		Category identifier (optional)
	 * @param	objectToUpdate	KalturaCategoryItem		categoryItem details (optional)
	 **/
	update: function(id, objectToUpdate){
		var kparams = new Object();
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new KalturaRequestBuilder("categoryitem", "update", kparams);
	},
	
	/**
	 * Remove category.
	 * @param	id	int		Category identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("categoryitem", "delete", kparams);
	},
	
	/**
	 * Gets all categoryItem items.
	 * @param	filter	KalturaCategoryItemFilter		Request filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Request pager (optional)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		kparams.pager = pager;
		return new KalturaRequestBuilder("categoryitem", "list", kparams);
	}
}

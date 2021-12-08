
/**
 *Class definition for the Kaltura service: collection.
 **/
var KalturaCollectionService = {
	/**
	 * Insert new collection for partner.
	 * @param	collection	KalturaCollection		collection object (optional)
	 **/
	add: function(collection){
		var kparams = new Object();
		kparams.collection = collection;
		return new KalturaRequestBuilder("collection", "add", kparams);
	},
	
	/**
	 * Delete collection.
	 * @param	id	int		Collection id (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("collection", "delete", kparams);
	},
	
	/**
	 * Returns a list of collections requested by Collection IDs or file identifier or coupon group identifier.
	 * @param	filter	KalturaCollectionFilter		Filter request (optional, default: null)
	 * @param	pager	KalturaFilterPager		Page size and index (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("collection", "list", kparams);
	},
	
	/**
	 * Update Collection.
	 * @param	id	int		Collection id (optional)
	 * @param	collection	KalturaCollection		Collection (optional)
	 **/
	update: function(id, collection){
		var kparams = new Object();
		kparams.id = id;
		kparams.collection = collection;
		return new KalturaRequestBuilder("collection", "update", kparams);
	}
}

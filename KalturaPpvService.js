
/**
 *Class definition for the Kaltura service: ppv.
 **/
var KalturaPpvService = {
	/**
	 * Add new ppv.
	 * @param	ppv	KalturaPpv		ppv objec (optional)
	 **/
	add: function(ppv){
		var kparams = new Object();
		kparams.ppv = ppv;
		return new KalturaRequestBuilder("ppv", "add", kparams);
	},
	
	/**
	 * Delete Ppv.
	 * @param	id	int		Ppv id (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("ppv", "delete", kparams);
	},
	
	/**
	 * Returns ppv object by internal identifier.
	 * @param	id	int		ppv identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("ppv", "get", kparams);
	},
	
	/**
	 * Returns all ppv objects.
	 * @param	filter	KalturaPpvFilter		Filter parameters for filtering out the result (optional, default: null)
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
		return new KalturaRequestBuilder("ppv", "list", kparams);
	},
	
	/**
	 * Update ppv.
	 * @param	id	int		ppv id (optional)
	 * @param	ppv	KalturaPpv		ppv Object (optional)
	 **/
	update: function(id, ppv){
		var kparams = new Object();
		kparams.id = id;
		kparams.ppv = ppv;
		return new KalturaRequestBuilder("ppv", "update", kparams);
	}
}

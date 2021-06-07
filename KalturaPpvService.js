
/**
 *Class definition for the Kaltura service: ppv.
 **/
var KalturaPpvService = {
	/**
	 * Internal API !!! Insert new ppv for partner.
	 * @param	ppv	KalturaPpv		ppv object (optional)
	 **/
	add: function(ppv){
		var kparams = new Object();
		kparams.ppv = ppv;
		return new KalturaRequestBuilder("ppv", "add", kparams);
	},
	
	/**
	 * Internal API !!! Delete ppv.
	 * @param	id	int		PPV id (optional)
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
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("ppv", "list", kparams);
	}
}

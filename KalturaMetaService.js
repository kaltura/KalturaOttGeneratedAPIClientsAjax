
/**
 *Class definition for the Kaltura service: meta.
 **/
var KalturaMetaService = {
	/**
	 * Add a new meta.
	 * @param	meta	KalturaMeta		Meta Object (optional)
	 **/
	add: function(meta){
		var kparams = new Object();
		kparams.meta = meta;
		return new KalturaRequestBuilder("meta", "add", kparams);
	},
	
	/**
	 * Delete an existing meta.
	 * @param	id	int		Meta Identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("meta", "delete", kparams);
	},
	
	/**
	 * Return a list of metas for the account with optional filter.
	 * @param	filter	KalturaMetaFilter		Meta filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("meta", "list", kparams);
	},
	
	/**
	 * Update an existing meta.
	 * @param	id	int		Meta identifier (optional)
	 * @param	meta	KalturaMeta		Meta (optional)
	 **/
	update: function(id, meta){
		var kparams = new Object();
		kparams.id = id;
		kparams.meta = meta;
		return new KalturaRequestBuilder("meta", "update", kparams);
	}
}

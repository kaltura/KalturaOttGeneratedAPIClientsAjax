
/**
 *Class definition for the Kaltura service: meta.
 **/
var KalturaMetaService = {
	/**
	 * Get the list of meta mappings for the partner.
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
	 * Update meta&#39;s user interest.
	 * @param	id	string		Meta identifier (optional)
	 * @param	meta	KalturaMeta		Meta (optional)
	 **/
	update: function(id, meta){
		var kparams = new Object();
		kparams.id = id;
		kparams.meta = meta;
		return new KalturaRequestBuilder("meta", "update", kparams);
	}
}

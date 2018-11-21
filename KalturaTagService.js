
/**
 *Class definition for the Kaltura service: tag.
 **/
var KalturaTagService = {
	/**
	 * Add a new tag.
	 * @param	tag	KalturaTag		Tag Object (optional)
	 **/
	add: function(tag){
		var kparams = new Object();
		kparams.tag = tag;
		return new KalturaRequestBuilder("tag", "add", kparams);
	},
	
	/**
	 * Delete an existing tag.
	 * @param	id	int		Tag Identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("tag", "delete", kparams);
	},
	
	/**
	 * Get the list of tags for the partner.
	 * @param	filter	KalturaTagFilter		Filter (optional, default: null)
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
		return new KalturaRequestBuilder("tag", "list", kparams);
	},
	
	/**
	 * Update an existing tag.
	 * @param	id	int		Tag Identifier (optional)
	 * @param	tag	KalturaTag		Tag Object (optional)
	 **/
	update: function(id, tag){
		var kparams = new Object();
		kparams.id = id;
		kparams.tag = tag;
		return new KalturaRequestBuilder("tag", "update", kparams);
	}
}

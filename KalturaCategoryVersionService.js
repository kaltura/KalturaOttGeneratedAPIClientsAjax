
/**
 *Class definition for the Kaltura service: categoryVersion.
 **/
var KalturaCategoryVersionService = {
	/**
	 * categoryVersion add.
	 * @param	objectToAdd	KalturaCategoryVersion		categoryVersion details (optional)
	 **/
	add: function(objectToAdd){
		var kparams = new Object();
		kparams.objectToAdd = objectToAdd;
		return new KalturaRequestBuilder("categoryversion", "add", kparams);
	},
	
	/**
	 * Acreate new tree for this categoryItem.
	 * @param	categoryItemId	int		the categoryItemId to create the tree accordingly (optional)
	 * @param	name	string		Name of version (optional)
	 * @param	comment	string		Comment of version (optional)
	 **/
	createTree: function(categoryItemId, name, comment){
		var kparams = new Object();
		kparams.categoryItemId = categoryItemId;
		kparams.name = name;
		kparams.comment = comment;
		return new KalturaRequestBuilder("categoryversion", "createTree", kparams);
	},
	
	/**
	 * Remove category version.
	 * @param	id	int		Category version identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("categoryversion", "delete", kparams);
	},
	
	/**
	 * Gets all category versions.
	 * @param	filter	KalturaCategoryVersionFilter		Filter (optional)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("categoryversion", "list", kparams);
	},
	
	/**
	 * Set new default category version.
	 * @param	id	int		category version id to set as default (optional)
	 * @param	force	bool		force to set even if version is older then currenct version (optional, default: false)
	 **/
	setDefault: function(id, force){
		if(!force)
			force = false;
		var kparams = new Object();
		kparams.id = id;
		kparams.force = force;
		return new KalturaRequestBuilder("categoryversion", "setDefault", kparams);
	},
	
	/**
	 * categoryVersion update.
	 * @param	id	int		Category version identifier (optional)
	 * @param	objectToUpdate	KalturaCategoryVersion		categoryVersion details (optional)
	 **/
	update: function(id, objectToUpdate){
		var kparams = new Object();
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new KalturaRequestBuilder("categoryversion", "update", kparams);
	}
}

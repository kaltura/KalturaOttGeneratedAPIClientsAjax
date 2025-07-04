
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
	 * @param	filter	bool		filter categories dates (optional, default: false)
	 **/
	get: function(categoryItemId, filter){
		if(!filter)
			filter = false;
		var kparams = new Object();
		kparams.categoryItemId = categoryItemId;
		kparams.filter = filter;
		return new KalturaRequestBuilder("categorytree", "get", kparams);
	},
	
	/**
	 * Retrieve default category tree of deviceFamilyId by KS or specific one if versionId is set..
	 * @param	versionId	int		Category version id of tree (optional, default: null)
	 * @param	deviceFamilyId	int		deviceFamilyId related to category tree (optional, default: null)
	 * @param	filter	bool		filter=true excludes items for which the start date has not been reached yet; default is false (optional, default: false)
	 **/
	getByVersion: function(versionId, deviceFamilyId, filter){
		if(!versionId)
			versionId = null;
		if(!deviceFamilyId)
			deviceFamilyId = null;
		if(!filter)
			filter = false;
		var kparams = new Object();
		kparams.versionId = versionId;
		kparams.deviceFamilyId = deviceFamilyId;
		kparams.filter = filter;
		return new KalturaRequestBuilder("categorytree", "getByVersion", kparams);
	}
}

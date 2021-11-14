
/**
 *Class definition for the Kaltura service: searchPriorityGroup.
 **/
var KalturaSearchPriorityGroupService = {
	/**
	 * Add a new priority group..
	 * @param	searchPriorityGroup	KalturaSearchPriorityGroup		Search priority group. (optional)
	 **/
	add: function(searchPriorityGroup){
		var kparams = new Object();
		kparams.searchPriorityGroup = searchPriorityGroup;
		return new KalturaRequestBuilder("searchprioritygroup", "add", kparams);
	},
	
	/**
	 * Delete the existing priority group by its identifier..
	 * @param	id	int		The identifier of a search priority group. (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("searchprioritygroup", "delete", kparams);
	},
	
	/**
	 * Gets list of search priority groups which meet the filter criteria..
	 * @param	filter	KalturaSearchPriorityGroupFilter		Filter. (optional)
	 * @param	pager	KalturaFilterPager		Page size and index. (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("searchprioritygroup", "list", kparams);
	},
	
	/**
	 * Update an existing priority group..
	 * @param	id	int		Identifier of search priority group. (optional)
	 * @param	searchPriorityGroup	KalturaSearchPriorityGroup		Search priority group. (optional)
	 **/
	update: function(id, searchPriorityGroup){
		var kparams = new Object();
		kparams.id = id;
		kparams.searchPriorityGroup = searchPriorityGroup;
		return new KalturaRequestBuilder("searchprioritygroup", "update", kparams);
	}
}

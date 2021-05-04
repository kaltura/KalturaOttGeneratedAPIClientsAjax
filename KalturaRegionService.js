
/**
 *Class definition for the Kaltura service: region.
 **/
var KalturaRegionService = {
	/**
	 * Adds a new region for partner.
	 * @param	region	KalturaRegion		Region to add (optional)
	 **/
	add: function(region){
		var kparams = new Object();
		kparams.region = region;
		return new KalturaRequestBuilder("region", "add", kparams);
	},
	
	/**
	 * Adds a linear channel to the list of regions..
	 * @param	linearChannelId	int		The identifier of the linear channel (optional)
	 * @param	regionChannelNumbers	array		List of regions and number of linear channel in it. (optional)
	 **/
	linearchannelbulkadd: function(linearChannelId, regionChannelNumbers){
		var kparams = new Object();
		kparams.linearChannelId = linearChannelId;
		kparams.regionChannelNumbers = regionChannelNumbers;
		return new KalturaRequestBuilder("region", "linearchannelbulkadd", kparams);
	},
	
	/**
	 * Deletes a linear channel from the list of regions..
	 * @param	linearChannelId	int		The identifier of the linear channel (optional)
	 * @param	regionIds	string		List of identifiers of regions. (optional)
	 **/
	linearchannelbulkdelete: function(linearChannelId, regionIds){
		var kparams = new Object();
		kparams.linearChannelId = linearChannelId;
		kparams.regionIds = regionIds;
		return new KalturaRequestBuilder("region", "linearchannelbulkdelete", kparams);
	},
	
	/**
	 * Delete an existing region.
	 * @param	id	int		Region ID to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("region", "delete", kparams);
	},
	
	/**
	 * Returns all regions for the partner.
	 * @param	filter	KalturaBaseRegionFilter		Regions filter (optional)
	 * @param	pager	KalturaFilterPager		Paging the request (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("region", "list", kparams);
	},
	
	/**
	 * Update an existing region.
	 * @param	id	int		Region ID to update (optional)
	 * @param	region	KalturaRegion		Region to update (optional)
	 **/
	update: function(id, region){
		var kparams = new Object();
		kparams.id = id;
		kparams.region = region;
		return new KalturaRequestBuilder("region", "update", kparams);
	}
}

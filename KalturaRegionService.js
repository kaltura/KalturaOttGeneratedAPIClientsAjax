
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
	 * @param	filter	KalturaRegionFilter		Regions filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
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

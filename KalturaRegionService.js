
/**
 *Class definition for the Kaltura service: region.
 **/
var KalturaRegionService = {
	/**
	 * Returns all regions for the partner.
	 * @param	filter	KalturaRegionFilter		Regions filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("region", "list", kparams);
	}
}

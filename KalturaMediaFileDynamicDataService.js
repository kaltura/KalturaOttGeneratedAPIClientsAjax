
/**
 *Class definition for the Kaltura service: mediaFileDynamicData.
 **/
var KalturaMediaFileDynamicDataService = {
	/**
	 * Add a dynamicData value to the values list of a specific key name in a specific mediaFileTypeId.
	 * @param	dynamicData	KalturaMediaFileDynamicData		DynamicData value (optional)
	 **/
	add: function(dynamicData){
		var kparams = new Object();
		kparams.dynamicData = dynamicData;
		return new KalturaRequestBuilder("mediafiledynamicdata", "add", kparams);
	},
	
	/**
	 * Delete an existing DynamicData value.
	 * @param	id	int		DynamicData identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("mediafiledynamicdata", "delete", kparams);
	},
	
	/**
	 * List and filter existing mediaFile dynamicData values.
	 * @param	filter	KalturaMediaFileDynamicDataFilter		Filter (optional)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("mediafiledynamicdata", "list", kparams);
	}
}

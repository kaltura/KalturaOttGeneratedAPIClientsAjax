
/**
 *Class definition for the Kaltura service: segmentationType.
 **/
var KalturaSegmentationTypeService = {
	/**
	 * Adds a new segmentation type to the system.
	 * @param	segmentationType	KalturaSegmentationType		The segmentation type to be added (optional)
	 **/
	add: function(segmentationType){
		var kparams = new Object();
		kparams.segmentationType = segmentationType;
		return new KalturaRequestBuilder("segmentationtype", "add", kparams);
	},
	
	/**
	 * Delete a segmentation type from the system.
	 * @param	id	int		Segmentation type id (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("segmentationtype", "delete", kparams);
	},
	
	/**
	 * Gets existing partner segmentation configuration.
	 **/
	getPartnerConfiguration: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("segmentationtype", "getPartnerConfiguration", kparams);
	},
	
	/**
	 * Lists all segmentation types in group.
	 * @param	filter	KalturaBaseSegmentationTypeFilter		Segmentation type filter - basically empty (optional, default: null)
	 * @param	pager	KalturaFilterPager		Simple pager (optional, default: null)
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
		return new KalturaRequestBuilder("segmentationtype", "list", kparams);
	},
	
	/**
	 * Updates an existing segmentation type.
	 * @param	segmentationTypeId	int		The ID of the object that will be updated (optional)
	 * @param	segmentationType	KalturaSegmentationType		The segmentation type to be updated (optional)
	 **/
	update: function(segmentationTypeId, segmentationType){
		var kparams = new Object();
		kparams.segmentationTypeId = segmentationTypeId;
		kparams.segmentationType = segmentationType;
		return new KalturaRequestBuilder("segmentationtype", "update", kparams);
	},
	
	/**
	 * Sets partner configuration for segments configuration.
	 * @param	configuration	KalturaSegmentationPartnerConfiguration		1. maxDynamicSegments - how many dynamic segments (segments with conditions) the operator is allowed to have.
 *	            Displayed in the OPC as *'Maximum Number of Dynamic Segments' 
 *	            *maxCalculatedPeriod - 
 *	            the maximum number of past days to be calculated for dynamic segments. e.g. the last 60 days, the last 90 days etc.
 *	            Displayed in OPC as *'Maximum of Dynamic Segments period'* (optional)
	 **/
	updatePartnerConfiguration: function(configuration){
		var kparams = new Object();
		kparams.configuration = configuration;
		return new KalturaRequestBuilder("segmentationtype", "updatePartnerConfiguration", kparams);
	}
}

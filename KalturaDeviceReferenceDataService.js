
/**
 *Class definition for the Kaltura service: deviceReferenceData.
 **/
var KalturaDeviceReferenceDataService = {
	/**
	 * add DeviceReferenceData.
	 * @param	objectToAdd	KalturaDeviceReferenceData		DeviceReferenceData details (optional)
	 **/
	add: function(objectToAdd){
		var kparams = new Object();
		kparams.objectToAdd = objectToAdd;
		return new KalturaRequestBuilder("devicereferencedata", "add", kparams);
	},
	
	/**
	 * Delete existing DeviceReferenceData.
	 * @param	id	int		DeviceReferenceData identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("devicereferencedata", "delete", kparams);
	},
	
	/**
	 * Returns the list of available DeviceReferenceData.
	 * @param	filter	KalturaDeviceReferenceDataFilter		Filter (optional)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("devicereferencedata", "list", kparams);
	},
	
	/**
	 * Update existing DeviceReferenceData.
	 * @param	id	int		id of DeviceReferenceData to update (optional)
	 * @param	objectToUpdate	KalturaDeviceReferenceData		DeviceReferenceData Object to update (optional)
	 **/
	update: function(id, objectToUpdate){
		var kparams = new Object();
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new KalturaRequestBuilder("devicereferencedata", "update", kparams);
	}
}

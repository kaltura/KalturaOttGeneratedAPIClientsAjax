
/**
 *Class definition for the Kaltura service: deviceReferenceData.
 **/
var KalturaDeviceReferenceDataService = {
	/**
	 * Add an object.
	 * @param	objectToAdd	KalturaDeviceReferenceData		Object to add (optional)
	 **/
	add: function(objectToAdd){
		var kparams = new Object();
		kparams.objectToAdd = objectToAdd;
		return new KalturaRequestBuilder("devicereferencedata", "add", kparams);
	},
	
	/**
	 * Update an object.
	 * @param	id	int		Object ID to update (optional)
	 * @param	objectToUpdate	KalturaDeviceReferenceData		Object to update (optional)
	 **/
	update: function(id, objectToUpdate){
		var kparams = new Object();
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new KalturaRequestBuilder("devicereferencedata", "update", kparams);
	},
	
	/**
	 * Delete an object.
	 * @param	id	int		Object ID to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("devicereferencedata", "delete", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaDeviceReferenceDataFilter		Request filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("devicereferencedata", "list", kparams);
	}
}

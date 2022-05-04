
/**
 *Class definition for the Kaltura service: iotProfile.
 **/
var KalturaIotProfileService = {
	/**
	 * Add an object.
	 * @param	objectToAdd	KalturaIotProfile		Object to add (optional)
	 **/
	add: function(objectToAdd){
		var kparams = new Object();
		kparams.objectToAdd = objectToAdd;
		return new KalturaRequestBuilder("iotprofile", "add", kparams);
	},
	
	/**
	 * Update an object.
	 * @param	id	int		Object ID to update (optional)
	 * @param	objectToUpdate	KalturaIotProfile		Object to update (optional)
	 **/
	update: function(id, objectToUpdate){
		var kparams = new Object();
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new KalturaRequestBuilder("iotprofile", "update", kparams);
	},
	
	/**
	 * Get an object.
	 * @param	id	int		Object ID to get (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("iotprofile", "get", kparams);
	}
}

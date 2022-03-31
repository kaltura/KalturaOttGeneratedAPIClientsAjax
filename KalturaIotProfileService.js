
/**
 *Class definition for the Kaltura service: iotProfile.
 **/
var KalturaIotProfileService = {
	/**
	 * Add new KalturaIotProfile.
	 * @param	objectToAdd	KalturaIotProfile		KalturaIotProfile Object to add (optional)
	 **/
	add: function(objectToAdd){
		var kparams = new Object();
		kparams.objectToAdd = objectToAdd;
		return new KalturaRequestBuilder("iotprofile", "add", kparams);
	},
	
	/**
	 * Get existing KalturaIotProfile.
	 * @param	id	int		KalturaIotProfile identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("iotprofile", "delete", kparams);
	},
	
	/**
	 * Update existing KalturaIotProfile.
	 * @param	id	int		id of KalturaIotProfile to update (optional)
	 * @param	objectToUpdate	KalturaIotProfile		KalturaIotProfile Object to update (optional)
	 **/
	update: function(id, objectToUpdate){
		var kparams = new Object();
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new KalturaRequestBuilder("iotprofile", "update", kparams);
	}
}

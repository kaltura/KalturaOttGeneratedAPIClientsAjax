
/**
 *Class definition for the Kaltura service: smsAdapterProfile.
 **/
var KalturaSmsAdapterProfileService = {
	/**
	 * Add an object.
	 * @param	objectToAdd	KalturaSmsAdapterProfile		Object to add (optional)
	 **/
	add: function(objectToAdd){
		var kparams = new Object();
		kparams.objectToAdd = objectToAdd;
		return new KalturaRequestBuilder("smsadapterprofile", "add", kparams);
	},
	
	/**
	 * Update an object.
	 * @param	id	int		Object ID to update (optional)
	 * @param	objectToUpdate	KalturaSmsAdapterProfile		Object to update (optional)
	 **/
	update: function(id, objectToUpdate){
		var kparams = new Object();
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new KalturaRequestBuilder("smsadapterprofile", "update", kparams);
	},
	
	/**
	 * Get an object.
	 * @param	id	int		Object ID to get (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("smsadapterprofile", "get", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaSmsAdapterProfileFilter		Request filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("smsadapterprofile", "list", kparams);
	},
	
	/**
	 * Delete an object.
	 * @param	id	int		Object ID to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("smsadapterprofile", "delete", kparams);
	},
	
	/**
	 * Generate Sms Adapter shared secret.
	 * @param	smsAdapterId	int		Sms Adapter identifier (optional)
	 **/
	generateSharedSecret: function(smsAdapterId){
		var kparams = new Object();
		kparams.smsAdapterId = smsAdapterId;
		return new KalturaRequestBuilder("smsadapterprofile", "generateSharedSecret", kparams);
	}
}

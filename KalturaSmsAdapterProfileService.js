
/**
 *Class definition for the Kaltura service: smsAdapterProfile.
 **/
var KalturaSmsAdapterProfileService = {
	/**
	 * SmsAdapterProfile add.
	 * @param	objectToAdd	KalturaSmsAdapterProfile		SmsAdapterProfile details (optional)
	 **/
	add: function(objectToAdd){
		var kparams = new Object();
		kparams.objectToAdd = objectToAdd;
		return new KalturaRequestBuilder("smsadapterprofile", "add", kparams);
	},
	
	/**
	 * Remove SmsAdapterProfile.
	 * @param	id	int		SmsAdapterProfile identifier (optional)
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
	},
	
	/**
	 * Get SmsAdapterProfile.
	 * @param	id	int		SmsAdapterProfile identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("smsadapterprofile", "get", kparams);
	},
	
	/**
	 * Gets all SmsAdapterProfile items.
	 * @param	filter	KalturaSmsAdapterProfileFilter		Filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("smsadapterprofile", "list", kparams);
	},
	
	/**
	 * SmsAdapterProfile update.
	 * @param	id	int		SmsAdapterProfile identifier (optional)
	 * @param	objectToUpdate	KalturaSmsAdapterProfile		SmsAdapterProfile details (optional)
	 **/
	update: function(id, objectToUpdate){
		var kparams = new Object();
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new KalturaRequestBuilder("smsadapterprofile", "update", kparams);
	}
}

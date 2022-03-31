
/**
 *Class definition for the Kaltura service: eventNotification.
 **/
var KalturaEventNotificationService = {
	/**
	 * Gets all EventNotification items for a given Object id and type.
	 * @param	filter	KalturaEventNotificationFilter		Filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("eventnotification", "list", kparams);
	},
	
	/**
	 * eventNotification update.
	 * @param	id	string		id of eventNotification (optional)
	 * @param	objectToUpdate	KalturaEventNotification		eventNotification details (optional)
	 **/
	update: function(id, objectToUpdate){
		var kparams = new Object();
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new KalturaRequestBuilder("eventnotification", "update", kparams);
	}
}

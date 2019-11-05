
/**
 *Class definition for the Kaltura service: eventNotificationAction.
 **/
var KalturaEventNotificationActionService = {
	/**
	 * Dispatches event notification.
	 * @param	scope	KalturaEventNotificationScope		Scope (optional)
	 **/
	dispatch: function(scope){
		var kparams = new Object();
		kparams.scope = scope;
		return new KalturaRequestBuilder("eventnotificationaction", "dispatch", kparams);
	}
}

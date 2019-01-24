
/**
 *Class definition for the Kaltura service: notification.
 **/
var KalturaNotificationService = {
	/**
	 * TBD.
	 * @param	identifier	string		In case type is "announcement", identifier should be the announcement ID. In case type is "system", identifier should be "login" (the login topic) (optional)
	 * @param	type	string		"announcement" - TV-Series topic, "system" - login topic (optional, enum: KalturaNotificationType)
	 **/
	register: function(identifier, type){
		var kparams = new Object();
		kparams.identifier = identifier;
		kparams.type = type;
		return new KalturaRequestBuilder("notification", "register", kparams);
	},
	
	/**
	 * Sends push notification to user devices.
	 * @param	userId	int		User identifications (optional)
	 * @param	pushMessage	KalturaPushMessage		Message push data (optional)
	 **/
	sendPush: function(userId, pushMessage){
		var kparams = new Object();
		kparams.userId = userId;
		kparams.pushMessage = pushMessage;
		return new KalturaRequestBuilder("notification", "sendPush", kparams);
	},
	
	/**
	 * Registers the device push token to the push service.
	 * @param	pushToken	string		The device-application pair authentication for push delivery (optional)
	 **/
	setDevicePushToken: function(pushToken){
		var kparams = new Object();
		kparams.pushToken = pushToken;
		return new KalturaRequestBuilder("notification", "setDevicePushToken", kparams);
	}
}

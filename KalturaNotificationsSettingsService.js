
/**
 *Class definition for the Kaltura service: notificationsSettings.
 **/
var KalturaNotificationsSettingsService = {
	/**
	 * Retrieve the user’s notification settings..
	 **/
	get: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("notificationssettings", "get", kparams);
	},
	
	/**
	 * Update the user’s notification settings..
	 * @param	settings	KalturaNotificationsSettings		Notifications settings (optional)
	 **/
	update: function(settings){
		var kparams = new Object();
		kparams.settings = settings;
		return new KalturaRequestBuilder("notificationssettings", "update", kparams);
	},
	
	/**
	 * Update the user’s notification settings..
	 * @param	settings	KalturaNotificationsSettings		Notifications settings (optional)
	 * @param	token	string		User's token identifier (optional)
	 * @param	partnerId	int		Partner identifier (optional)
	 **/
	updateWithToken: function(settings, token, partnerId){
		var kparams = new Object();
		kparams.settings = settings;
		kparams.token = token;
		kparams.partnerId = partnerId;
		return new KalturaRequestBuilder("notificationssettings", "updateWithToken", kparams);
	}
}

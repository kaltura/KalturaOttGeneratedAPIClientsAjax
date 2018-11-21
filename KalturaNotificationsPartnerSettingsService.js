
/**
 *Class definition for the Kaltura service: notificationsPartnerSettings.
 **/
var KalturaNotificationsPartnerSettingsService = {
	/**
	 * Retrieve the partner notification settings..
	 **/
	get: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("notificationspartnersettings", "get", kparams);
	},
	
	/**
	 * Update the account notification settings.
	 * @param	settings	KalturaNotificationsPartnerSettings		Account notification settings model (optional)
	 **/
	update: function(settings){
		var kparams = new Object();
		kparams.settings = settings;
		return new KalturaRequestBuilder("notificationspartnersettings", "update", kparams);
	}
}

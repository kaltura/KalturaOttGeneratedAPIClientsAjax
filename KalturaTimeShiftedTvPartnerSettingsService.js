
/**
 *Class definition for the Kaltura service: timeShiftedTvPartnerSettings.
 **/
var KalturaTimeShiftedTvPartnerSettingsService = {
	/**
	 * Retrieve the account’s time-shifted TV settings (catch-up and C-DVR, Trick-play, Start-over).
	 **/
	get: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("timeshiftedtvpartnersettings", "get", kparams);
	},
	
	/**
	 * Configure the account’s time-shifted TV settings (catch-up and C-DVR, Trick-play, Start-over).
	 * @param	settings	KalturaTimeShiftedTvPartnerSettings		Time shifted TV settings (optional)
	 **/
	update: function(settings){
		var kparams = new Object();
		kparams.settings = settings;
		return new KalturaRequestBuilder("timeshiftedtvpartnersettings", "update", kparams);
	}
}

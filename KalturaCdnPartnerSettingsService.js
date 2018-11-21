
/**
 *Class definition for the Kaltura service: cdnPartnerSettings.
 **/
var KalturaCdnPartnerSettingsService = {
	/**
	 * Retrieve the partner’s CDN settings (default adapters).
	 **/
	get: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("cdnpartnersettings", "get", kparams);
	},
	
	/**
	 * Configure the partner’s CDN settings (default adapters).
	 * @param	settings	KalturaCDNPartnerSettings		CDN partner settings (optional)
	 **/
	update: function(settings){
		var kparams = new Object();
		kparams.settings = settings;
		return new KalturaRequestBuilder("cdnpartnersettings", "update", kparams);
	}
}

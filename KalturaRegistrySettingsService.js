
/**
 *Class definition for the Kaltura service: registrySettings.
 **/
var KalturaRegistrySettingsService = {
	/**
	 * Retrieve the registry settings..
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("registrysettings", "list", kparams);
	}
}

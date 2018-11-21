
/**
 *Class definition for the Kaltura service: purchaseSettings.
 **/
var KalturaPurchaseSettingsService = {
	/**
	 * Retrieve the purchase settings.
 *	            Includes specification of where these settings were defined – account, household or user.
	 * @param	by	string		Reference type to filter by (optional, enum: KalturaEntityReferenceBy)
	 **/
	get: function(by){
		var kparams = new Object();
		kparams.by = by;
		return new KalturaRequestBuilder("purchasesettings", "get", kparams);
	},
	
	/**
	 * Set a purchase PIN for the household or user.
	 * @param	entityReference	string		Reference type to filter by (optional, enum: KalturaEntityReferenceBy)
	 * @param	settings	KalturaPurchaseSettings		New settings to apply (optional)
	 **/
	update: function(entityReference, settings){
		var kparams = new Object();
		kparams.entityReference = entityReference;
		kparams.settings = settings;
		return new KalturaRequestBuilder("purchasesettings", "update", kparams);
	}
}

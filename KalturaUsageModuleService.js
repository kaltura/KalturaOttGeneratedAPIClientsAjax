
/**
 *Class definition for the Kaltura service: usageModule.
 **/
var KalturaUsageModuleService = {
	/**
	 * Internal API !!! Insert new UsageModule.
	 * @param	usageModule	KalturaUsageModule		usage module Object (optional)
	 **/
	add: function(usageModule){
		var kparams = new Object();
		kparams.usageModule = usageModule;
		return new KalturaRequestBuilder("usagemodule", "add", kparams);
	},
	
	/**
	 * Internal API !!! Delete UsageModule.
	 * @param	id	int		UsageModule id (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("usagemodule", "delete", kparams);
	},
	
	/**
	 * Internal API !!! Returns the list of available usage module.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("usagemodule", "list", kparams);
	}
}

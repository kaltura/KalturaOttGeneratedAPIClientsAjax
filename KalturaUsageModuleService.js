
/**
 *Class definition for the Kaltura service: usageModule.
 **/
var KalturaUsageModuleService = {
	/**
	 * Insert new UsageModule.
	 * @param	usageModule	KalturaUsageModule		usage module Object (optional)
	 **/
	add: function(usageModule){
		var kparams = new Object();
		kparams.usageModule = usageModule;
		return new KalturaRequestBuilder("usagemodule", "add", kparams);
	},
	
	/**
	 * Delete UsageModule.
	 * @param	id	int		UsageModule id (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("usagemodule", "delete", kparams);
	},
	
	/**
	 * Returns the list of available usage module.
	 * @param	filter	KalturaUsageModuleFilter		Filter request (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("usagemodule", "list", kparams);
	},
	
	/**
	 * Update usage module.
	 * @param	id	int		usage module id (optional)
	 * @param	usageModule	KalturaUsageModule		usage module Object (optional)
	 **/
	update: function(id, usageModule){
		var kparams = new Object();
		kparams.id = id;
		kparams.usageModule = usageModule;
		return new KalturaRequestBuilder("usagemodule", "update", kparams);
	}
}

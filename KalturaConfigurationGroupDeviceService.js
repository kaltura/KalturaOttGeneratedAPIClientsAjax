
/**
 *Class definition for the Kaltura service: configurationGroupDevice.
 **/
var KalturaConfigurationGroupDeviceService = {
	/**
	 * Associate a collection of devices to a configuration group. If a device is already associated to another group – old association is replaced.
	 * @param	configurationGroupDevice	KalturaConfigurationGroupDevice		Configuration group device (optional)
	 **/
	add: function(configurationGroupDevice){
		var kparams = new Object();
		kparams.configurationGroupDevice = configurationGroupDevice;
		return new KalturaRequestBuilder("configurationgroupdevice", "add", kparams);
	},
	
	/**
	 * Remove a device association.
	 * @param	udid	string		Device UDID (optional)
	 **/
	deleteAction: function(udid){
		var kparams = new Object();
		kparams.udid = udid;
		return new KalturaRequestBuilder("configurationgroupdevice", "delete", kparams);
	},
	
	/**
	 * Return the configuration group to which a specific device is associated to.
	 * @param	udid	string		Device UDID (optional)
	 **/
	get: function(udid){
		var kparams = new Object();
		kparams.udid = udid;
		return new KalturaRequestBuilder("configurationgroupdevice", "get", kparams);
	},
	
	/**
	 * Return the list of associated devices for a given configuration group.
	 * @param	filter	KalturaConfigurationGroupDeviceFilter		Filter option for configuration group identifier (optional)
	 * @param	pager	KalturaFilterPager		Page size and index (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("configurationgroupdevice", "list", kparams);
	}
}

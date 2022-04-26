
/**
 *Class definition for the Kaltura service: deviceFamily.
 **/
var KalturaDeviceFamilyService = {
	/**
	 * Adds a new device family which belongs to a specific group..
	 * @param	deviceFamily	KalturaDeviceFamily		Device family. (optional)
	 **/
	add: function(deviceFamily){
		var kparams = new Object();
		kparams.deviceFamily = deviceFamily;
		return new KalturaRequestBuilder("devicefamily", "add", kparams);
	},
	
	/**
	 * Return a list of the available device families..
	 * @param	filter	KalturaDeviceFamilyFilter		Filter with no more than one condition specified. (optional, default: null)
	 * @param	pager	KalturaFilterPager		Page size and index. (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("devicefamily", "list", kparams);
	},
	
	/**
	 * Updates an existing device family which belongs to a specific group..
	 * @param	id	int		Device family's identifier. (optional)
	 * @param	deviceFamily	KalturaDeviceFamily		Device family. (optional)
	 **/
	update: function(id, deviceFamily){
		var kparams = new Object();
		kparams.id = id;
		kparams.deviceFamily = deviceFamily;
		return new KalturaRequestBuilder("devicefamily", "update", kparams);
	}
}


/**
 *Class definition for the Kaltura service: deviceBrand.
 **/
var KalturaDeviceBrandService = {
	/**
	 * Adds a new device brand which belongs to a specific group..
	 * @param	deviceBrand	KalturaDeviceBrand		Device brand. (optional)
	 **/
	add: function(deviceBrand){
		var kparams = new Object();
		kparams.deviceBrand = deviceBrand;
		return new KalturaRequestBuilder("devicebrand", "add", kparams);
	},
	
	/**
	 * Return a list of the available device brands..
	 * @param	filter	KalturaDeviceBrandFilter		Filter with no more than one condition specified. (optional, default: null)
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
		return new KalturaRequestBuilder("devicebrand", "list", kparams);
	},
	
	/**
	 * Updates an existing device brand which belongs to a specific group..
	 * @param	id	int		Device brand's identifier. (optional)
	 * @param	deviceBrand	KalturaDeviceBrand		Device brand. (optional)
	 **/
	update: function(id, deviceBrand){
		var kparams = new Object();
		kparams.id = id;
		kparams.deviceBrand = deviceBrand;
		return new KalturaRequestBuilder("devicebrand", "update", kparams);
	}
}

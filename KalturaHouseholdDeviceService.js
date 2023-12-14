
/**
 *Class definition for the Kaltura service: householdDevice.
 **/
var KalturaHouseholdDeviceService = {
	/**
	 * Add device to household.
	 * @param	device	KalturaHouseholdDevice		Device (optional)
	 **/
	add: function(device){
		var kparams = new Object();
		kparams.device = device;
		return new KalturaRequestBuilder("householddevice", "add", kparams);
	},
	
	/**
	 * Registers a device to a household using pin code.
	 * @param	deviceName	string		Device name (optional)
	 * @param	pin	string		Pin code (optional)
	 **/
	addByPin: function(deviceName, pin){
		var kparams = new Object();
		kparams.deviceName = deviceName;
		kparams.pin = pin;
		return new KalturaRequestBuilder("householddevice", "addByPin", kparams);
	},
	
	/**
	 * Removes a device from household.
	 * @param	udid	string		device UDID (optional)
	 **/
	deleteAction: function(udid){
		var kparams = new Object();
		kparams.udid = udid;
		return new KalturaRequestBuilder("householddevice", "delete", kparams);
	},
	
	/**
	 * Deletes dynamic data item with key  for device with identifier ..
	 * @param	udid	string		Unique identifier of device. (optional)
	 * @param	key	string		Key of dynamic data item. (optional)
	 **/
	deleteDynamicData: function(udid, key){
		var kparams = new Object();
		kparams.udid = udid;
		kparams.key = key;
		return new KalturaRequestBuilder("householddevice", "deleteDynamicData", kparams);
	},
	
	/**
	 * Generates device pin to use when adding a device to household by pin.
	 * @param	udid	string		Device UDID (optional)
	 * @param	brandId	int		Device brand identifier (optional)
	 **/
	generatePin: function(udid, brandId){
		var kparams = new Object();
		kparams.udid = udid;
		kparams.brandId = brandId;
		return new KalturaRequestBuilder("householddevice", "generatePin", kparams);
	},
	
	/**
	 * Returns device registration status to the supplied household.
	 * @param	udid	string		device id (optional, default: null)
	 **/
	get: function(udid){
		if(!udid)
			udid = null;
		var kparams = new Object();
		kparams.udid = udid;
		return new KalturaRequestBuilder("householddevice", "get", kparams);
	},
	
	/**
	 * Returns the devices within the household.
	 * @param	filter	KalturaHouseholdDeviceFilter		Household devices filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("householddevice", "list", kparams);
	},
	
	/**
	 * User sign-in via a time-expired sign-in PIN..
	 * @param	partnerId	int		Partner Identifier (optional)
	 * @param	pin	string		pin code (optional)
	 * @param	udid	string		Device UDID (optional, default: null)
	 * @param	extraParams	map		extra params (optional, default: null)
	 **/
	loginWithPin: function(partnerId, pin, udid, extraParams){
		if(!udid)
			udid = null;
		if(!extraParams)
			extraParams = null;
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.pin = pin;
		kparams.udid = udid;
		if (extraParams != null)
			kparams.extraParams = extraParams;
		return new KalturaRequestBuilder("householddevice", "loginWithPin", kparams);
	},
	
	/**
	 * Retry delete household device entities by retention..
	 * @param	request	KalturaRetryDeleteRequest		Request data (optional)
	 **/
	retryDelete: function(request){
		var kparams = new Object();
		kparams.request = request;
		return new KalturaRequestBuilder("householddevice", "retryDelete", kparams);
	},
	
	/**
	 * Update the name of the device by UDID.
	 * @param	udid	string		Device UDID (optional)
	 * @param	device	KalturaHouseholdDevice		Device object (optional)
	 **/
	update: function(udid, device){
		var kparams = new Object();
		kparams.udid = udid;
		kparams.device = device;
		return new KalturaRequestBuilder("householddevice", "update", kparams);
	},
	
	/**
	 * Update the name of the device by UDID.
	 * @param	udid	string		Device UDID (optional)
	 * @param	status	string		Device status (optional, enum: KalturaDeviceStatus)
	 **/
	updateStatus: function(udid, status){
		var kparams = new Object();
		kparams.udid = udid;
		kparams.status = status;
		return new KalturaRequestBuilder("householddevice", "updateStatus", kparams);
	},
	
	/**
	 * Adds or updates dynamic data item for device with identifier udid. If it is needed to update several items, use a multi-request to avoid race conditions..
	 * @param	udid	string		Unique identifier of device. (optional)
	 * @param	key	string		Key of dynamic data item. Max length of key is 125 characters. (optional)
	 * @param	value	KalturaStringValue		Value of dynamic data item. Max length of value is 255 characters. (optional)
	 **/
	upsertDynamicData: function(udid, key, value){
		var kparams = new Object();
		kparams.udid = udid;
		kparams.key = key;
		kparams.value = value;
		return new KalturaRequestBuilder("householddevice", "upsertDynamicData", kparams);
	}
}

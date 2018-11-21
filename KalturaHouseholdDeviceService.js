
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
	 **/
	get: function(){
		var kparams = new Object();
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
	 **/
	loginWithPin: function(partnerId, pin, udid){
		if(!udid)
			udid = null;
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.pin = pin;
		kparams.udid = udid;
		return new KalturaRequestBuilder("householddevice", "loginWithPin", kparams);
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
	}
}

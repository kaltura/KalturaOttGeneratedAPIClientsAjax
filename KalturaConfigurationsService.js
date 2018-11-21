
/**
 *Class definition for the Kaltura service: configurations.
 **/
var KalturaConfigurationsService = {
	/**
	 * Add a new device configuration to a configuration group.
	 * @param	configurations	KalturaConfigurations		Device configuration (optional)
	 **/
	add: function(configurations){
		var kparams = new Object();
		kparams.configurations = configurations;
		return new KalturaRequestBuilder("configurations", "add", kparams);
	},
	
	/**
	 * Delete a device configuration.
	 * @param	id	string		Configuration identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("configurations", "delete", kparams);
	},
	
	/**
	 * Return the device configuration.
	 * @param	id	string		Configuration identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("configurations", "get", kparams);
	},
	
	/**
	 * Return a list of device configurations of a configuration group.
	 * @param	filter	KalturaConfigurationsFilter		Filter option for configuration group id. (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("configurations", "list", kparams);
	},
	
	/**
	 * Update device configuration.
	 * @param	id	string		Configuration identifier (optional)
	 * @param	configurations	KalturaConfigurations		configuration to update (optional)
	 **/
	update: function(id, configurations){
		var kparams = new Object();
		kparams.id = id;
		kparams.configurations = configurations;
		return new KalturaRequestBuilder("configurations", "update", kparams);
	}
}

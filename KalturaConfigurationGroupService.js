
/**
 *Class definition for the Kaltura service: configurationGroup.
 **/
var KalturaConfigurationGroupService = {
	/**
	 * Add a new configuration group.
	 * @param	configurationGroup	KalturaConfigurationGroup		Configuration group (optional)
	 **/
	add: function(configurationGroup){
		var kparams = new Object();
		kparams.configurationGroup = configurationGroup;
		return new KalturaRequestBuilder("configurationgroup", "add", kparams);
	},
	
	/**
	 * Remove a configuration group, including its tags, device configurations and devices associations.
	 * @param	id	string		Configuration group identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("configurationgroup", "delete", kparams);
	},
	
	/**
	 * Return the configuration group details, including group identifiers, tags, and number of associated devices, and list of device configuration.
	 * @param	id	string		Configuration group identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("configurationgroup", "get", kparams);
	},
	
	/**
	 * Return the list of configuration groups.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("configurationgroup", "list", kparams);
	},
	
	/**
	 * Update configuration group name.
	 * @param	id	string		Configuration group identifier (optional)
	 * @param	configurationGroup	KalturaConfigurationGroup		Configuration group (optional)
	 **/
	update: function(id, configurationGroup){
		var kparams = new Object();
		kparams.id = id;
		kparams.configurationGroup = configurationGroup;
		return new KalturaRequestBuilder("configurationgroup", "update", kparams);
	}
}


/**
 *Class definition for the Kaltura service: configurationGroupTag.
 **/
var KalturaConfigurationGroupTagService = {
	/**
	 * Add a new tag to a configuration group. If this tag is already associated to another group, request fails.
	 * @param	configurationGroupTag	KalturaConfigurationGroupTag		Configuration group tag (optional)
	 **/
	add: function(configurationGroupTag){
		var kparams = new Object();
		kparams.configurationGroupTag = configurationGroupTag;
		return new KalturaRequestBuilder("configurationgrouptag", "add", kparams);
	},
	
	/**
	 * Remove a tag association from configuration group.
	 * @param	tag	string		Tag (optional)
	 **/
	deleteAction: function(tag){
		var kparams = new Object();
		kparams.tag = tag;
		return new KalturaRequestBuilder("configurationgrouptag", "delete", kparams);
	},
	
	/**
	 * Return the configuration group the tag is associated to.
	 * @param	tag	string		Tag (optional)
	 **/
	get: function(tag){
		var kparams = new Object();
		kparams.tag = tag;
		return new KalturaRequestBuilder("configurationgrouptag", "get", kparams);
	},
	
	/**
	 * Return list of tags for a configuration group.
	 * @param	filter	KalturaConfigurationGroupTagFilter		Filter option for configuration group identifier (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("configurationgrouptag", "list", kparams);
	}
}

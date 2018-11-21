
/**
 *Class definition for the Kaltura service: permission.
 **/
var KalturaPermissionService = {
	/**
	 * Returns permission names as comma separated string.
	 **/
	getCurrentPermissions: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("permission", "getCurrentPermissions", kparams);
	},
	
	/**
	 * Retrieving permissions by identifiers, if filter is empty, returns all partner permissions.
	 * @param	filter	KalturaPermissionFilter		Filter for permissions (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("permission", "list", kparams);
	}
}

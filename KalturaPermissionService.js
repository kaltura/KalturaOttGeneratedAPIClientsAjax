
/**
 *Class definition for the Kaltura service: permission.
 **/
var KalturaPermissionService = {
	/**
	 * Adds new permission.
	 * @param	permission	KalturaPermission		Permission to insert (optional)
	 **/
	add: function(permission){
		var kparams = new Object();
		kparams.permission = permission;
		return new KalturaRequestBuilder("permission", "add", kparams);
	},
	
	/**
	 * Adds permission item to permission.
	 * @param	permissionId	int		Permission ID to add to (optional)
	 * @param	permissionItemId	int		Permission item ID to add (optional)
	 **/
	addPermissionItem: function(permissionId, permissionItemId){
		var kparams = new Object();
		kparams.permissionId = permissionId;
		kparams.permissionItemId = permissionItemId;
		return new KalturaRequestBuilder("permission", "addPermissionItem", kparams);
	},
	
	/**
	 * Deletes an existing permission.
	 * @param	id	int		Permission ID to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("permission", "delete", kparams);
	},
	
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
	},
	
	/**
	 * Removes permission item from permission.
	 * @param	permissionId	int		Permission ID to remove from (optional)
	 * @param	permissionItemId	int		Permission item ID to remove (optional)
	 **/
	removePermissionItem: function(permissionId, permissionItemId){
		var kparams = new Object();
		kparams.permissionId = permissionId;
		kparams.permissionItemId = permissionItemId;
		return new KalturaRequestBuilder("permission", "removePermissionItem", kparams);
	}
}

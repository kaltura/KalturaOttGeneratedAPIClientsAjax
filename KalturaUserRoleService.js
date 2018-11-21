
/**
 *Class definition for the Kaltura service: userRole.
 **/
var KalturaUserRoleService = {
	/**
	 * Creates a new role.
	 * @param	role	KalturaUserRole		Role to add (optional)
	 **/
	add: function(role){
		var kparams = new Object();
		kparams.role = role;
		return new KalturaRequestBuilder("userrole", "add", kparams);
	},
	
	/**
	 * Delete role.
	 * @param	id	int		Role id to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("userrole", "delete", kparams);
	},
	
	/**
	 * Retrieving user roles by identifiers, if filter is empty, returns all partner roles.
	 * @param	filter	KalturaUserRoleFilter		User roles filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("userrole", "list", kparams);
	},
	
	/**
	 * Update role.
	 * @param	id	int		Role Id (optional)
	 * @param	role	KalturaUserRole		Role to Update (optional)
	 **/
	update: function(id, role){
		var kparams = new Object();
		kparams.id = id;
		kparams.role = role;
		return new KalturaRequestBuilder("userrole", "update", kparams);
	}
}


/**
 *Class definition for the Kaltura service: passwordPolicy.
 **/
var KalturaPasswordPolicyService = {
	/**
	 * Add an object.
	 * @param	objectToAdd	KalturaPasswordPolicy		Object to add (optional)
	 **/
	add: function(objectToAdd){
		var kparams = new Object();
		kparams.objectToAdd = objectToAdd;
		return new KalturaRequestBuilder("passwordpolicy", "add", kparams);
	},
	
	/**
	 * Update an object.
	 * @param	id	int		Object ID to update (optional)
	 * @param	objectToUpdate	KalturaPasswordPolicy		Object to update (optional)
	 **/
	update: function(id, objectToUpdate){
		var kparams = new Object();
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new KalturaRequestBuilder("passwordpolicy", "update", kparams);
	},
	
	/**
	 * Delete an object.
	 * @param	id	int		Object ID to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("passwordpolicy", "delete", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaPasswordPolicyFilter		Request filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("passwordpolicy", "list", kparams);
	}
}

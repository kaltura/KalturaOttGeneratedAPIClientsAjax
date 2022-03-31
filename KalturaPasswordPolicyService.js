
/**
 *Class definition for the Kaltura service: passwordPolicy.
 **/
var KalturaPasswordPolicyService = {
	/**
	 * Add new KalturaPasswordPolicy.
	 * @param	objectToAdd	KalturaPasswordPolicy		KalturaPasswordPolicy Object to add (optional)
	 **/
	add: function(objectToAdd){
		var kparams = new Object();
		kparams.objectToAdd = objectToAdd;
		return new KalturaRequestBuilder("passwordpolicy", "add", kparams);
	},
	
	/**
	 * Delete existing PasswordPolicy.
	 * @param	id	int		PasswordPolicy identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("passwordpolicy", "delete", kparams);
	},
	
	/**
	 * Returns the list of available KalturaPasswordPolicy.
	 * @param	filter	KalturaPasswordPolicyFilter		Filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("passwordpolicy", "list", kparams);
	},
	
	/**
	 * Update existing KalturaPasswordPolicy.
	 * @param	id	int		id of KalturaPasswordPolicy to update (optional)
	 * @param	objectToUpdate	KalturaPasswordPolicy		KalturaPasswordPolicy Object to update (optional)
	 **/
	update: function(id, objectToUpdate){
		var kparams = new Object();
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new KalturaRequestBuilder("passwordpolicy", "update", kparams);
	}
}

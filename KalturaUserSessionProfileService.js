
/**
 *Class definition for the Kaltura service: userSessionProfile.
 **/
var KalturaUserSessionProfileService = {
	/**
	 * Add new UserSessionProfile.
	 * @param	userSessionProfile	KalturaUserSessionProfile		userSessionProfile Object to add (optional)
	 **/
	add: function(userSessionProfile){
		var kparams = new Object();
		kparams.userSessionProfile = userSessionProfile;
		return new KalturaRequestBuilder("usersessionprofile", "add", kparams);
	},
	
	/**
	 * Delete existing UserSessionProfile.
	 * @param	id	int		UserSessionProfile identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("usersessionprofile", "delete", kparams);
	},
	
	/**
	 * Returns the list of available UserSessionProfiles.
	 * @param	filter	KalturaUserSessionProfileFilter		Filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("usersessionprofile", "list", kparams);
	},
	
	/**
	 * Update existing UserSessionProfile.
	 * @param	id	int		id of userSessionProfile to update (optional)
	 * @param	userSessionProfile	KalturaUserSessionProfile		userSessionProfile Object to update (optional)
	 **/
	update: function(id, userSessionProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.userSessionProfile = userSessionProfile;
		return new KalturaRequestBuilder("usersessionprofile", "update", kparams);
	}
}

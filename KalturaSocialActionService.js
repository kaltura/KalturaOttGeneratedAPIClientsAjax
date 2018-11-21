
/**
 *Class definition for the Kaltura service: socialAction.
 **/
var KalturaSocialActionService = {
	/**
	 * Insert new user social action.
	 * @param	socialAction	KalturaSocialAction		social Action Object (optional)
	 **/
	add: function(socialAction){
		var kparams = new Object();
		kparams.socialAction = socialAction;
		return new KalturaRequestBuilder("socialaction", "add", kparams);
	},
	
	/**
	 * delete user social action.
	 * @param	id	string		social Action Id (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("socialaction", "delete", kparams);
	},
	
	/**
	 * Get list of user social actions.
	 * @param	filter	KalturaSocialActionFilter		social action filter (optional)
	 * @param	pager	KalturaFilterPager		pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("socialaction", "list", kparams);
	}
}

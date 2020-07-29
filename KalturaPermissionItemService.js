
/**
 *Class definition for the Kaltura service: permissionItem.
 **/
var KalturaPermissionItemService = {
	/**
	 * Return a list of permission items with filtering options.
	 * @param	filter	KalturaPermissionItemFilter		Filter (optional, default: null)
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
		return new KalturaRequestBuilder("permissionitem", "list", kparams);
	}
}

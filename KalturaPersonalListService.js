
/**
 *Class definition for the Kaltura service: personalList.
 **/
var KalturaPersonalListService = {
	/**
	 * Add a user&#39;s personal list item to follow..
	 * @param	personalList	KalturaPersonalList		Follow personal list item request parameters (optional)
	 **/
	add: function(personalList){
		var kparams = new Object();
		kparams.personalList = personalList;
		return new KalturaRequestBuilder("personallist", "add", kparams);
	},
	
	/**
	 * Remove followed item from user&#39;s personal list.
	 * @param	personalListId	int		personalListId identifier (optional)
	 **/
	deleteAction: function(personalListId){
		var kparams = new Object();
		kparams.personalListId = personalListId;
		return new KalturaRequestBuilder("personallist", "delete", kparams);
	},
	
	/**
	 * List user&#39;s tv personal item to follow.
 *	            Possible status codes:.
	 * @param	filter	KalturaPersonalListFilter		Personal list filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		pager (optional, default: null)
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
		return new KalturaRequestBuilder("personallist", "list", kparams);
	}
}

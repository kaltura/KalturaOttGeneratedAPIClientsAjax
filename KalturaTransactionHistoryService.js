
/**
 *Class definition for the Kaltura service: transactionHistory.
 **/
var KalturaTransactionHistoryService = {
	/**
	 * Gets user or household transaction history..
	 * @param	filter	KalturaTransactionHistoryFilter		Filter by household or user (optional, default: null)
	 * @param	pager	KalturaFilterPager		Page size and index (optional, default: null)
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
		return new KalturaRequestBuilder("transactionhistory", "list", kparams);
	}
}

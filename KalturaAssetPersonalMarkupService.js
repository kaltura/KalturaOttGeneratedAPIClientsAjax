
/**
 *Class definition for the Kaltura service: assetPersonalMarkup.
 **/
var KalturaAssetPersonalMarkupService = {
	/**
	 * Response with list of assetPersonalMarkup..
	 * @param	filter	KalturaAssetPersonalMarkupSearchFilter		Filter pager (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("assetpersonalmarkup", "list", kparams);
	}
}

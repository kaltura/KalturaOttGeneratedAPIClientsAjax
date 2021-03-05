
/**
 *Class definition for the Kaltura service: epg.
 **/
var KalturaEpgService = {
	/**
	 * Returns EPG assets..
	 * @param	filter	KalturaEpgFilter		Filters by EPG live asset identifier and date in unix timestamp, e.g. 1610928000(January 18, 2021 0:00:00), 1611014400(January 19, 2021 0:00:00) (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("epg", "list", kparams);
	}
}


/**
 *Class definition for the Kaltura service: language.
 **/
var KalturaLanguageService = {
	/**
	 * Get the list of languages for the partner with option to filter by language codes.
	 * @param	filter	KalturaLanguageFilter		language filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("language", "list", kparams);
	}
}


/**
 *Class definition for the Kaltura service: country.
 **/
var KalturaCountryService = {
	/**
	 * Get the list of countries for the partner with option to filter by countries identifiers.
	 * @param	filter	KalturaCountryFilter		Country filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("country", "list", kparams);
	}
}

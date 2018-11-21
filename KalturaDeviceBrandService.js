
/**
 *Class definition for the Kaltura service: deviceBrand.
 **/
var KalturaDeviceBrandService = {
	/**
	 * Return a list of the available device brands..
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("devicebrand", "list", kparams);
	}
}


/**
 *Class definition for the Kaltura service: cdnAdapterProfile.
 **/
var KalturaCdnAdapterProfileService = {
	/**
	 * Insert new CDN adapter for partner.
	 * @param	adapter	KalturaCDNAdapterProfile		CDN adapter object (optional)
	 **/
	add: function(adapter){
		var kparams = new Object();
		kparams.adapter = adapter;
		return new KalturaRequestBuilder("cdnadapterprofile", "add", kparams);
	},
	
	/**
	 * Delete CDN adapter by CDN adapter id.
	 * @param	adapterId	int		CDN adapter identifier (optional)
	 **/
	deleteAction: function(adapterId){
		var kparams = new Object();
		kparams.adapterId = adapterId;
		return new KalturaRequestBuilder("cdnadapterprofile", "delete", kparams);
	},
	
	/**
	 * Generate CDN adapter shared secret.
	 * @param	adapterId	int		CDN adapter identifier (optional)
	 **/
	generateSharedSecret: function(adapterId){
		var kparams = new Object();
		kparams.adapterId = adapterId;
		return new KalturaRequestBuilder("cdnadapterprofile", "generateSharedSecret", kparams);
	},
	
	/**
	 * Returns all CDN adapters for partner.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("cdnadapterprofile", "list", kparams);
	},
	
	/**
	 * Update CDN adapter details.
	 * @param	adapterId	int		CDN adapter id to update (optional)
	 * @param	adapter	KalturaCDNAdapterProfile		CDN adapter Object (optional)
	 **/
	update: function(adapterId, adapter){
		var kparams = new Object();
		kparams.adapterId = adapterId;
		kparams.adapter = adapter;
		return new KalturaRequestBuilder("cdnadapterprofile", "update", kparams);
	}
}

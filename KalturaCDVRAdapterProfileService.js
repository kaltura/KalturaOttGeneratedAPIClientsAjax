
/**
 *Class definition for the Kaltura service: cDVRAdapterProfile.
 **/
var KalturaCDVRAdapterProfileService = {
	/**
	 * Insert new C-DVR adapter for partner.
	 * @param	adapter	KalturaCDVRAdapterProfile		C-DVR adapter object (optional)
	 **/
	add: function(adapter){
		var kparams = new Object();
		kparams.adapter = adapter;
		return new KalturaRequestBuilder("cdvradapterprofile", "add", kparams);
	},
	
	/**
	 * Delete C-DVR adapter by C-DVR adapter id.
	 * @param	adapterId	int		C-DVR adapter identifier (optional)
	 **/
	deleteAction: function(adapterId){
		var kparams = new Object();
		kparams.adapterId = adapterId;
		return new KalturaRequestBuilder("cdvradapterprofile", "delete", kparams);
	},
	
	/**
	 * Generate C-DVR adapter shared secret.
	 * @param	adapterId	int		C-DVR adapter identifier (optional)
	 **/
	generateSharedSecret: function(adapterId){
		var kparams = new Object();
		kparams.adapterId = adapterId;
		return new KalturaRequestBuilder("cdvradapterprofile", "generateSharedSecret", kparams);
	},
	
	/**
	 * Returns all C-DVR adapters for partner.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("cdvradapterprofile", "list", kparams);
	},
	
	/**
	 * Update C-DVR adapter details.
	 * @param	adapterId	int		C-DVR adapter identifier (optional)
	 * @param	adapter	KalturaCDVRAdapterProfile		C-DVR adapter Object (optional)
	 **/
	update: function(adapterId, adapter){
		var kparams = new Object();
		kparams.adapterId = adapterId;
		kparams.adapter = adapter;
		return new KalturaRequestBuilder("cdvradapterprofile", "update", kparams);
	}
}

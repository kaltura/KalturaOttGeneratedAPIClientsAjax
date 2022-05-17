
/**
 *Class definition for the Kaltura service: liveToVod.
 **/
var KalturaLiveToVodService = {
	/**
	 * Get existing L2V configuration for both the partner level and all channels level..
	 **/
	getConfiguration: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("livetovod", "getConfiguration", kparams);
	},
	
	/**
	 * Get existing L2V configuration for a specific linear asset..
	 * @param	linearAssetId	int		Linear asset's identifier. (optional)
	 **/
	getLinearAssetConfiguration: function(linearAssetId){
		var kparams = new Object();
		kparams.linearAssetId = linearAssetId;
		return new KalturaRequestBuilder("livetovod", "getLinearAssetConfiguration", kparams);
	},
	
	/**
	 * Get existing L2V partner configuration..
	 **/
	getPartnerConfiguration: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("livetovod", "getPartnerConfiguration", kparams);
	},
	
	/**
	 * Set L2V configuration for a specific Linear channel..
	 * @param	configuration	KalturaLiveToVodLinearAssetConfiguration		Live to VOD linear asset (live channel) configuration object. (optional)
	 **/
	updateLinearAssetConfiguration: function(configuration){
		var kparams = new Object();
		kparams.configuration = configuration;
		return new KalturaRequestBuilder("livetovod", "updateLinearAssetConfiguration", kparams);
	},
	
	/**
	 * Set L2V configuration on the partner level..
	 * @param	configuration	KalturaLiveToVodPartnerConfiguration		Live to VOD configuration object. (optional)
	 **/
	updatePartnerConfiguration: function(configuration){
		var kparams = new Object();
		kparams.configuration = configuration;
		return new KalturaRequestBuilder("livetovod", "updatePartnerConfiguration", kparams);
	}
}

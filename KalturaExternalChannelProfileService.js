
/**
 *Class definition for the Kaltura service: externalChannelProfile.
 **/
var KalturaExternalChannelProfileService = {
	/**
	 * Insert new External channel for partner.
	 * @param	externalChannel	KalturaExternalChannelProfile		External channel Object (optional)
	 **/
	add: function(externalChannel){
		var kparams = new Object();
		kparams.externalChannel = externalChannel;
		return new KalturaRequestBuilder("externalchannelprofile", "add", kparams);
	},
	
	/**
	 * Delete External channel by External channel id.
	 * @param	externalChannelId	int		External channel identifier (optional)
	 **/
	deleteAction: function(externalChannelId){
		var kparams = new Object();
		kparams.externalChannelId = externalChannelId;
		return new KalturaRequestBuilder("externalchannelprofile", "delete", kparams);
	},
	
	/**
	 * Returns all External channels for partner.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("externalchannelprofile", "list", kparams);
	},
	
	/**
	 * Update External channel details.
	 * @param	externalChannelId	int		External channel identifier (optional)
	 * @param	externalChannel	KalturaExternalChannelProfile		External channel Object (optional)
	 **/
	update: function(externalChannelId, externalChannel){
		var kparams = new Object();
		kparams.externalChannelId = externalChannelId;
		kparams.externalChannel = externalChannel;
		return new KalturaRequestBuilder("externalchannelprofile", "update", kparams);
	}
}


/**
 *Class definition for the Kaltura service: channel.
 **/
var KalturaChannelService = {
	/**
	 * Insert new channel for partner. Currently supports only KSQL channel.
	 * @param	channel	KalturaChannel		KSQL channel Object (optional)
	 **/
	add: function(channel){
		var kparams = new Object();
		kparams.channel = channel;
		return new KalturaRequestBuilder("channel", "add", kparams);
	},
	
	/**
	 * Delete channel by its channel id.
	 * @param	channelId	int		channel identifier (optional)
	 **/
	deleteAction: function(channelId){
		var kparams = new Object();
		kparams.channelId = channelId;
		return new KalturaRequestBuilder("channel", "delete", kparams);
	},
	
	/**
	 * Returns channel info.
	 * @param	id	int		Channel Identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("channel", "get", kparams);
	},
	
	/**
	 * Update channel details. Currently supports only KSQL channel.
	 * @param	channelId	int		Channel identifier (optional)
	 * @param	channel	KalturaChannel		KSQL channel Object (optional)
	 **/
	update: function(channelId, channel){
		var kparams = new Object();
		kparams.channelId = channelId;
		kparams.channel = channel;
		return new KalturaRequestBuilder("channel", "update", kparams);
	}
}


/**
 *Class definition for the Kaltura service: channel.
 **/
var KalturaChannelService = {
	/**
	 * Insert new channel for partner. Supports KalturaDynamicChannel or KalturaManualChannel.
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
	 * Returns channel.
	 * @param	id	int		Channel Identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("channel", "get", kparams);
	},
	
	/**
	 * Get the list of tags for the partner.
	 * @param	filter	KalturaChannelsBaseFilter		Filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Page size and index (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("channel", "list", kparams);
	},
	
	/**
	 * Update channel details. Supports KalturaDynamicChannel or KalturaManualChannel.
	 * @param	id	int		Channel identifier (optional)
	 * @param	channel	KalturaChannel		KSQL channel Object (optional)
	 **/
	update: function(id, channel){
		var kparams = new Object();
		kparams.id = id;
		kparams.channel = channel;
		return new KalturaRequestBuilder("channel", "update", kparams);
	}
}

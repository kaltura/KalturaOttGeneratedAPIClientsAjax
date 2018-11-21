
/**
 *Class definition for the Kaltura service: inboxMessage.
 **/
var KalturaInboxMessageService = {
	/**
	 * TBD.
	 * @param	id	string		message id (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("inboxmessage", "get", kparams);
	},
	
	/**
	 * List inbox messages.
	 * @param	filter	KalturaInboxMessageFilter		filter (optional, default: null)
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
		return new KalturaRequestBuilder("inboxmessage", "list", kparams);
	},
	
	/**
	 * Updates the message status..
	 * @param	id	string		Message identifier (optional)
	 * @param	status	string		Message status (optional, enum: KalturaInboxMessageStatus)
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("inboxmessage", "updateStatus", kparams);
	}
}


/**
 *Class definition for the Kaltura service: topicNotificationMessage.
 **/
var KalturaTopicNotificationMessageService = {
	/**
	 * Add a new topic notification message.
	 * @param	topicNotificationMessage	KalturaTopicNotificationMessage		The topic notification message to add (optional)
	 **/
	add: function(topicNotificationMessage){
		var kparams = new Object();
		kparams.topicNotificationMessage = topicNotificationMessage;
		return new KalturaRequestBuilder("topicnotificationmessage", "add", kparams);
	},
	
	/**
	 * Delete an existing topic notification message.
	 * @param	id	int		ID of topic notification message to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("topicnotificationmessage", "delete", kparams);
	},
	
	/**
	 * Lists all topic notifications in the system..
	 * @param	filter	KalturaTopicNotificationMessageFilter		Filter options (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("topicnotificationmessage", "list", kparams);
	},
	
	/**
	 * Update an existing topic notification message.
	 * @param	id	int		The topic notification message ID to update (optional)
	 * @param	topicNotificationMessage	KalturaTopicNotificationMessage		The topic notification message to update (optional)
	 **/
	update: function(id, topicNotificationMessage){
		var kparams = new Object();
		kparams.id = id;
		kparams.topicNotificationMessage = topicNotificationMessage;
		return new KalturaRequestBuilder("topicnotificationmessage", "update", kparams);
	}
}

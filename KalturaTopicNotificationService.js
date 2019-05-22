
/**
 *Class definition for the Kaltura service: topicNotification.
 **/
var KalturaTopicNotificationService = {
	/**
	 * Add a new topic notification.
	 * @param	topicNotification	KalturaTopicNotification		The topic notification to add (optional)
	 **/
	add: function(topicNotification){
		var kparams = new Object();
		kparams.topicNotification = topicNotification;
		return new KalturaRequestBuilder("topicnotification", "add", kparams);
	},
	
	/**
	 * Delete an existing topic notification.
	 * @param	id	int		ID of topic notification to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("topicnotification", "delete", kparams);
	},
	
	/**
	 * Lists all topic notifications in the system..
	 * @param	filter	KalturaTopicNotificationFilter		Filter options (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("topicnotification", "list", kparams);
	},
	
	/**
	 * Subscribe a user to a topic notification.
	 * @param	topicNotificationId	int		ID of topic notification to subscribe to. (optional)
	 **/
	subscribe: function(topicNotificationId){
		var kparams = new Object();
		kparams.topicNotificationId = topicNotificationId;
		return new KalturaRequestBuilder("topicnotification", "subscribe", kparams);
	},
	
	/**
	 * Unubscribe a user from a topic notification.
	 * @param	topicNotificationId	int		ID of topic notification to unsubscribe from. (optional)
	 **/
	unsubscribe: function(topicNotificationId){
		var kparams = new Object();
		kparams.topicNotificationId = topicNotificationId;
		return new KalturaRequestBuilder("topicnotification", "unsubscribe", kparams);
	},
	
	/**
	 * Update an existing topic notification.
	 * @param	id	int		The topic notification ID to update (optional)
	 * @param	topicNotification	KalturaTopicNotification		The topic notification to update (optional)
	 **/
	update: function(id, topicNotification){
		var kparams = new Object();
		kparams.id = id;
		kparams.topicNotification = topicNotification;
		return new KalturaRequestBuilder("topicnotification", "update", kparams);
	}
}

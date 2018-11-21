
/**
 *Class definition for the Kaltura service: topic.
 **/
var KalturaTopicService = {
	/**
	 * Deleted a topic.
	 * @param	id	int		Topic identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("topic", "delete", kparams);
	},
	
	/**
	 * Gets a topic.
	 * @param	id	int		Topic identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("topic", "get", kparams);
	},
	
	/**
	 * Get list of topics.
	 * @param	filter	KalturaTopicFilter		Topics filter (optional, default: null)
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
		return new KalturaRequestBuilder("topic", "list", kparams);
	},
	
	/**
	 * Updates a topic &quot;automatic issue notification&quot; behavior..
	 * @param	id	int		Topic identifier (optional)
	 * @param	automaticIssueNotification	string		Behavior options:
 *	             Inherit = 0: Take value from partner notification settings
 *	             Yes = 1: Issue a notification massage when a new episode is available on the catalog
 *	             No = 2: Do send a notification message when a new episode is available on the catalog (optional, enum: KalturaTopicAutomaticIssueNotification)
	 **/
	updateStatus: function(id, automaticIssueNotification){
		var kparams = new Object();
		kparams.id = id;
		kparams.automaticIssueNotification = automaticIssueNotification;
		return new KalturaRequestBuilder("topic", "updateStatus", kparams);
	}
}

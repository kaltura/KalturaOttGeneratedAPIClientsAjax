
/**
 *Class definition for the Kaltura service: engagement.
 **/
var KalturaEngagementService = {
	/**
	 * Insert new Engagement for partner.
	 * @param	engagement	KalturaEngagement		Engagement adapter Object (optional)
	 **/
	add: function(engagement){
		var kparams = new Object();
		kparams.engagement = engagement;
		return new KalturaRequestBuilder("engagement", "add", kparams);
	},
	
	/**
	 * Delete engagement by engagement adapter id.
	 * @param	id	int		Engagement identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("engagement", "delete", kparams);
	},
	
	/**
	 * Return engagement.
	 * @param	id	int		Engagement identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("engagement", "get", kparams);
	},
	
	/**
	 * Returns all Engagement for partner.
	 * @param	filter	KalturaEngagementFilter		filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("engagement", "list", kparams);
	}
}

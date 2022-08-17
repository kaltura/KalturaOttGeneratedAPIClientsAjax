
/**
 *Class definition for the Kaltura service: campaign.
 **/
var KalturaCampaignService = {
	/**
	 * Add an object.
	 * @param	objectToAdd	KalturaCampaign		Object to add (optional)
	 **/
	add: function(objectToAdd){
		var kparams = new Object();
		kparams.objectToAdd = objectToAdd;
		return new KalturaRequestBuilder("campaign", "add", kparams);
	},
	
	/**
	 * Update an object.
	 * @param	id	int		Object ID to update (optional)
	 * @param	objectToUpdate	KalturaCampaign		Object to update (optional)
	 **/
	update: function(id, objectToUpdate){
		var kparams = new Object();
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new KalturaRequestBuilder("campaign", "update", kparams);
	},
	
	/**
	 * Delete an object.
	 * @param	id	int		Object ID to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("campaign", "delete", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaCampaignFilter		Request filter (optional)
	 * @param	pager	KalturaFilterPager		Request pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("campaign", "list", kparams);
	},
	
	/**
	 * Set campaign&#39;s state.
	 * @param	campaignId	int		campaign Id (optional)
	 * @param	newState	string		new campaign state (optional, enum: KalturaObjectState)
	 **/
	setState: function(campaignId, newState){
		var kparams = new Object();
		kparams.campaignId = campaignId;
		kparams.newState = newState;
		return new KalturaRequestBuilder("campaign", "setState", kparams);
	}
}


/**
 *Class definition for the Kaltura service: campaign.
 **/
var KalturaCampaignService = {
	/**
	 * Add new Campaign.
	 * @param	objectToAdd	KalturaCampaign		Campaign Object to add (optional)
	 **/
	add: function(objectToAdd){
		var kparams = new Object();
		kparams.objectToAdd = objectToAdd;
		return new KalturaRequestBuilder("campaign", "add", kparams);
	},
	
	/**
	 * Delete existing Campaign.
	 * @param	id	int		Campaign identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("campaign", "delete", kparams);
	},
	
	/**
	 * Returns the list of available Campaigns.
	 * @param	filter	KalturaCampaignFilter		Filter (optional)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
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
	},
	
	/**
	 * Update existing Campaign.
	 * @param	id	int		id of Campaign to update (optional)
	 * @param	objectToUpdate	KalturaCampaign		Campaign Object to update (optional)
	 **/
	update: function(id, objectToUpdate){
		var kparams = new Object();
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new KalturaRequestBuilder("campaign", "update", kparams);
	}
}

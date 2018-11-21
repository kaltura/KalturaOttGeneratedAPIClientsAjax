
/**
 *Class definition for the Kaltura service: homeNetwork.
 **/
var KalturaHomeNetworkService = {
	/**
	 * Add a new home network to a household.
	 * @param	homeNetwork	KalturaHomeNetwork		Home network to add (optional)
	 **/
	add: function(homeNetwork){
		var kparams = new Object();
		kparams.homeNetwork = homeNetwork;
		return new KalturaRequestBuilder("homenetwork", "add", kparams);
	},
	
	/**
	 * Delete household’s existing home network.
	 * @param	externalId	string		The network to update (optional)
	 **/
	deleteAction: function(externalId){
		var kparams = new Object();
		kparams.externalId = externalId;
		return new KalturaRequestBuilder("homenetwork", "delete", kparams);
	},
	
	/**
	 * Retrieve the household’s home networks.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("homenetwork", "list", kparams);
	},
	
	/**
	 * Update and existing home network for a household.
	 * @param	externalId	string		Home network identifier (optional)
	 * @param	homeNetwork	KalturaHomeNetwork		Home network to update (optional)
	 **/
	update: function(externalId, homeNetwork){
		var kparams = new Object();
		kparams.externalId = externalId;
		kparams.homeNetwork = homeNetwork;
		return new KalturaRequestBuilder("homenetwork", "update", kparams);
	}
}


/**
 *Class definition for the Kaltura service: watchBasedRecommendationsProfile.
 **/
var KalturaWatchBasedRecommendationsProfileService = {
	/**
	 * Add partner&#39;s watch based recommendations profile..
	 * @param	profile	KalturaWatchBasedRecommendationsProfile		watch based recommendations profile to add (optional)
	 **/
	add: function(profile){
		var kparams = new Object();
		kparams.profile = profile;
		return new KalturaRequestBuilder("watchbasedrecommendationsprofile", "add", kparams);
	},
	
	/**
	 * Delete partner&#39;s watch based recommendations profile..
	 * @param	id	int		profile id to update (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("watchbasedrecommendationsprofile", "delete", kparams);
	},
	
	/**
	 * Delete all recommendations that were calculated based on specific profile..
	 * @param	id	int		profile id (optional)
	 **/
	deleteWatchBasedRecommendationsOfProfile: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("watchbasedrecommendationsprofile", "deleteWatchBasedRecommendationsOfProfile", kparams);
	},
	
	/**
	 * Get partner&#39;s watch based recommendations profiles..
	 * @param	filter	KalturaWatchBasedRecommendationsProfileFilter		Filtering parameters for watch based recommendations profiles (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("watchbasedrecommendationsprofile", "list", kparams);
	},
	
	/**
	 * Update partner&#39;s watch based recommendations profile..
	 * @param	id	int		profile id to update (optional)
	 * @param	profile	KalturaWatchBasedRecommendationsProfile		watch based recommendations profile to add (optional)
	 **/
	update: function(id, profile){
		var kparams = new Object();
		kparams.id = id;
		kparams.profile = profile;
		return new KalturaRequestBuilder("watchbasedrecommendationsprofile", "update", kparams);
	}
}

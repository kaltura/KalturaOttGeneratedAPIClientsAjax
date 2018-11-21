
/**
 *Class definition for the Kaltura service: recommendationProfile.
 **/
var KalturaRecommendationProfileService = {
	/**
	 * Insert new recommendation engine for partner.
	 * @param	recommendationEngine	KalturaRecommendationProfile		recommendation engine Object (optional)
	 **/
	add: function(recommendationEngine){
		var kparams = new Object();
		kparams.recommendationEngine = recommendationEngine;
		return new KalturaRequestBuilder("recommendationprofile", "add", kparams);
	},
	
	/**
	 * Delete recommendation engine by recommendation engine id.
	 * @param	id	int		recommendation engine Identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("recommendationprofile", "delete", kparams);
	},
	
	/**
	 * Generate recommendation engine  shared secret.
	 * @param	recommendationEngineId	int		recommendation engine Identifier (optional)
	 **/
	generateSharedSecret: function(recommendationEngineId){
		var kparams = new Object();
		kparams.recommendationEngineId = recommendationEngineId;
		return new KalturaRequestBuilder("recommendationprofile", "generateSharedSecret", kparams);
	},
	
	/**
	 * Returns all recommendation engines for partner.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("recommendationprofile", "list", kparams);
	},
	
	/**
	 * Update recommendation engine details.
	 * @param	recommendationEngineId	int		recommendation engine identifier (optional)
	 * @param	recommendationEngine	KalturaRecommendationProfile		recommendation engine Object (optional)
	 **/
	update: function(recommendationEngineId, recommendationEngine){
		var kparams = new Object();
		kparams.recommendationEngineId = recommendationEngineId;
		kparams.recommendationEngine = recommendationEngine;
		return new KalturaRequestBuilder("recommendationprofile", "update", kparams);
	}
}

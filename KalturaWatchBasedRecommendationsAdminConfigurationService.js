
/**
 *Class definition for the Kaltura service: watchBasedRecommendationsAdminConfiguration.
 **/
var KalturaWatchBasedRecommendationsAdminConfigurationService = {
	/**
	 * Get partner&#39;s watch based recommendations admin configuration..
	 **/
	get: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("watchbasedrecommendationsadminconfiguration", "get", kparams);
	},
	
	/**
	 * Updates partner&#39;s watch based recommendations admin configuration..
	 * @param	configuration	KalturaWatchBasedRecommendationsAdminConfiguration		watch based recommendations admin configuration (optional)
	 **/
	update: function(configuration){
		var kparams = new Object();
		kparams.configuration = configuration;
		return new KalturaRequestBuilder("watchbasedrecommendationsadminconfiguration", "update", kparams);
	}
}

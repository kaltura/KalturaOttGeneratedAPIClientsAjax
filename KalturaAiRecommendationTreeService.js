
/**
 *Class definition for the Kaltura service: aiRecommendationTree.
 **/
var KalturaAiRecommendationTreeService = {
	/**
	 * Returns the next question, available answers, and content recommendations based on the current path through the tree..
	 * @param	treeId	string		ID of the tree to navigate (optional - if omitted, the active tree will be used) (optional, default: null)
	 * @param	answerId	string		Selected answer ID from the previous question (required if previousQuestionId is provided) (optional, default: null)
	 * @param	topQuestionId	string		Specific top-level question ID (relevant for first question only) (optional, default: null)
	 **/
	getNextNodeAndRecommendation: function(treeId, answerId, topQuestionId){
		if(!treeId)
			treeId = null;
		if(!answerId)
			answerId = null;
		if(!topQuestionId)
			topQuestionId = null;
		var kparams = new Object();
		kparams.treeId = treeId;
		kparams.answerId = answerId;
		kparams.topQuestionId = topQuestionId;
		return new KalturaRequestBuilder("airecommendationtree", "getNextNodeAndRecommendation", kparams);
	},
	
	/**
	 * Retrieves the current configuration settings for TV Genie for a specific partner..
	 **/
	getPartnerConfig: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("airecommendationtree", "getPartnerConfig", kparams);
	},
	
	/**
	 * Returns content recommendations based on natural language input..
	 * @param	naturalTextQuery	string		The query text entered by the user (optional)
	 * @param	questionId	string		The Id of the question that naturalTextQuery is the answer to (optional) (optional, default: null)
	 * @param	treeId	string		ID of the tree to use (mandatory if previousQuestionId is provided) (optional, default: null)
	 **/
	getRecommendationWithNaturalText: function(naturalTextQuery, questionId, treeId){
		if(!questionId)
			questionId = null;
		if(!treeId)
			treeId = null;
		var kparams = new Object();
		kparams.naturalTextQuery = naturalTextQuery;
		kparams.questionId = questionId;
		kparams.treeId = treeId;
		return new KalturaRequestBuilder("airecommendationtree", "getRecommendationWithNaturalText", kparams);
	},
	
	/**
	 * Updates the configuration settings for TV Genie on a per-partner basis..
	 * @param	configuration	KalturaAiRecommendationTreePartnerConfiguration		The partner configuration to be set (optional)
	 **/
	upsertPartnerConfig: function(configuration){
		var kparams = new Object();
		kparams.configuration = configuration;
		return new KalturaRequestBuilder("airecommendationtree", "upsertPartnerConfig", kparams);
	}
}

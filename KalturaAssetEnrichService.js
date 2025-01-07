
/**
 *Class definition for the Kaltura service: assetEnrich.
 **/
var KalturaAssetEnrichService = {
	/**
	 * Initiate the process of metadata generation.
	 * @param	captionUploadJobId	int		job id to generate metadata for (optional)
	 * @param	externalAssetIds	array		external asset ids (optional)
	 * @param	targetDisplayLanguage	string		relevant language (optional)
	 **/
	generateMetadata: function(captionUploadJobId, externalAssetIds, targetDisplayLanguage){
		var kparams = new Object();
		kparams.captionUploadJobId = captionUploadJobId;
		kparams.externalAssetIds = externalAssetIds;
		kparams.targetDisplayLanguage = targetDisplayLanguage;
		return new KalturaRequestBuilder("assetenrich", "generateMetadata", kparams);
	},
	
	/**
	 * retrieve the status of the metadata generation job.
	 * @param	captionUploadJobId	int		job id to get (optional)
	 **/
	getCaptionUploadJob: function(captionUploadJobId){
		var kparams = new Object();
		kparams.captionUploadJobId = captionUploadJobId;
		return new KalturaRequestBuilder("assetenrich", "getCaptionUploadJob", kparams);
	},
	
	/**
	 * retrieve the generated metadata.
	 * @param	captionUploadJobId	int		job id (optional)
	 **/
	getGeneratedMetadata: function(captionUploadJobId){
		var kparams = new Object();
		kparams.captionUploadJobId = captionUploadJobId;
		return new KalturaRequestBuilder("assetenrich", "getGeneratedMetadata", kparams);
	},
	
	/**
	 * retrieve feature configuration.
	 **/
	getPartnerConfiguration: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("assetenrich", "getPartnerConfiguration", kparams);
	},
	
	/**
	 * update feature configuration.
	 * @param	configuration	KalturaMetaEnrichConfiguration		the partner configuration to be set (optional)
	 **/
	updatePartnerConfiguration: function(configuration){
		var kparams = new Object();
		kparams.configuration = configuration;
		return new KalturaRequestBuilder("assetenrich", "updatePartnerConfiguration", kparams);
	},
	
	/**
	 * Add a file to be used for enriching the assets&#39; metadata.
	 * @param	json	KalturaCaptionUploadData		Properties of the caption file to be uploaded (optional)
	 * @param	fileName	HTMLElement		The caption text file to upload. The file must be in UTF-8 encoding. (optional)
	 **/
	uploadCaptionFile: function(json, fileName){
		var kparams = new Object();
		var kfiles = new Object();
		kparams.json = json;
		kfiles.fileName = fileName;
		return new KalturaRequestBuilder("assetenrich", "uploadCaptionFile", kparams, kfiles);
	}
}


/**
 *Class definition for the Kaltura service: aiMetadataGenerator.
 **/
var KalturaAiMetadataGeneratorService = {
	/**
	 * initiate the the process of metadata generation based on the subtitles file..
	 * @param	subtitlesFileId	int		he subtitles file ID returned when uploaded the subtitles file by the subtitles service.
 *	            Represents also the job ID used by the generate metadata process (optional)
	 * @param	externalAssetIds	array		A list of external asset IDs to be populated with the generated metadata (optional)
	 * @param	targetDisplayLanguage	string		The language used for the generated results.
 *	            Must be a valid existing KalturaLanguage systemName.\nIf not provided then the subtitles language will be used (optional)
	 **/
	generateMetadataBySubtitles: function(subtitlesFileId, externalAssetIds, targetDisplayLanguage){
		var kparams = new Object();
		kparams.subtitlesFileId = subtitlesFileId;
		kparams.externalAssetIds = externalAssetIds;
		kparams.targetDisplayLanguage = targetDisplayLanguage;
		return new KalturaRequestBuilder("aimetadatagenerator", "generateMetadataBySubtitles", kparams);
	},
	
	/**
	 * retrieve the generated metadata.
	 * @param	jobId	int		The job ID (equals the subtitles file ID returned by the subtitles.uploadFile service) (optional)
	 **/
	getGeneratedMetadata: function(jobId){
		var kparams = new Object();
		kparams.jobId = jobId;
		return new KalturaRequestBuilder("aimetadatagenerator", "getGeneratedMetadata", kparams);
	},
	
	/**
	 * retrieve the status of the metadata generation job, identified by the subtitles file ID..
	 * @param	id	int		The file (job) ID as received from subtitles.uploadFile response" (optional)
	 **/
	getGenerateMetadataJob: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("aimetadatagenerator", "getGenerateMetadataJob", kparams);
	},
	
	/**
	 * retrieve feature configuration.
	 **/
	getPartnerConfiguration: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("aimetadatagenerator", "getPartnerConfiguration", kparams);
	},
	
	/**
	 * update feature configuration.
	 * @param	configuration	KalturaAiMetadataGeneratorConfiguration		the partner configuration to be set (optional)
	 **/
	setPartnerConfiguration: function(configuration){
		var kparams = new Object();
		kparams.configuration = configuration;
		return new KalturaRequestBuilder("aimetadatagenerator", "setPartnerConfiguration", kparams);
	}
}

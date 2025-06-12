
/**
 *Class definition for the Kaltura service: aiMetadataGenerator.
 **/
var KalturaAiMetadataGeneratorService = {
	/**
	 * Initiate the the process of metadata generation based on the subtitles file..
	 * @param	subtitlesFileId	int		The subtitles file ID returned when uploaded the subtitles file by the subtitles service.
 *	            Represents also the job ID used by the generate metadata process (optional)
	 * @param	externalAssetIds	array		A list of external asset IDs to be populated with the generated metadata
 *	            Must be a valid existing KalturaLanguage systemName.\nIf not provided then the subtitles language will be used (optional, default: null)
	 **/
	generateMetadataBySubtitles: function(subtitlesFileId, externalAssetIds){
		if(!externalAssetIds)
			externalAssetIds = null;
		var kparams = new Object();
		kparams.subtitlesFileId = subtitlesFileId;
		kparams.externalAssetIds = externalAssetIds;
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
	 * Get metadata mapping structure and available generated metadata fields.
	 **/
	getMetadataFieldDefinitions: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("aimetadatagenerator", "getMetadataFieldDefinitions", kparams);
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
	updatePartnerConfiguration: function(configuration){
		var kparams = new Object();
		kparams.configuration = configuration;
		return new KalturaRequestBuilder("aimetadatagenerator", "updatePartnerConfiguration", kparams);
	}
}

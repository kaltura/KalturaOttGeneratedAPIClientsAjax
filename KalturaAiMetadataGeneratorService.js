
/**
 *Class definition for the Kaltura service: aiMetadataGenerator.
 **/
var KalturaAiMetadataGeneratorService = {
	/**
	 * Start metadata generation process based on subtitles..
	 * @param	subtitlesFileId	int		The subtitles file ID returned from subtitles.uploadFile. (optional)
	 * @param	externalAssetIds	array		A list of external asset IDs to be populated with the generated metadata. (optional, default: null)
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
	 * Retrieve the generated metadata.
	 * @param	jobId	int		The job ID as received from GenerateMetadataBySubtitles. (optional)
	 **/
	getGeneratedMetadata: function(jobId){
		var kparams = new Object();
		kparams.jobId = jobId;
		return new KalturaRequestBuilder("aimetadatagenerator", "getGeneratedMetadata", kparams);
	},
	
	/**
	 * Get a metadata generation job..
	 * @param	id	int		The job ID as received from GenerateMetadataBySubtitles. (optional)
	 **/
	getGenerateMetadataJob: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("aimetadatagenerator", "getGenerateMetadataJob", kparams);
	},
	
	/**
	 * Get metadata mapping structure and available generated metadata fields..
	 **/
	getMetadataFieldDefinitions: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("aimetadatagenerator", "getMetadataFieldDefinitions", kparams);
	},
	
	/**
	 * Get the metadata generation configuration..
	 **/
	getPartnerConfiguration: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("aimetadatagenerator", "getPartnerConfiguration", kparams);
	},
	
	/**
	 * Update/set the metadata generation configuration.
	 * @param	configuration	KalturaAiMetadataGeneratorConfiguration		the partner configuration to be set (optional)
	 **/
	updatePartnerConfiguration: function(configuration){
		var kparams = new Object();
		kparams.configuration = configuration;
		return new KalturaRequestBuilder("aimetadatagenerator", "updatePartnerConfiguration", kparams);
	}
}


/**
 *Class definition for the Kaltura service: aiMetadataGenerator.
 **/
var KalturaAiMetadataGeneratorService = {
	/**
	 * Initiate the process of metadata generation based on existing asset description metadata.
 *	            The service will analyze the asset&#39;s description and genre metadata using AI/LLM to generate
 *	            additional enriched metadata fields including enhanced genre classifications, sentiment analysis,
 *	            and relevant keywords. This method is useful for enriching assets that already have basic
 *	            description metadata but need additional AI-generated metadata fields..
	 * @param	generateMetadataByDescription	KalturaGenerateMetadataByDescription		Request object containing the external asset ID to analyze and enrich (optional)
	 **/
	generateMetadataByDescription: function(generateMetadataByDescription){
		var kparams = new Object();
		kparams.generateMetadataByDescription = generateMetadataByDescription;
		return new KalturaRequestBuilder("aimetadatagenerator", "generateMetadataByDescription", kparams);
	},
	
	/**
	 * Initiate the process of metadata generation based on the subtitles file.
 *	            The subtitles file must be previously uploaded using the subtitles.uploadFile service.
 *	            The service will analyze the subtitle content using AI/LLM to generate enriched metadata including
 *	            genre, description, keywords, sentiment analysis, and other metadata fields..
	 * @param	generateMetadataBySubtitles	KalturaGenerateMetadataBySubtitles		Request object containing the subtitles file ID and optional external asset IDs to update (optional)
	 **/
	generateMetadataBySubtitles: function(generateMetadataBySubtitles){
		var kparams = new Object();
		kparams.generateMetadataBySubtitles = generateMetadataBySubtitles;
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

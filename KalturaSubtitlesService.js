
/**
 *Class definition for the Kaltura service: subtitles.
 **/
var KalturaSubtitlesService = {
	/**
	 * Add a subtitles file to be used for generating metadata and enriching the assets using a multi-part form-data body including the JSON configuration object and the uploaded file..
	 * @param	subtitles	KalturaUploadSubtitles		Subtitle file metadata. (optional)
	 * @param	fileData	HTMLElement		The subtitles file to upload. The file must be in UTF-8 encoding. (optional)
	 **/
	uploadFile: function(subtitles, fileData){
		var kparams = new Object();
		var kfiles = new Object();
		kparams.subtitles = subtitles;
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("subtitles", "uploadFile", kparams, kfiles);
	}
}

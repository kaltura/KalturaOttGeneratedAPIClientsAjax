
/**
 *Class definition for the Kaltura service: subtitles.
 **/
var KalturaSubtitlesService = {
	/**
	 * Upload a subtitles file for a later analysis..
	 * @param	subtitles	KalturaUploadSubtitles		Subtitle metadata (optional)
	 * @param	fileData	HTMLElement		The subtitles text file to upload. Must be in UTF-8 encoding. (optional)
	 **/
	uploadFile: function(subtitles, fileData){
		var kparams = new Object();
		var kfiles = new Object();
		kparams.subtitles = subtitles;
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("subtitles", "uploadFile", kparams, kfiles);
	}
}

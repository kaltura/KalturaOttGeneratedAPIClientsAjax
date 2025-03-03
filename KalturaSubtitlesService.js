
/**
 *Class definition for the Kaltura service: subtitles.
 **/
var KalturaSubtitlesService = {
	/**
	 * Return a subtitles file.
	 * @param	id	int		A subtitles file ID to be retrieved (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("subtitles", "get", kparams);
	},
	
	/**
	 * Return a list of available subtitles files.
	 * @param	filter	KalturaSubtitlesFilter		Filter (optional)
	 * @param	pager	KalturaFilterPager		Pager (optional)
	 **/
	listAction: function(filter, pager){
		var kparams = new Object();
		kparams.filter = filter;
		kparams.pager = pager;
		return new KalturaRequestBuilder("subtitles", "list", kparams);
	},
	
	/**
	 * Upload a subtitles file for a later analysis..
	 * @param	subtitles	KalturaSubtitles		Subtitle metadata (optional)
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

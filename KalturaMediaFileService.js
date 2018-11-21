
/**
 *Class definition for the Kaltura service: mediaFile.
 **/
var KalturaMediaFileService = {
	/**
	 * Add a new media file.
	 * @param	mediaFile	KalturaMediaFile		Media file object (optional)
	 **/
	add: function(mediaFile){
		var kparams = new Object();
		kparams.mediaFile = mediaFile;
		return new KalturaRequestBuilder("mediafile", "add", kparams);
	},
	
	/**
	 * Delete an existing media file.
	 * @param	id	int		Media file identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("mediafile", "delete", kparams);
	},
	
	/**
	 * Returns a list of media-file.
	 * @param	filter	KalturaMediaFileFilter		Filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("mediafile", "list", kparams);
	},
	
	/**
	 * update an existing media file.
	 * @param	id	int		Media file identifier (optional)
	 * @param	mediaFile	KalturaMediaFile		Media file object (optional)
	 **/
	update: function(id, mediaFile){
		var kparams = new Object();
		kparams.id = id;
		kparams.mediaFile = mediaFile;
		return new KalturaRequestBuilder("mediafile", "update", kparams);
	}
}

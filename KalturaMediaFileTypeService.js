
/**
 *Class definition for the Kaltura service: mediaFileType.
 **/
var KalturaMediaFileTypeService = {
	/**
	 * Add new media-file type.
	 * @param	mediaFileType	KalturaMediaFileType		Media-file type (optional)
	 **/
	add: function(mediaFileType){
		var kparams = new Object();
		kparams.mediaFileType = mediaFileType;
		return new KalturaRequestBuilder("mediafiletype", "add", kparams);
	},
	
	/**
	 * Delete media-file type by id.
	 * @param	id	int		Media-file type identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("mediafiletype", "delete", kparams);
	},
	
	/**
	 * Returns a list of media-file types.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("mediafiletype", "list", kparams);
	},
	
	/**
	 * Update existing media-file type.
	 * @param	id	int		Media-file type identifier (optional)
	 * @param	mediaFileType	KalturaMediaFileType		Media-file type (optional)
	 **/
	update: function(id, mediaFileType){
		var kparams = new Object();
		kparams.id = id;
		kparams.mediaFileType = mediaFileType;
		return new KalturaRequestBuilder("mediafiletype", "update", kparams);
	}
}

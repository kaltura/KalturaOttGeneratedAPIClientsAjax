
/**
 *Class definition for the Kaltura service: uploadToken.
 **/
var KalturaUploadTokenService = {
	/**
	 * Adds new upload token to upload a file.
	 * @param	uploadToken	KalturaUploadToken		Upload token details (optional, default: null)
	 **/
	add: function(uploadToken){
		if(!uploadToken)
			uploadToken = null;
		var kparams = new Object();
		if (uploadToken != null)
			kparams.uploadToken = uploadToken;
		return new KalturaRequestBuilder("uploadtoken", "add", kparams);
	},
	
	/**
	 * Upload a file using the upload token id.
	 * @param	uploadTokenId	string		Identifier of existing upload-token (optional)
	 * @param	fileData	HTMLElement		File to upload (optional)
	 **/
	upload: function(uploadTokenId, fileData){
		var kparams = new Object();
		var kfiles = new Object();
		kparams.uploadTokenId = uploadTokenId;
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("uploadtoken", "upload", kparams, kfiles);
	}
}

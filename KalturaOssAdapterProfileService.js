
/**
 *Class definition for the Kaltura service: ossAdapterProfile.
 **/
var KalturaOssAdapterProfileService = {
	/**
	 * Insert new OSS adapter for partner.
	 * @param	ossAdapter	KalturaOSSAdapterProfile		OSS adapter Object (optional)
	 **/
	add: function(ossAdapter){
		var kparams = new Object();
		kparams.ossAdapter = ossAdapter;
		return new KalturaRequestBuilder("ossadapterprofile", "add", kparams);
	},
	
	/**
	 * Delete OSS adapter by OSS adapter id.
	 * @param	ossAdapterId	int		OSS adapter identifier (optional)
	 **/
	deleteAction: function(ossAdapterId){
		var kparams = new Object();
		kparams.ossAdapterId = ossAdapterId;
		return new KalturaRequestBuilder("ossadapterprofile", "delete", kparams);
	},
	
	/**
	 * Generate oss adapter shared secret.
	 * @param	ossAdapterId	int		OSS adapter identifier (optional)
	 **/
	generateSharedSecret: function(ossAdapterId){
		var kparams = new Object();
		kparams.ossAdapterId = ossAdapterId;
		return new KalturaRequestBuilder("ossadapterprofile", "generateSharedSecret", kparams);
	},
	
	/**
	 * Returns all OSS adapters for partner : id + name.
	 * @param	id	int		OSS adapter identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("ossadapterprofile", "get", kparams);
	},
	
	/**
	 * Returns all OSS adapters for partner : id + name.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("ossadapterprofile", "list", kparams);
	},
	
	/**
	 * Update OSS adapter details.
	 * @param	ossAdapterId	int		OSS adapter identifier (optional)
	 * @param	ossAdapter	KalturaOSSAdapterProfile		OSS adapter Object (optional)
	 **/
	update: function(ossAdapterId, ossAdapter){
		var kparams = new Object();
		kparams.ossAdapterId = ossAdapterId;
		kparams.ossAdapter = ossAdapter;
		return new KalturaRequestBuilder("ossadapterprofile", "update", kparams);
	}
}

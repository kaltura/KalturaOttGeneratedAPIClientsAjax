
/**
 *Class definition for the Kaltura service: previewModule.
 **/
var KalturaPreviewModuleService = {
	/**
	 * Internal API !!! Insert new PreviewModule for partner.
	 * @param	previewModule	KalturaPreviewModule		Preview module object (optional)
	 **/
	add: function(previewModule){
		var kparams = new Object();
		kparams.previewModule = previewModule;
		return new KalturaRequestBuilder("previewmodule", "add", kparams);
	},
	
	/**
	 * Internal API !!! Delete PreviewModule.
	 * @param	id	int		PreviewModule id (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("previewmodule", "delete", kparams);
	},
	
	/**
	 * Internal API !!! Returns all PreviewModule.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("previewmodule", "list", kparams);
	}
}


/**
 *Class definition for the Kaltura service: previewModule.
 **/
var KalturaPreviewModuleService = {
	/**
	 * Insert new PreviewModule for partner.
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
	 * Returns all PreviewModule.
	 * @param	filter	KalturaPreviewModuleFilter		Filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("previewmodule", "list", kparams);
	},
	
	/**
	 * Update PreviewModule.
	 * @param	id	int		PreviewModule id (optional)
	 * @param	previewModule	KalturaPreviewModule		PreviewModule (optional)
	 **/
	update: function(id, previewModule){
		var kparams = new Object();
		kparams.id = id;
		kparams.previewModule = previewModule;
		return new KalturaRequestBuilder("previewmodule", "update", kparams);
	}
}

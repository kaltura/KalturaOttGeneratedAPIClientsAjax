
/**
 *Class definition for the Kaltura service: image.
 **/
var KalturaImageService = {
	/**
	 * Add a new image.
	 * @param	image	KalturaImage		Image (optional)
	 **/
	add: function(image){
		var kparams = new Object();
		kparams.image = image;
		return new KalturaRequestBuilder("image", "add", kparams);
	},
	
	/**
	 * Delete an existing image.
	 * @param	id	int		Image ID (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("image", "delete", kparams);
	},
	
	/**
	 * Get the list of images by different filtering.
	 * @param	filter	KalturaImageFilter		Filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("image", "list", kparams);
	},
	
	/**
	 * Sets the content of an existing image.
	 * @param	id	int		Image ID (optional)
	 * @param	content	KalturaContentResource		Content of the image to set (optional)
	 **/
	setContent: function(id, content){
		var kparams = new Object();
		kparams.id = id;
		kparams.content = content;
		return new KalturaRequestBuilder("image", "setContent", kparams);
	}
}

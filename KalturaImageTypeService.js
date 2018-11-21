
/**
 *Class definition for the Kaltura service: imageType.
 **/
var KalturaImageTypeService = {
	/**
	 * Add a new image type.
	 * @param	imageType	KalturaImageType		Image type object (optional)
	 **/
	add: function(imageType){
		var kparams = new Object();
		kparams.imageType = imageType;
		return new KalturaRequestBuilder("imagetype", "add", kparams);
	},
	
	/**
	 * Delete an existing image type.
	 * @param	id	int		Image type ID (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("imagetype", "delete", kparams);
	},
	
	/**
	 * Get the list of image types for the partner.
	 * @param	filter	KalturaImageTypeFilter		Filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("imagetype", "list", kparams);
	},
	
	/**
	 * Update an existing image type.
	 * @param	id	int		Image type ID (optional)
	 * @param	imageType	KalturaImageType		Image type object (optional)
	 **/
	update: function(id, imageType){
		var kparams = new Object();
		kparams.id = id;
		kparams.imageType = imageType;
		return new KalturaRequestBuilder("imagetype", "update", kparams);
	}
}


/**
 *Class definition for the Kaltura service: label.
 **/
var KalturaLabelService = {
	/**
	 * Create a new label associated with a predefined entity attribute. Currently supports only labels on KalturaMediaFile..
	 * @param	label	KalturaLabel		KalturaLabel object with defined Value. (optional)
	 **/
	add: function(label){
		var kparams = new Object();
		kparams.label = label;
		return new KalturaRequestBuilder("label", "add", kparams);
	},
	
	/**
	 * Deletes the existing label by its identifier..
	 * @param	id	int		The identifier of label. (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("label", "delete", kparams);
	},
	
	/**
	 * Gets list of labels which meet the filter criteria..
	 * @param	filter	KalturaLabelFilter		Filter. (optional)
	 * @param	pager	KalturaFilterPager		Page size and index. (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("label", "list", kparams);
	},
	
	/**
	 * Updates the existing label with a new value..
	 * @param	id	int		The identifier of label. (optional)
	 * @param	label	KalturaLabel		KalturaLabel object with new Value. (optional)
	 **/
	update: function(id, label){
		var kparams = new Object();
		kparams.id = id;
		kparams.label = label;
		return new KalturaRequestBuilder("label", "update", kparams);
	}
}

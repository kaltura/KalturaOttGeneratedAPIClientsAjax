
/**
 *Class definition for the Kaltura service: ratio.
 **/
var KalturaRatioService = {
	/**
	 * Add new group ratio.
	 * @param	ratio	KalturaRatio		Ratio to add for the partner (optional)
	 **/
	add: function(ratio){
		var kparams = new Object();
		kparams.ratio = ratio;
		return new KalturaRequestBuilder("ratio", "add", kparams);
	},
	
	/**
	 * Get the list of available ratios.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("ratio", "list", kparams);
	},
	
	/**
	 * Update group ratio&#39;s PrecisionPrecentage.
	 * @param	id	int		The ratio ID (optional)
	 * @param	ratio	KalturaRatio		Ratio to update for the partner (optional)
	 **/
	update: function(id, ratio){
		var kparams = new Object();
		kparams.id = id;
		kparams.ratio = ratio;
		return new KalturaRequestBuilder("ratio", "update", kparams);
	}
}

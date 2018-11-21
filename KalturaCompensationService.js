
/**
 *Class definition for the Kaltura service: compensation.
 **/
var KalturaCompensationService = {
	/**
	 * Adds a new compensation for a household for a given number of iterations of a subscription renewal for a fixed amount / percentage of the renewal price..
	 * @param	compensation	KalturaCompensation		Compensation parameters (optional)
	 **/
	add: function(compensation){
		var kparams = new Object();
		kparams.compensation = compensation;
		return new KalturaRequestBuilder("compensation", "add", kparams);
	},
	
	/**
	 * Delete a compensation by identifier.
	 * @param	id	int		Compensation identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("compensation", "delete", kparams);
	},
	
	/**
	 * Get a compensation by identifier.
	 * @param	id	int		Compensation identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("compensation", "get", kparams);
	}
}

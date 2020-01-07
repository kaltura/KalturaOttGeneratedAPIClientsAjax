
/**
 *Class definition for the Kaltura service: householdSegment.
 **/
var KalturaHouseholdSegmentService = {
	/**
	 * householdSegment add.
	 * @param	objectToAdd	KalturaHouseholdSegment		householdSegment details (optional)
	 **/
	add: function(objectToAdd){
		var kparams = new Object();
		kparams.objectToAdd = objectToAdd;
		return new KalturaRequestBuilder("householdsegment", "add", kparams);
	},
	
	/**
	 * Remove segment from household.
	 * @param	id	int		Segment identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("householdsegment", "delete", kparams);
	},
	
	/**
	 * Gets all HouseholdSegment items for a household.
	 * @param	filter	KalturaHouseholdSegmentFilter		Request filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("householdsegment", "list", kparams);
	}
}

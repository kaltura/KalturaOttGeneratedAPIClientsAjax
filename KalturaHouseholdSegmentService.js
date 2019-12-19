
/**
 *Class definition for the Kaltura service: householdSegment.
 **/
var KalturaHouseholdSegmentService = {
	/**
	 * Adds a segment to a household.
	 * @param	householdSegment	KalturaHouseholdSegment		Household segment (optional)
	 **/
	add: function(householdSegment){
		var kparams = new Object();
		kparams.householdSegment = householdSegment;
		return new KalturaRequestBuilder("householdsegment", "add", kparams);
	},
	
	/**
	 * Deletes a segment from a household.
	 * @param	householdId	int		Household id (optional)
	 * @param	segmentId	int		Segemnt id (optional)
	 **/
	deleteAction: function(householdId, segmentId){
		var kparams = new Object();
		kparams.householdId = householdId;
		kparams.segmentId = segmentId;
		return new KalturaRequestBuilder("householdsegment", "delete", kparams);
	},
	
	/**
	 * Retrieve all the segments that apply for given household.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("householdsegment", "list", kparams);
	}
}

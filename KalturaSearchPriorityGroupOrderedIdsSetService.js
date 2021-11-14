
/**
 *Class definition for the Kaltura service: searchPriorityGroupOrderedIdsSet.
 **/
var KalturaSearchPriorityGroupOrderedIdsSetService = {
	/**
	 * Return the current ordering of priority groups for the partner..
	 **/
	get: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("searchprioritygrouporderedidsset", "get", kparams);
	},
	
	/**
	 * Set the ordering of priority groups for the partner..
	 * @param	orderedList	KalturaSearchPriorityGroupOrderedIdsSet		List with ordered search priority groups. (optional)
	 **/
	set: function(orderedList){
		var kparams = new Object();
		kparams.orderedList = orderedList;
		return new KalturaRequestBuilder("searchprioritygrouporderedidsset", "set", kparams);
	}
}

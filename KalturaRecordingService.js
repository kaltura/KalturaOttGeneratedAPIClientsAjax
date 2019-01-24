
/**
 *Class definition for the Kaltura service: recording.
 **/
var KalturaRecordingService = {
	/**
	 * Issue a record request for a program.
	 * @param	recording	KalturaRecording		Recording Object (optional)
	 **/
	add: function(recording){
		var kparams = new Object();
		kparams.recording = recording;
		return new KalturaRequestBuilder("recording", "add", kparams);
	},
	
	/**
	 * Cancel a previously requested recording. Cancel recording can be called for recording in status Scheduled or Recording Only.
	 * @param	id	int		Recording identifier (optional)
	 **/
	cancel: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("recording", "cancel", kparams);
	},
	
	/**
	 * Delete one or more user recording(s). Delete recording can be called only for recordings in status Recorded.
	 * @param	id	int		Recording identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("recording", "delete", kparams);
	},
	
	/**
	 * Returns recording object by internal identifier.
	 * @param	id	int		Recording identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("recording", "get", kparams);
	},
	
	/**
	 * Return a list of recordings for the household with optional filter by status and KSQL..
	 * @param	filter	KalturaRecordingFilter		Filter parameters for filtering out the result (optional, default: null)
	 * @param	pager	KalturaFilterPager		Page size and index (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("recording", "list", kparams);
	},
	
	/**
	 * Protects an existing recording from the cleanup process for the defined protection period.
	 * @param	id	int		Recording identifier (optional)
	 **/
	protect: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("recording", "protect", kparams);
	}
}

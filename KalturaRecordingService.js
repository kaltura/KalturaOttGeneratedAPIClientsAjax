
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
	 * Delete list of user&#39;s recordings. Recording can be deleted only in status Recorded.
 *	            Possible error codes for each recording: RecordingNotFound = 3039, RecordingStatusNotValid = 3043, Error = 1.
	 * @param	recordingIds	string		Recording identifiers. Up to 40 private copies and up to 100 shared copies can be deleted withing a call. (optional)
	 **/
	bulkdelete: function(recordingIds){
		var kparams = new Object();
		kparams.recordingIds = recordingIds;
		return new KalturaRequestBuilder("recording", "bulkdelete", kparams);
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
	 * Immediate Record.
	 * @param	assetId	int		asset identifier (optional)
	 * @param	epgChannelId	int		epg channel identifier (optional)
	 * @param	crid	string		crid (optional)
	 * @param	endPadding	int		end padding offset (optional)
	 **/
	immediateRecord: function(assetId, epgChannelId, crid, endPadding){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.epgChannelId = epgChannelId;
		kparams.crid = crid;
		kparams.endPadding = endPadding;
		return new KalturaRequestBuilder("recording", "immediateRecord", kparams);
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
	 * Deprecated, please use recording.update instead
 *	            Protects an existing recording from the cleanup process for the defined protection period.
	 * @param	id	int		Recording identifier (optional)
	 **/
	protect: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("recording", "protect", kparams);
	},
	
	/**
	 * Stop ongoing household recording.
	 * @param	assetId	int		asset identifier (optional)
	 * @param	epgChannelId	int		epg channel identifier (optional)
	 * @param	householdRecordingId	int		household recording identifier (optional)
	 **/
	stop: function(assetId, epgChannelId, householdRecordingId){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.epgChannelId = epgChannelId;
		kparams.householdRecordingId = householdRecordingId;
		return new KalturaRequestBuilder("recording", "stop", kparams);
	},
	
	/**
	 * Update an existing recording with is protected field.
	 * @param	id	int		recording identifier (optional)
	 * @param	recording	KalturaRecording		recording to update (optional)
	 **/
	update: function(id, recording){
		var kparams = new Object();
		kparams.id = id;
		kparams.recording = recording;
		return new KalturaRequestBuilder("recording", "update", kparams);
	}
}

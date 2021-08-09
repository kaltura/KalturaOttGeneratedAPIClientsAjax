
/**
 *Class definition for the Kaltura service: seriesRecording.
 **/
var KalturaSeriesRecordingService = {
	/**
	 * Issue a record request for a complete season or series.
	 * @param	recording	KalturaSeriesRecording		SeriesRecording Object (optional)
	 **/
	add: function(recording){
		var kparams = new Object();
		kparams.recording = recording;
		return new KalturaRequestBuilder("seriesrecording", "add", kparams);
	},
	
	/**
	 * Cancel a previously requested series recording. Cancel series recording can be called for recording in status Scheduled or Recording Only.
	 * @param	id	int		Series Recording identifier (optional)
	 **/
	cancel: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("seriesrecording", "cancel", kparams);
	},
	
	/**
	 * Cancel EPG recording that was recorded as part of series.
	 * @param	id	int		Series Recording identifier (optional)
	 * @param	epgId	int		epg program identifier (optional)
	 **/
	cancelByEpgId: function(id, epgId){
		var kparams = new Object();
		kparams.id = id;
		kparams.epgId = epgId;
		return new KalturaRequestBuilder("seriesrecording", "cancelByEpgId", kparams);
	},
	
	/**
	 * Cancel Season recording epgs that was recorded as part of series.
	 * @param	id	int		Series Recording identifier (optional)
	 * @param	seasonNumber	int		Season Number (optional)
	 **/
	cancelBySeasonNumber: function(id, seasonNumber){
		var kparams = new Object();
		kparams.id = id;
		kparams.seasonNumber = seasonNumber;
		return new KalturaRequestBuilder("seriesrecording", "cancelBySeasonNumber", kparams);
	},
	
	/**
	 * Delete series recording(s). Delete series recording can be called recordings in any status.
	 * @param	id	int		Series Recording identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("seriesrecording", "delete", kparams);
	},
	
	/**
	 * Delete Season recording epgs that was recorded as part of series.
	 * @param	id	int		Series Recording identifier (optional)
	 * @param	seasonNumber	int		Season Number (optional)
	 **/
	deleteBySeasonNumber: function(id, seasonNumber){
		var kparams = new Object();
		kparams.id = id;
		kparams.seasonNumber = seasonNumber;
		return new KalturaRequestBuilder("seriesrecording", "deleteBySeasonNumber", kparams);
	},
	
	/**
	 * Return a list of series recordings for the household with optional filter by status and KSQL..
	 * @param	filter	KalturaSeriesRecordingFilter		Filter parameters for filtering out the result - support order by only - START_DATE_ASC, START_DATE_DESC, ID_ASC,ID_DESC,SERIES_ID_ASC, SERIES_ID_DESC (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("seriesrecording", "list", kparams);
	}
}

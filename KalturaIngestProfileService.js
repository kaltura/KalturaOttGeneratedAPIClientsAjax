
/**
 *Class definition for the Kaltura service: IngestProfile.
 **/
var KalturaIngestProfileService = {
	/**
	 * Insert new ingest profile for partner.
	 * @param	ingestProfile	KalturaIngestProfile		ingest profile Object to be added (optional)
	 **/
	add: function(ingestProfile){
		var kparams = new Object();
		kparams.ingestProfile = ingestProfile;
		return new KalturaRequestBuilder("ingestprofile", "add", kparams);
	},
	
	/**
	 * Delete ingest profiles by ingest profiles id.
	 * @param	ingestProfileId	int		ingest profile Identifier (optional)
	 **/
	deleteAction: function(ingestProfileId){
		var kparams = new Object();
		kparams.ingestProfileId = ingestProfileId;
		return new KalturaRequestBuilder("ingestprofile", "delete", kparams);
	},
	
	/**
	 * Returns all ingest profiles for partner.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("ingestprofile", "list", kparams);
	},
	
	/**
	 * Update ingest profile details.
	 * @param	ingestProfileId	int		ingest profile Identifier (optional)
	 * @param	ingestProfile	KalturaIngestProfile		ingest profile Object (optional)
	 **/
	update: function(ingestProfileId, ingestProfile){
		var kparams = new Object();
		kparams.ingestProfileId = ingestProfileId;
		kparams.ingestProfile = ingestProfile;
		return new KalturaRequestBuilder("ingestprofile", "update", kparams);
	}
}

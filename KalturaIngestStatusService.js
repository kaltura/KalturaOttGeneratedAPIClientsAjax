
/**
 *Class definition for the Kaltura service: ingestStatus.
 **/
var KalturaIngestStatusService = {
	/**
	 * Returns information about specific Ingest job.
	 * @param	ingestId	int		The id of the requested ingest job (optional)
	 **/
	getEpgDetails: function(ingestId){
		var kparams = new Object();
		kparams.ingestId = ingestId;
		return new KalturaRequestBuilder("ingeststatus", "getEpgDetails", kparams);
	},
	
	/**
	 * Response with list of ingest jobs..
	 * @param	idsFilter	KalturaIngestByIdsFilter		Filter pager (optional, default: null)
	 * @param	filter	KalturaIngestByCompoundFilter		Filter pager (optional, default: null)
	 * @param	pager	KalturaFilterPager		Filter pager (optional, default: null)
	 **/
	getEpgList: function(idsFilter, filter, pager){
		if(!idsFilter)
			idsFilter = null;
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (idsFilter != null)
			kparams.idsFilter = idsFilter;
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("ingeststatus", "getEpgList", kparams);
	},
	
	/**
	 * Get as input ingest job id, filter and pager and response with page of filtered detailed ingest job results..
	 * @param	ingestId	int		The id of the requested ingest job (optional)
	 * @param	filter	KalturaIngestEpgProgramResultFilter		Filter for Ingest program, results (optional, default: null)
	 * @param	pager	KalturaFilterPager		Paging the request (optional, default: null)
	 **/
	getEpgProgramResultList: function(ingestId, filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.ingestId = ingestId;
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("ingeststatus", "getEpgProgramResultList", kparams);
	},
	
	/**
	 * Returns Core Ingest service partner configurations.
	 **/
	getPartnerConfiguration: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("ingeststatus", "getPartnerConfiguration", kparams);
	},
	
	/**
	 * List detailed results of ingested assets..
	 * @param	filter	KalturaVodIngestAssetResultFilter		Filter object with parameters to filter selected ingest processes and assets (optional, default: null)
	 * @param	pager	KalturaFilterPager		Paging the request (optional, default: null)
	 **/
	getVodAssetResult: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("ingeststatus", "getVodAssetResult", kparams);
	},
	
	/**
	 * Returns Core Ingest service partner configurations.
	 * @param	config	KalturaIngestStatusPartnerConfiguration		the partner config updates (optional)
	 **/
	updatePartnerConfiguration: function(config){
		var kparams = new Object();
		kparams.config = config;
		return new KalturaRequestBuilder("ingeststatus", "updatePartnerConfiguration", kparams);
	}
}

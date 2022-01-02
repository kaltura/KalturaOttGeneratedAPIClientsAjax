
/**
 *Class definition for the Kaltura service: ingestStatus.
 **/
var KalturaIngestStatusService = {
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
	 * Returns Core Ingest service partner configurations.
	 **/
	getPartnerConfiguration: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("ingeststatus", "getPartnerConfiguration", kparams);
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

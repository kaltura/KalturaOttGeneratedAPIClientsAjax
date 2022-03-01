
/**
 *Class definition for the Kaltura service: programAssetGroupOffer.
 **/
var KalturaProgramAssetGroupOfferService = {
	/**
	 * Insert new ProgramAssetGroupOffer for partner.
	 * @param	programAssetGroupOffer	KalturaProgramAssetGroupOffer		programAssetGroupOffer object (optional)
	 **/
	add: function(programAssetGroupOffer){
		var kparams = new Object();
		kparams.programAssetGroupOffer = programAssetGroupOffer;
		return new KalturaRequestBuilder("programassetgroupoffer", "add", kparams);
	},
	
	/**
	 * Delete programAssetGroupOffer.
	 * @param	id	int		ProgramAssetGroupOffer id (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("programassetgroupoffer", "delete", kparams);
	},
	
	/**
	 * Gets all Program asset group offer.
	 * @param	filter	KalturaProgramAssetGroupOfferFilter		Filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
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
		return new KalturaRequestBuilder("programassetgroupoffer", "list", kparams);
	},
	
	/**
	 * Update ProgramAssetGroupOffer.
	 * @param	id	int		ProgramAssetGroupOffer id (optional)
	 * @param	programAssetGroupOffer	KalturaProgramAssetGroupOffer		ProgramAssetGroupOffer (optional)
	 **/
	update: function(id, programAssetGroupOffer){
		var kparams = new Object();
		kparams.id = id;
		kparams.programAssetGroupOffer = programAssetGroupOffer;
		return new KalturaRequestBuilder("programassetgroupoffer", "update", kparams);
	}
}

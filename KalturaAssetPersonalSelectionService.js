
/**
 *Class definition for the Kaltura service: assetPersonalSelection.
 **/
var KalturaAssetPersonalSelectionService = {
	/**
	 * Remove asset selection in slot.
	 * @param	assetId	int		asset id (optional)
	 * @param	assetType	string		asset type: media/epg (optional, enum: KalturaAssetType)
	 * @param	slotNumber	int		slot number (optional)
	 **/
	deleteAction: function(assetId, assetType, slotNumber){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.assetType = assetType;
		kparams.slotNumber = slotNumber;
		return new KalturaRequestBuilder("assetpersonalselection", "delete", kparams);
	},
	
	/**
	 * Remove asset selection in slot.
	 * @param	slotNumber	int		slot number (optional)
	 **/
	deleteAll: function(slotNumber){
		var kparams = new Object();
		kparams.slotNumber = slotNumber;
		return new KalturaRequestBuilder("assetpersonalselection", "deleteAll", kparams);
	},
	
	/**
	 * Add or update asset selection in slot.
	 * @param	assetId	int		asset id (optional)
	 * @param	assetType	string		asset type: media/epg (optional, enum: KalturaAssetType)
	 * @param	slotNumber	int		slot number (optional)
	 **/
	upsert: function(assetId, assetType, slotNumber){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.assetType = assetType;
		kparams.slotNumber = slotNumber;
		return new KalturaRequestBuilder("assetpersonalselection", "upsert", kparams);
	}
}

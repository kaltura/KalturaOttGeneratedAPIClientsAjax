
/**
 *Class definition for the Kaltura service: userAssetsListItem.
 **/
var KalturaUserAssetsListItemService = {
	/**
	 * Adds a new item to user’s private asset list.
	 * @param	userAssetsListItem	KalturaUserAssetsListItem		A list item to add (optional)
	 **/
	add: function(userAssetsListItem){
		var kparams = new Object();
		kparams.userAssetsListItem = userAssetsListItem;
		return new KalturaRequestBuilder("userassetslistitem", "add", kparams);
	},
	
	/**
	 * Deletes an item from user’s private asset list.
	 * @param	assetId	string		Asset id to delete (optional)
	 * @param	listType	string		Asset list type to delete from (optional, enum: KalturaUserAssetsListType)
	 **/
	deleteAction: function(assetId, listType){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.listType = listType;
		return new KalturaRequestBuilder("userassetslistitem", "delete", kparams);
	},
	
	/**
	 * Get an item from user’s private asset list.
	 * @param	assetId	string		Asset id to get (optional)
	 * @param	listType	string		Asset list type to get from (optional, enum: KalturaUserAssetsListType)
	 * @param	itemType	string		item type to get (optional, enum: KalturaUserAssetsListItemType)
	 **/
	get: function(assetId, listType, itemType){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.listType = listType;
		kparams.itemType = itemType;
		return new KalturaRequestBuilder("userassetslistitem", "get", kparams);
	}
}

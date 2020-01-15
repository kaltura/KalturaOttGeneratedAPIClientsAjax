
/**
 *Class definition for the Kaltura service: announcement.
 **/
var KalturaAnnouncementService = {
	/**
	 * Add a new future scheduled system announcement push notification.
	 * @param	announcement	KalturaAnnouncement		The announcement to be added.
 *	            timezone parameter should be taken from the 'name of timezone' from: https://msdn.microsoft.com/en-us/library/ms912391(v=winembedded.11).aspx
 *	            Recipients values: All, LoggedIn, Guests (optional)
	 **/
	add: function(announcement){
		var kparams = new Object();
		kparams.announcement = announcement;
		return new KalturaRequestBuilder("announcement", "add", kparams);
	},
	
	/**
	 * Delete an existing announcing. Announcement cannot be delete while being sent..
	 * @param	id	int		Id of the announcement. (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("announcement", "delete", kparams);
	},
	
	/**
	 * Enable system announcements.
	 **/
	enableSystemAnnouncements: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("announcement", "enableSystemAnnouncements", kparams);
	},
	
	/**
	 * Lists all announcements in the system..
	 * @param	filter	KalturaAnnouncementFilter		Filter object (optional)
	 * @param	pager	KalturaFilterPager		Paging the request (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("announcement", "list", kparams);
	},
	
	/**
	 * Update an existing future system announcement push notification. Announcement can only be updated only before sending.
	 * @param	announcementId	int		The announcement identifier (optional)
	 * @param	announcement	KalturaAnnouncement		The announcement to update.
 *	            timezone parameter should be taken from the 'name of timezone' from: https://msdn.microsoft.com/en-us/library/ms912391(v=winembedded.11).aspx
 *	            Recipients values: All, LoggedIn, Guests (optional)
	 **/
	update: function(announcementId, announcement){
		var kparams = new Object();
		kparams.announcementId = announcementId;
		kparams.announcement = announcement;
		return new KalturaRequestBuilder("announcement", "update", kparams);
	},
	
	/**
	 * Update a system announcement status.
	 * @param	id	int		Id of the announcement. (optional)
	 * @param	status	bool		Status to update to. (optional)
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("announcement", "updateStatus", kparams);
	}
}

/**
 *Class definition for the Kaltura service: appToken.
 **/
var KalturaAppTokenService = {
	/**
	 * Add new application authentication token.
	 * @param	appToken	KalturaAppToken		Application token (optional)
	 **/
	add: function(appToken){
		var kparams = new Object();
		kparams.appToken = appToken;
		return new KalturaRequestBuilder("apptoken", "add", kparams);
	},
	
	/**
	 * Delete application authentication token by id.
	 * @param	id	string		Application token identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("apptoken", "delete", kparams);
	},
	
	/**
	 * Get application authentication token by id.
	 * @param	id	string		Application token identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("apptoken", "get", kparams);
	},
	
	/**
	 * Starts a new KS (Kaltura Session) based on application authentication token id.
	 * @param	id	string		application token id (optional)
	 * @param	tokenHash	string		hashed token - current KS concatenated with the application token hashed using the application token ‘hashType’ (optional)
	 * @param	userId	string		session user id, will be ignored if a different user id already defined on the application token (optional, default: null)
	 * @param	expiry	int		session expiry (in seconds), could be overwritten by shorter expiry of the application token and the session-expiry that defined on the application token (optional, default: null)
	 * @param	udid	string		Device UDID (optional, default: null)
	 **/
	startSession: function(id, tokenHash, userId, expiry, udid){
		if(!userId)
			userId = null;
		if(!expiry)
			expiry = null;
		if(!udid)
			udid = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.tokenHash = tokenHash;
		kparams.userId = userId;
		kparams.expiry = expiry;
		kparams.udid = udid;
		return new KalturaRequestBuilder("apptoken", "startSession", kparams);
	}
}

/**
 *Class definition for the Kaltura service: assetComment.
 **/
var KalturaAssetCommentService = {
	/**
	 * Add asset comments by asset id.
	 * @param	comment	KalturaAssetComment		comment (optional)
	 **/
	add: function(comment){
		var kparams = new Object();
		kparams.comment = comment;
		return new KalturaRequestBuilder("assetcomment", "add", kparams);
	},
	
	/**
	 * Returns asset comments by asset id.
	 * @param	filter	KalturaAssetCommentFilter		Filtering the assets comments request (optional)
	 * @param	pager	KalturaFilterPager		Page size and index (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("assetcomment", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: asset.
 **/
var KalturaAssetService = {
	/**
	 * Add a new asset.
 *	            For metas of type bool-&gt; use kalturaBoolValue, type number-&gt; KalturaDoubleValue, type date -&gt; KalturaLongValue, type string -&gt; KalturaStringValue.
	 * @param	asset	KalturaAsset		Asset object (optional)
	 **/
	add: function(asset){
		var kparams = new Object();
		kparams.asset = asset;
		return new KalturaRequestBuilder("asset", "add", kparams);
	},
	
	/**
	 * Add new bulk upload batch job Conversion profile id can be specified in the API..
	 * @param	fileData	HTMLElement		fileData (optional)
	 * @param	bulkUploadJobData	KalturaBulkUploadJobData		bulkUploadJobData (optional)
	 * @param	bulkUploadAssetData	KalturaBulkUploadAssetData		bulkUploadAssetData (optional)
	 **/
	addFromBulkUpload: function(fileData, bulkUploadJobData, bulkUploadAssetData){
		var kparams = new Object();
		var kfiles = new Object();
		kfiles.fileData = fileData;
		kparams.bulkUploadJobData = bulkUploadJobData;
		kparams.bulkUploadAssetData = bulkUploadAssetData;
		return new KalturaRequestBuilder("asset", "addFromBulkUpload", kparams, kfiles);
	},
	
	/**
	 * Returns a group-by result for media or EPG according to given filter. Lists values of each field and their respective count..
	 * @param	filter	KalturaSearchAssetFilter		Filtering the assets request (optional, default: null)
	 **/
	count: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("asset", "count", kparams);
	},
	
	/**
	 * Delete an existing asset.
	 * @param	id	int		Asset Identifier (optional)
	 * @param	assetReferenceType	string		Type of asset (optional, enum: KalturaAssetReferenceType)
	 **/
	deleteAction: function(id, assetReferenceType){
		var kparams = new Object();
		kparams.id = id;
		kparams.assetReferenceType = assetReferenceType;
		return new KalturaRequestBuilder("asset", "delete", kparams);
	},
	
	/**
	 * Returns media or EPG asset by media / EPG internal or external identifier.
	 * @param	id	string		Asset identifier (optional)
	 * @param	assetReferenceType	string		Asset type (optional, enum: KalturaAssetReferenceType)
	 **/
	get: function(id, assetReferenceType){
		var kparams = new Object();
		kparams.id = id;
		kparams.assetReferenceType = assetReferenceType;
		return new KalturaRequestBuilder("asset", "get", kparams);
	},
	
	/**
	 * Returns the data for ads control.
	 * @param	assetId	string		Asset identifier (optional)
	 * @param	assetType	string		Asset type (optional, enum: KalturaAssetType)
	 * @param	contextDataParams	KalturaPlaybackContextOptions		Parameters for the request (optional)
	 **/
	getAdsContext: function(assetId, assetType, contextDataParams){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.assetType = assetType;
		kparams.contextDataParams = contextDataParams;
		return new KalturaRequestBuilder("asset", "getAdsContext", kparams);
	},
	
	/**
	 * This action delivers all data relevant for player.
	 * @param	assetId	string		Asset identifier (optional)
	 * @param	assetType	string		Asset type (optional, enum: KalturaAssetType)
	 * @param	contextDataParams	KalturaPlaybackContextOptions		Parameters for the request (optional)
	 **/
	getPlaybackContext: function(assetId, assetType, contextDataParams){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.assetType = assetType;
		kparams.contextDataParams = contextDataParams;
		return new KalturaRequestBuilder("asset", "getPlaybackContext", kparams);
	},
	
	/**
	 * Returns media or EPG assets. Filters by media identifiers or by EPG internal or external identifier..
	 * @param	filter	KalturaAssetFilter		Filtering the assets request (optional, default: null)
	 * @param	pager	KalturaFilterPager		Paging the request (optional, default: null)
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
		return new KalturaRequestBuilder("asset", "list", kparams);
	},
	
	/**
	 * remove metas and tags from asset.
	 * @param	id	int		Asset Identifier (optional)
	 * @param	assetReferenceType	string		Type of asset (optional, enum: KalturaAssetReferenceType)
	 * @param	idIn	string		comma separated ids of metas and tags (optional)
	 **/
	removeMetasAndTags: function(id, assetReferenceType, idIn){
		var kparams = new Object();
		kparams.id = id;
		kparams.assetReferenceType = assetReferenceType;
		kparams.idIn = idIn;
		return new KalturaRequestBuilder("asset", "removeMetasAndTags", kparams);
	},
	
	/**
	 * update an existing asset.
 *	            For metas of type bool-&gt; use kalturaBoolValue, type number-&gt; KalturaDoubleValue, type date -&gt; KalturaLongValue, type string -&gt; KalturaStringValue.
	 * @param	id	int		Asset Identifier (optional)
	 * @param	asset	KalturaAsset		Asset object (optional)
	 **/
	update: function(id, asset){
		var kparams = new Object();
		kparams.id = id;
		kparams.asset = asset;
		return new KalturaRequestBuilder("asset", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: assetFile.
 **/
var KalturaAssetFileService = {
	/**
	 * get KalturaAssetFileContext.
	 * @param	id	string		Asset file identifier (optional)
	 * @param	contextType	string		Kaltura Context Type (none = 0, recording = 1) (optional, enum: KalturaContextType)
	 **/
	getContext: function(id, contextType){
		var kparams = new Object();
		kparams.id = id;
		kparams.contextType = contextType;
		return new KalturaRequestBuilder("assetfile", "getContext", kparams);
	},
	
	/**
	 * Redirects to play manifest.
	 * @param	partnerId	int		Partner identifier (optional)
	 * @param	assetId	string		Asset identifier (optional)
	 * @param	assetType	string		Asset type (optional, enum: KalturaAssetType)
	 * @param	assetFileId	int		Asset file identifier (optional)
	 * @param	contextType	string		Playback context type (optional, enum: KalturaPlaybackContextType)
	 * @param	ks	string		Kaltura session for the user, not mandatory for anonymous user (optional, default: null)
	 * @param	tokenizedUrl	string		Tokenized Url, not mandatory (optional, default: null)
	 **/
	playManifest: function(partnerId, assetId, assetType, assetFileId, contextType, ks, tokenizedUrl){
		if(!ks)
			ks = null;
		if(!tokenizedUrl)
			tokenizedUrl = null;
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.assetId = assetId;
		kparams.assetType = assetType;
		kparams.assetFileId = assetFileId;
		kparams.contextType = contextType;
		kparams.ks = ks;
		kparams.tokenizedUrl = tokenizedUrl;
		return new KalturaRequestBuilder("assetfile", "playManifest", kparams);
	}
}

/**
 *Class definition for the Kaltura service: assetFilePpv.
 **/
var KalturaAssetFilePpvService = {
	/**
	 * Add asset file ppv.
	 * @param	assetFilePpv	KalturaAssetFilePpv		asset file ppv (optional)
	 **/
	add: function(assetFilePpv){
		var kparams = new Object();
		kparams.assetFilePpv = assetFilePpv;
		return new KalturaRequestBuilder("assetfileppv", "add", kparams);
	},
	
	/**
	 * Delete asset file ppv.
	 * @param	assetFileId	int		Asset file id (optional)
	 * @param	ppvModuleId	int		Ppv module id (optional)
	 **/
	deleteAction: function(assetFileId, ppvModuleId){
		var kparams = new Object();
		kparams.assetFileId = assetFileId;
		kparams.ppvModuleId = ppvModuleId;
		return new KalturaRequestBuilder("assetfileppv", "delete", kparams);
	},
	
	/**
	 * Return a list of asset files ppvs for the account with optional filter.
	 * @param	filter	KalturaAssetFilePpvFilter		Filter parameters for filtering out the result (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("assetfileppv", "list", kparams);
	},
	
	/**
	 * Update assetFilePpv.
	 * @param	assetFileId	int		Asset file id (optional)
	 * @param	ppvModuleId	int		Ppv module id (optional)
	 * @param	assetFilePpv	KalturaAssetFilePpv		assetFilePpv (optional)
	 **/
	update: function(assetFileId, ppvModuleId, assetFilePpv){
		var kparams = new Object();
		kparams.assetFileId = assetFileId;
		kparams.ppvModuleId = ppvModuleId;
		kparams.assetFilePpv = assetFilePpv;
		return new KalturaRequestBuilder("assetfileppv", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: assetHistory.
 **/
var KalturaAssetHistoryService = {
	/**
	 * Clean the user’s viewing history.
	 * @param	filter	KalturaAssetHistoryFilter		List of assets identifier (optional, default: null)
	 **/
	clean: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("assethistory", "clean", kparams);
	},
	
	/**
	 * Get recently watched media for user, ordered by recently watched first..
	 * @param	filter	KalturaAssetHistoryFilter		Filter parameters for filtering out the result (optional, default: null)
	 * @param	pager	KalturaFilterPager		Page size and index. Number of assets to return per page. Possible range 5 ≤ size ≥ 50. If omitted - will be set to 25. If a value > 50 provided – will set to 50 (optional, default: null)
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
		return new KalturaRequestBuilder("assethistory", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: assetRule.
 **/
var KalturaAssetRuleService = {
	/**
	 * Add asset rule.
	 * @param	assetRule	KalturaAssetRule		Asset rule (optional)
	 **/
	add: function(assetRule){
		var kparams = new Object();
		kparams.assetRule = assetRule;
		return new KalturaRequestBuilder("assetrule", "add", kparams);
	},
	
	/**
	 * Delete asset rule.
	 * @param	id	int		Asset rule ID (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("assetrule", "delete", kparams);
	},
	
	/**
	 * Get the list of asset rules for the partner.
	 * @param	filter	KalturaAssetRuleFilter		filter by condition name (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("assetrule", "list", kparams);
	},
	
	/**
	 * Update asset rule.
	 * @param	id	int		Asset rule ID to update (optional)
	 * @param	assetRule	KalturaAssetRule		Asset rule (optional)
	 **/
	update: function(id, assetRule){
		var kparams = new Object();
		kparams.id = id;
		kparams.assetRule = assetRule;
		return new KalturaRequestBuilder("assetrule", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: assetStatistics.
 **/
var KalturaAssetStatisticsService = {
	/**
	 * Returns statistics for given list of assets by type and / or time period.
	 * @param	query	KalturaAssetStatisticsQuery		Query for assets statistics (optional)
	 **/
	query: function(query){
		var kparams = new Object();
		kparams.query = query;
		return new KalturaRequestBuilder("assetstatistics", "query", kparams);
	}
}

/**
 *Class definition for the Kaltura service: assetStruct.
 **/
var KalturaAssetStructService = {
	/**
	 * Add a new assetStruct.
	 * @param	assetStruct	KalturaAssetStruct		AssetStruct Object (optional)
	 **/
	add: function(assetStruct){
		var kparams = new Object();
		kparams.assetStruct = assetStruct;
		return new KalturaRequestBuilder("assetstruct", "add", kparams);
	},
	
	/**
	 * Delete an existing assetStruct.
	 * @param	id	int		AssetStruct Identifier, id = 0 is identified as program AssetStruct (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("assetstruct", "delete", kparams);
	},
	
	/**
	 * Get AssetStruct by ID.
	 * @param	id	int		ID to get (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("assetstruct", "get", kparams);
	},
	
	/**
	 * Return a list of asset structs for the account with optional filter.
	 * @param	filter	KalturaAssetStructFilter		Filter parameters for filtering out the result (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("assetstruct", "list", kparams);
	},
	
	/**
	 * Update an existing assetStruct.
	 * @param	id	int		AssetStruct Identifier, id = 0 is identified as program AssetStruct (optional)
	 * @param	assetStruct	KalturaAssetStruct		AssetStruct Object (optional)
	 **/
	update: function(id, assetStruct){
		var kparams = new Object();
		kparams.id = id;
		kparams.assetStruct = assetStruct;
		return new KalturaRequestBuilder("assetstruct", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: assetStructMeta.
 **/
var KalturaAssetStructMetaService = {
	/**
	 * Return a list of asset struct metas for the account with optional filter.
	 * @param	filter	KalturaAssetStructMetaFilter		Filter parameters for filtering out the result (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("assetstructmeta", "list", kparams);
	},
	
	/**
	 * Update Asset struct meta.
	 * @param	assetStructId	int		AssetStruct Identifier (optional)
	 * @param	metaId	int		Meta Identifier (optional)
	 * @param	assetStructMeta	KalturaAssetStructMeta		AssetStructMeta Object (optional)
	 **/
	update: function(assetStructId, metaId, assetStructMeta){
		var kparams = new Object();
		kparams.assetStructId = assetStructId;
		kparams.metaId = metaId;
		kparams.assetStructMeta = assetStructMeta;
		return new KalturaRequestBuilder("assetstructmeta", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: assetUserRule.
 **/
var KalturaAssetUserRuleService = {
	/**
	 * Add asset user rule.
	 * @param	assetUserRule	KalturaAssetUserRule		Asset user rule (optional)
	 **/
	add: function(assetUserRule){
		var kparams = new Object();
		kparams.assetUserRule = assetUserRule;
		return new KalturaRequestBuilder("assetuserrule", "add", kparams);
	},
	
	/**
	 * Attach AssetUserRule To User.
	 * @param	ruleId	int		AssetUserRule id to add (optional)
	 **/
	attachUser: function(ruleId){
		var kparams = new Object();
		kparams.ruleId = ruleId;
		return new KalturaRequestBuilder("assetuserrule", "attachUser", kparams);
	},
	
	/**
	 * Delete asset user rule.
	 * @param	id	int		Asset user rule ID (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("assetuserrule", "delete", kparams);
	},
	
	/**
	 * Detach AssetUserRule from user.
	 * @param	ruleId	int		AssetUserRule id to remove (optional)
	 **/
	detachUser: function(ruleId){
		var kparams = new Object();
		kparams.ruleId = ruleId;
		return new KalturaRequestBuilder("assetuserrule", "detachUser", kparams);
	},
	
	/**
	 * Get the list of asset user rules for the partner.
	 * @param	filter	KalturaAssetUserRuleFilter		AssetUserRule Filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("assetuserrule", "list", kparams);
	},
	
	/**
	 * Update asset user rule.
	 * @param	id	int		Asset user rule ID to update (optional)
	 * @param	assetUserRule	KalturaAssetUserRule		Asset user rule (optional)
	 **/
	update: function(id, assetUserRule){
		var kparams = new Object();
		kparams.id = id;
		kparams.assetUserRule = assetUserRule;
		return new KalturaRequestBuilder("assetuserrule", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: bookmark.
 **/
var KalturaBookmarkService = {
	/**
	 * Report player position and action for the user on the watched asset. Player position is used to later allow resume watching..
	 * @param	bookmark	KalturaBookmark		Bookmark details (optional)
	 **/
	add: function(bookmark){
		var kparams = new Object();
		kparams.bookmark = bookmark;
		return new KalturaRequestBuilder("bookmark", "add", kparams);
	},
	
	/**
	 * Returns player position record/s for the requested asset and the requesting user. 
 *	            If default user makes the request – player position records are provided for all of the users in the household.
 *	            If non-default user makes the request - player position records are provided for the requesting user and the default user of the household..
	 * @param	filter	KalturaBookmarkFilter		Filter option for the last position (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("bookmark", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: bulkUpload.
 **/
var KalturaBulkUploadService = {
	/**
	 * Get BulkUpload by ID.
	 * @param	id	int		ID to get (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("bulkupload", "get", kparams);
	},
	
	/**
	 * Get list of KalturaBulkUpload by filter.
	 * @param	filter	KalturaBulkUploadFilter		Filtering the bulk action request (optional)
	 * @param	pager	KalturaFilterPager		Paging the request (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("bulkupload", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: businessModuleRule.
 **/
var KalturaBusinessModuleRuleService = {
	/**
	 * Add business module rule.
	 * @param	businessModuleRule	KalturaBusinessModuleRule		Business module rule (optional)
	 **/
	add: function(businessModuleRule){
		var kparams = new Object();
		kparams.businessModuleRule = businessModuleRule;
		return new KalturaRequestBuilder("businessmodulerule", "add", kparams);
	},
	
	/**
	 * Delete business module rule.
	 * @param	id	int		Business module rule ID (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("businessmodulerule", "delete", kparams);
	},
	
	/**
	 * Get business module rule by ID.
	 * @param	id	int		ID to get (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("businessmodulerule", "get", kparams);
	},
	
	/**
	 * Get the list of business module rules for the partner.
	 * @param	filter	KalturaBusinessModuleRuleFilter		filter by condition name (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("businessmodulerule", "list", kparams);
	},
	
	/**
	 * Update business module rule.
	 * @param	id	int		Business module rule ID to update (optional)
	 * @param	businessModuleRule	KalturaBusinessModuleRule		Business module rule (optional)
	 **/
	update: function(id, businessModuleRule){
		var kparams = new Object();
		kparams.id = id;
		kparams.businessModuleRule = businessModuleRule;
		return new KalturaRequestBuilder("businessmodulerule", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: cdnAdapterProfile.
 **/
var KalturaCdnAdapterProfileService = {
	/**
	 * Insert new CDN adapter for partner.
	 * @param	adapter	KalturaCDNAdapterProfile		CDN adapter object (optional)
	 **/
	add: function(adapter){
		var kparams = new Object();
		kparams.adapter = adapter;
		return new KalturaRequestBuilder("cdnadapterprofile", "add", kparams);
	},
	
	/**
	 * Delete CDN adapter by CDN adapter id.
	 * @param	adapterId	int		CDN adapter identifier (optional)
	 **/
	deleteAction: function(adapterId){
		var kparams = new Object();
		kparams.adapterId = adapterId;
		return new KalturaRequestBuilder("cdnadapterprofile", "delete", kparams);
	},
	
	/**
	 * Generate CDN adapter shared secret.
	 * @param	adapterId	int		CDN adapter identifier (optional)
	 **/
	generateSharedSecret: function(adapterId){
		var kparams = new Object();
		kparams.adapterId = adapterId;
		return new KalturaRequestBuilder("cdnadapterprofile", "generateSharedSecret", kparams);
	},
	
	/**
	 * Returns all CDN adapters for partner.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("cdnadapterprofile", "list", kparams);
	},
	
	/**
	 * Update CDN adapter details.
	 * @param	adapterId	int		CDN adapter id to update (optional)
	 * @param	adapter	KalturaCDNAdapterProfile		CDN adapter Object (optional)
	 **/
	update: function(adapterId, adapter){
		var kparams = new Object();
		kparams.adapterId = adapterId;
		kparams.adapter = adapter;
		return new KalturaRequestBuilder("cdnadapterprofile", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: cdnPartnerSettings.
 **/
var KalturaCdnPartnerSettingsService = {
	/**
	 * Retrieve the partner’s CDN settings (default adapters).
	 **/
	get: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("cdnpartnersettings", "get", kparams);
	},
	
	/**
	 * Configure the partner’s CDN settings (default adapters).
	 * @param	settings	KalturaCDNPartnerSettings		CDN partner settings (optional)
	 **/
	update: function(settings){
		var kparams = new Object();
		kparams.settings = settings;
		return new KalturaRequestBuilder("cdnpartnersettings", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: cDVRAdapterProfile.
 **/
var KalturaCDVRAdapterProfileService = {
	/**
	 * Insert new C-DVR adapter for partner.
	 * @param	adapter	KalturaCDVRAdapterProfile		C-DVR adapter object (optional)
	 **/
	add: function(adapter){
		var kparams = new Object();
		kparams.adapter = adapter;
		return new KalturaRequestBuilder("cdvradapterprofile", "add", kparams);
	},
	
	/**
	 * Delete C-DVR adapter by C-DVR adapter id.
	 * @param	adapterId	int		C-DVR adapter identifier (optional)
	 **/
	deleteAction: function(adapterId){
		var kparams = new Object();
		kparams.adapterId = adapterId;
		return new KalturaRequestBuilder("cdvradapterprofile", "delete", kparams);
	},
	
	/**
	 * Generate C-DVR adapter shared secret.
	 * @param	adapterId	int		C-DVR adapter identifier (optional)
	 **/
	generateSharedSecret: function(adapterId){
		var kparams = new Object();
		kparams.adapterId = adapterId;
		return new KalturaRequestBuilder("cdvradapterprofile", "generateSharedSecret", kparams);
	},
	
	/**
	 * Returns all C-DVR adapters for partner.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("cdvradapterprofile", "list", kparams);
	},
	
	/**
	 * Update C-DVR adapter details.
	 * @param	adapterId	int		C-DVR adapter identifier (optional)
	 * @param	adapter	KalturaCDVRAdapterProfile		C-DVR adapter Object (optional)
	 **/
	update: function(adapterId, adapter){
		var kparams = new Object();
		kparams.adapterId = adapterId;
		kparams.adapter = adapter;
		return new KalturaRequestBuilder("cdvradapterprofile", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: channel.
 **/
var KalturaChannelService = {
	/**
	 * Insert new channel for partner. Supports KalturaDynamicChannel or KalturaManualChannel.
	 * @param	channel	KalturaChannel		KSQL channel Object (optional)
	 **/
	add: function(channel){
		var kparams = new Object();
		kparams.channel = channel;
		return new KalturaRequestBuilder("channel", "add", kparams);
	},
	
	/**
	 * Delete channel by its channel id.
	 * @param	channelId	int		channel identifier (optional)
	 **/
	deleteAction: function(channelId){
		var kparams = new Object();
		kparams.channelId = channelId;
		return new KalturaRequestBuilder("channel", "delete", kparams);
	},
	
	/**
	 * Returns channel.
	 * @param	id	int		Channel Identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("channel", "get", kparams);
	},
	
	/**
	 * Get the list of tags for the partner.
	 * @param	filter	KalturaChannelsFilter		Filter (optional, default: null)
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
		return new KalturaRequestBuilder("channel", "list", kparams);
	},
	
	/**
	 * Update channel details. Supports KalturaDynamicChannel or KalturaManualChannel.
	 * @param	id	int		Channel identifier (optional)
	 * @param	channel	KalturaChannel		KSQL channel Object (optional)
	 **/
	update: function(id, channel){
		var kparams = new Object();
		kparams.id = id;
		kparams.channel = channel;
		return new KalturaRequestBuilder("channel", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: collection.
 **/
var KalturaCollectionService = {
	/**
	 * Returns a list of subscriptions requested by Subscription ID or file ID.
	 * @param	filter	KalturaCollectionFilter		Filter request (optional, default: null)
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
		return new KalturaRequestBuilder("collection", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: compensation.
 **/
var KalturaCompensationService = {
	/**
	 * Adds a new compensation for a household for a given number of iterations of a subscription renewal for a fixed amount / percentage of the renewal price..
	 * @param	compensation	KalturaCompensation		Compensation parameters (optional)
	 **/
	add: function(compensation){
		var kparams = new Object();
		kparams.compensation = compensation;
		return new KalturaRequestBuilder("compensation", "add", kparams);
	},
	
	/**
	 * Delete a compensation by identifier.
	 * @param	id	int		Compensation identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("compensation", "delete", kparams);
	},
	
	/**
	 * Get a compensation by identifier.
	 * @param	id	int		Compensation identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("compensation", "get", kparams);
	}
}

/**
 *Class definition for the Kaltura service: configurationGroup.
 **/
var KalturaConfigurationGroupService = {
	/**
	 * Add a new configuration group.
	 * @param	configurationGroup	KalturaConfigurationGroup		Configuration group (optional)
	 **/
	add: function(configurationGroup){
		var kparams = new Object();
		kparams.configurationGroup = configurationGroup;
		return new KalturaRequestBuilder("configurationgroup", "add", kparams);
	},
	
	/**
	 * Remove a configuration group, including its tags, device configurations and devices associations.
	 * @param	id	string		Configuration group identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("configurationgroup", "delete", kparams);
	},
	
	/**
	 * Return the configuration group details, including group identifiers, tags, and number of associated devices, and list of device configuration.
	 * @param	id	string		Configuration group identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("configurationgroup", "get", kparams);
	},
	
	/**
	 * Return the list of configuration groups.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("configurationgroup", "list", kparams);
	},
	
	/**
	 * Update configuration group name.
	 * @param	id	string		Configuration group identifier (optional)
	 * @param	configurationGroup	KalturaConfigurationGroup		Configuration group (optional)
	 **/
	update: function(id, configurationGroup){
		var kparams = new Object();
		kparams.id = id;
		kparams.configurationGroup = configurationGroup;
		return new KalturaRequestBuilder("configurationgroup", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: configurationGroupDevice.
 **/
var KalturaConfigurationGroupDeviceService = {
	/**
	 * Associate a collection of devices to a configuration group. If a device is already associated to another group – old association is replaced.
	 * @param	configurationGroupDevice	KalturaConfigurationGroupDevice		Configuration group device (optional)
	 **/
	add: function(configurationGroupDevice){
		var kparams = new Object();
		kparams.configurationGroupDevice = configurationGroupDevice;
		return new KalturaRequestBuilder("configurationgroupdevice", "add", kparams);
	},
	
	/**
	 * Remove a device association.
	 * @param	udid	string		Device UDID (optional)
	 **/
	deleteAction: function(udid){
		var kparams = new Object();
		kparams.udid = udid;
		return new KalturaRequestBuilder("configurationgroupdevice", "delete", kparams);
	},
	
	/**
	 * Return the configuration group to which a specific device is associated to.
	 * @param	udid	string		Device UDID (optional)
	 **/
	get: function(udid){
		var kparams = new Object();
		kparams.udid = udid;
		return new KalturaRequestBuilder("configurationgroupdevice", "get", kparams);
	},
	
	/**
	 * Return the list of associated devices for a given configuration group.
	 * @param	filter	KalturaConfigurationGroupDeviceFilter		Filter option for configuration group identifier (optional)
	 * @param	pager	KalturaFilterPager		Page size and index (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("configurationgroupdevice", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: configurationGroupTag.
 **/
var KalturaConfigurationGroupTagService = {
	/**
	 * Add a new tag to a configuration group. If this tag is already associated to another group, request fails.
	 * @param	configurationGroupTag	KalturaConfigurationGroupTag		Configuration group tag (optional)
	 **/
	add: function(configurationGroupTag){
		var kparams = new Object();
		kparams.configurationGroupTag = configurationGroupTag;
		return new KalturaRequestBuilder("configurationgrouptag", "add", kparams);
	},
	
	/**
	 * Remove a tag association from configuration group.
	 * @param	tag	string		Tag (optional)
	 **/
	deleteAction: function(tag){
		var kparams = new Object();
		kparams.tag = tag;
		return new KalturaRequestBuilder("configurationgrouptag", "delete", kparams);
	},
	
	/**
	 * Return the configuration group the tag is associated to.
	 * @param	tag	string		Tag (optional)
	 **/
	get: function(tag){
		var kparams = new Object();
		kparams.tag = tag;
		return new KalturaRequestBuilder("configurationgrouptag", "get", kparams);
	},
	
	/**
	 * Return list of tags for a configuration group.
	 * @param	filter	KalturaConfigurationGroupTagFilter		Filter option for configuration group identifier (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("configurationgrouptag", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: configurations.
 **/
var KalturaConfigurationsService = {
	/**
	 * Add a new device configuration to a configuration group.
	 * @param	configurations	KalturaConfigurations		Device configuration (optional)
	 **/
	add: function(configurations){
		var kparams = new Object();
		kparams.configurations = configurations;
		return new KalturaRequestBuilder("configurations", "add", kparams);
	},
	
	/**
	 * Delete a device configuration.
	 * @param	id	string		Configuration identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("configurations", "delete", kparams);
	},
	
	/**
	 * Return the device configuration.
	 * @param	id	string		Configuration identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("configurations", "get", kparams);
	},
	
	/**
	 * Return a list of device configurations of a configuration group.
	 * @param	filter	KalturaConfigurationsFilter		Filter option for configuration group id. (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("configurations", "list", kparams);
	},
	
	/**
	 * Update device configuration.
	 * @param	id	string		Configuration identifier (optional)
	 * @param	configurations	KalturaConfigurations		configuration to update (optional)
	 **/
	update: function(id, configurations){
		var kparams = new Object();
		kparams.id = id;
		kparams.configurations = configurations;
		return new KalturaRequestBuilder("configurations", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: country.
 **/
var KalturaCountryService = {
	/**
	 * Get the list of countries for the partner with option to filter by countries identifiers.
	 * @param	filter	KalturaCountryFilter		Country filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("country", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: coupon.
 **/
var KalturaCouponService = {
	/**
	 * Returns information about a coupon.
	 * @param	code	string		Coupon code (optional)
	 **/
	get: function(code){
		var kparams = new Object();
		kparams.code = code;
		return new KalturaRequestBuilder("coupon", "get", kparams);
	},
	
	/**
	 * Lists coupon codes..
	 * @param	filter	KalturaCouponFilter		Filter options (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("coupon", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: couponsGroup.
 **/
var KalturaCouponsGroupService = {
	/**
	 * Add coupons group.
	 * @param	couponsGroup	KalturaCouponsGroup		Coupons group (optional)
	 **/
	add: function(couponsGroup){
		var kparams = new Object();
		kparams.couponsGroup = couponsGroup;
		return new KalturaRequestBuilder("couponsgroup", "add", kparams);
	},
	
	/**
	 * Delete a coupons group.
	 * @param	id	int		Coupons group identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("couponsgroup", "delete", kparams);
	},
	
	/**
	 * Generate a coupon.
	 * @param	id	int		Coupon group identifier (optional)
	 * @param	couponGenerationOptions	KalturaCouponGenerationOptions		Coupon generation options (optional)
	 **/
	generate: function(id, couponGenerationOptions){
		var kparams = new Object();
		kparams.id = id;
		kparams.couponGenerationOptions = couponGenerationOptions;
		return new KalturaRequestBuilder("couponsgroup", "generate", kparams);
	},
	
	/**
	 * Returns information about coupons group.
	 * @param	id	int		Coupons group ID (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("couponsgroup", "get", kparams);
	},
	
	/**
	 * Returns information about partner coupons groups.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("couponsgroup", "list", kparams);
	},
	
	/**
	 * Update coupons group.
	 * @param	id	int		Coupons group identifier (optional)
	 * @param	couponsGroup	KalturaCouponsGroup		Coupons group (optional)
	 **/
	update: function(id, couponsGroup){
		var kparams = new Object();
		kparams.id = id;
		kparams.couponsGroup = couponsGroup;
		return new KalturaRequestBuilder("couponsgroup", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: currency.
 **/
var KalturaCurrencyService = {
	/**
	 * Get the list of currencies for the partner with option to filter by currency codes.
	 * @param	filter	KalturaCurrencyFilter		currency filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("currency", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: deviceBrand.
 **/
var KalturaDeviceBrandService = {
	/**
	 * Return a list of the available device brands..
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("devicebrand", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: deviceFamily.
 **/
var KalturaDeviceFamilyService = {
	/**
	 * Return a list of the available device families..
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("devicefamily", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: discountDetails.
 **/
var KalturaDiscountDetailsService = {
	/**
	 * Returns the list of available discounts details, can be filtered by discount codes.
	 * @param	filter	KalturaDiscountDetailsFilter		Filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("discountdetails", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: drmProfile.
 **/
var KalturaDrmProfileService = {
	/**
	 * Returns all DRM adapters for partner.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("drmprofile", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: email.
 **/
var KalturaEmailService = {
	/**
	 * Sends email notification.
	 * @param	emailMessage	KalturaEmailMessage		email details (optional)
	 **/
	send: function(emailMessage){
		var kparams = new Object();
		kparams.emailMessage = emailMessage;
		return new KalturaRequestBuilder("email", "send", kparams);
	}
}

/**
 *Class definition for the Kaltura service: engagementAdapter.
 **/
var KalturaEngagementAdapterService = {
	/**
	 * Insert new Engagement adapter for partner.
	 * @param	engagementAdapter	KalturaEngagementAdapter		Engagement adapter Object (optional)
	 **/
	add: function(engagementAdapter){
		var kparams = new Object();
		kparams.engagementAdapter = engagementAdapter;
		return new KalturaRequestBuilder("engagementadapter", "add", kparams);
	},
	
	/**
	 * Delete Engagement adapter by Engagement adapter id.
	 * @param	id	int		Engagement adapter identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("engagementadapter", "delete", kparams);
	},
	
	/**
	 * Generate engagement adapter shared secret.
	 * @param	id	int		Engagement adapter identifier (optional)
	 **/
	generateSharedSecret: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("engagementadapter", "generateSharedSecret", kparams);
	},
	
	/**
	 * Returns all Engagement adapters for partner : id + name.
	 * @param	id	int		Engagement adapter identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("engagementadapter", "get", kparams);
	},
	
	/**
	 * Returns all Engagement adapters for partner : id + name.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("engagementadapter", "list", kparams);
	},
	
	/**
	 * Update Engagement adapter details.
	 * @param	id	int		Engagement adapter identifier (optional)
	 * @param	engagementAdapter	KalturaEngagementAdapter		Engagement adapter Object (optional)
	 **/
	update: function(id, engagementAdapter){
		var kparams = new Object();
		kparams.id = id;
		kparams.engagementAdapter = engagementAdapter;
		return new KalturaRequestBuilder("engagementadapter", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: engagement.
 **/
var KalturaEngagementService = {
	/**
	 * Insert new Engagement for partner.
	 * @param	engagement	KalturaEngagement		Engagement adapter Object (optional)
	 **/
	add: function(engagement){
		var kparams = new Object();
		kparams.engagement = engagement;
		return new KalturaRequestBuilder("engagement", "add", kparams);
	},
	
	/**
	 * Delete engagement by engagement adapter id.
	 * @param	id	int		Engagement identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("engagement", "delete", kparams);
	},
	
	/**
	 * Return engagement.
	 * @param	id	int		Engagement identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("engagement", "get", kparams);
	},
	
	/**
	 * Returns all Engagement for partner.
	 * @param	filter	KalturaEngagementFilter		filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("engagement", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: entitlement.
 **/
var KalturaEntitlementService = {
	/**
	 * Apply new coupon for existing subscription.
	 * @param	purchaseId	int		purchase Id (optional)
	 * @param	couponCode	string		coupon Code (optional)
	 **/
	applyCoupon: function(purchaseId, couponCode){
		var kparams = new Object();
		kparams.purchaseId = purchaseId;
		kparams.couponCode = couponCode;
		return new KalturaRequestBuilder("entitlement", "applyCoupon", kparams);
	},
	
	/**
	 * Immediately cancel a subscription, PPV or collection. Cancel is possible only if within cancellation window and content not already consumed.
	 * @param	assetId	int		The mediaFileID to cancel (optional)
	 * @param	productType	string		The product type for the cancelation (optional, enum: KalturaTransactionType)
	 **/
	cancel: function(assetId, productType){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.productType = productType;
		return new KalturaRequestBuilder("entitlement", "cancel", kparams);
	},
	
	/**
	 * Cancel a household service subscription at the next renewal. The subscription stays valid till the next renewal..
	 * @param	subscriptionId	string		Subscription Code (optional)
	 **/
	cancelRenewal: function(subscriptionId){
		var kparams = new Object();
		kparams.subscriptionId = subscriptionId;
		return new KalturaRequestBuilder("entitlement", "cancelRenewal", kparams);
	},
	
	/**
	 * Cancel Scheduled Subscription.
	 * @param	scheduledSubscriptionId	int		Scheduled Subscription Identifier (optional)
	 **/
	cancelScheduledSubscription: function(scheduledSubscriptionId){
		var kparams = new Object();
		kparams.scheduledSubscriptionId = scheduledSubscriptionId;
		return new KalturaRequestBuilder("entitlement", "cancelScheduledSubscription", kparams);
	},
	
	/**
	 * Reconcile the user household&#39;s entitlements with an external entitlements source. This request is frequency protected to avoid too frequent calls per household..
	 **/
	externalReconcile: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("entitlement", "externalReconcile", kparams);
	},
	
	/**
	 * Immediately cancel a subscription, PPV or collection. Cancel applies regardless of cancellation window and content consumption status.
	 * @param	assetId	int		The mediaFileID to cancel (optional)
	 * @param	productType	string		The product type for the cancelation (optional, enum: KalturaTransactionType)
	 **/
	forceCancel: function(assetId, productType){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.productType = productType;
		return new KalturaRequestBuilder("entitlement", "forceCancel", kparams);
	},
	
	/**
	 * Returns the data about the next renewal.
	 * @param	id	int		Purchase Id (optional)
	 **/
	getNextRenewal: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("entitlement", "getNextRenewal", kparams);
	},
	
	/**
	 * Grant household for an entitlement for a PPV or Subscription..
	 * @param	productId	int		Identifier for the product package from which this content is offered (optional)
	 * @param	productType	string		Product package type. Possible values: PPV, Subscription, Collection (optional, enum: KalturaTransactionType)
	 * @param	history	bool		Controls if the new entitlements grant will appear in the user’s history. True – will add a history entry. False (or if ommited) – no history entry will be added (optional)
	 * @param	contentId	int		Identifier for the content. Relevant only if Product type = PPV (optional)
	 **/
	grant: function(productId, productType, history, contentId){
		if(!contentId)
			contentId = 0;
		var kparams = new Object();
		kparams.productId = productId;
		kparams.productType = productType;
		kparams.history = history;
		kparams.contentId = contentId;
		return new KalturaRequestBuilder("entitlement", "grant", kparams);
	},
	
	/**
	 * Gets all the entitled media items for a household.
	 * @param	filter	KalturaEntitlementFilter		Request filter (optional)
	 * @param	pager	KalturaFilterPager		Request pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("entitlement", "list", kparams);
	},
	
	/**
	 * Swap current entitlement (subscription) with new entitlement (subscription) - only Grant.
	 * @param	currentProductId	int		Identifier for the current product package (optional)
	 * @param	newProductId	int		Identifier for the new product package (optional)
	 * @param	history	bool		Controls if the new entitlements swap will appear in the user’s history. True – will add a history entry. False (or if ommited) – no history entry will be added (optional)
	 **/
	swap: function(currentProductId, newProductId, history){
		var kparams = new Object();
		kparams.currentProductId = currentProductId;
		kparams.newProductId = newProductId;
		kparams.history = history;
		return new KalturaRequestBuilder("entitlement", "swap", kparams);
	},
	
	/**
	 * Update Kaltura Entitelment by Purchase id.
	 * @param	id	int		Purchase Id (optional)
	 * @param	entitlement	KalturaEntitlement		KalturaEntitlement object (optional)
	 **/
	update: function(id, entitlement){
		var kparams = new Object();
		kparams.id = id;
		kparams.entitlement = entitlement;
		return new KalturaRequestBuilder("entitlement", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: eventNotification.
 **/
var KalturaEventNotificationService = {
	/**
	 * eventNotification update.
	 * @param	id	string		Object ID to update (optional)
	 * @param	objectToUpdate	KalturaEventNotification		eventNotification details (optional)
	 **/
	update: function(id, objectToUpdate){
		var kparams = new Object();
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new KalturaRequestBuilder("eventnotification", "update", kparams);
	},
	
	/**
	 * Gets all EventNotification items for a given Object id and type.
	 * @param	filter	KalturaEventNotificationFilter		Request filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("eventnotification", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: exportTask.
 **/
var KalturaExportTaskService = {
	/**
	 * Adds a new bulk export task.
	 * @param	task	KalturaExportTask		The task model to add (optional)
	 **/
	add: function(task){
		var kparams = new Object();
		kparams.task = task;
		return new KalturaRequestBuilder("exporttask", "add", kparams);
	},
	
	/**
	 * Deletes an existing bulk export task by task identifier.
	 * @param	id	int		The identifier of the task to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("exporttask", "delete", kparams);
	},
	
	/**
	 * Gets an existing bulk export task by task identifier.
	 * @param	id	int		The identifier of the task to get (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("exporttask", "get", kparams);
	},
	
	/**
	 * Returns bulk export tasks by tasks identifiers.
	 * @param	filter	KalturaExportTaskFilter		Bulk export tasks filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("exporttask", "list", kparams);
	},
	
	/**
	 * Updates an existing bulk export task by task identifier.
	 * @param	id	int		The task id to update (optional)
	 * @param	task	KalturaExportTask		The task model to update (optional)
	 **/
	update: function(id, task){
		var kparams = new Object();
		kparams.id = id;
		kparams.task = task;
		return new KalturaRequestBuilder("exporttask", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: externalChannelProfile.
 **/
var KalturaExternalChannelProfileService = {
	/**
	 * Insert new External channel for partner.
	 * @param	externalChannel	KalturaExternalChannelProfile		External channel Object (optional)
	 **/
	add: function(externalChannel){
		var kparams = new Object();
		kparams.externalChannel = externalChannel;
		return new KalturaRequestBuilder("externalchannelprofile", "add", kparams);
	},
	
	/**
	 * Delete External channel by External channel id.
	 * @param	externalChannelId	int		External channel identifier (optional)
	 **/
	deleteAction: function(externalChannelId){
		var kparams = new Object();
		kparams.externalChannelId = externalChannelId;
		return new KalturaRequestBuilder("externalchannelprofile", "delete", kparams);
	},
	
	/**
	 * Returns all External channels for partner.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("externalchannelprofile", "list", kparams);
	},
	
	/**
	 * Update External channel details.
	 * @param	externalChannelId	int		External channel identifier (optional)
	 * @param	externalChannel	KalturaExternalChannelProfile		External channel Object (optional)
	 **/
	update: function(externalChannelId, externalChannel){
		var kparams = new Object();
		kparams.externalChannelId = externalChannelId;
		kparams.externalChannel = externalChannel;
		return new KalturaRequestBuilder("externalchannelprofile", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: favorite.
 **/
var KalturaFavoriteService = {
	/**
	 * Add media to user&#39;s favorite list.
	 * @param	favorite	KalturaFavorite		Favorite details. (optional)
	 **/
	add: function(favorite){
		var kparams = new Object();
		kparams.favorite = favorite;
		return new KalturaRequestBuilder("favorite", "add", kparams);
	},
	
	/**
	 * Remove media from user&#39;s favorite list.
	 * @param	id	int		Media identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("favorite", "delete", kparams);
	},
	
	/**
	 * Retrieving users&#39; favorites.
	 * @param	filter	KalturaFavoriteFilter		Request filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("favorite", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: followTvSeries.
 **/
var KalturaFollowTvSeriesService = {
	/**
	 * Add a user&#39;s tv series follow.
 *	            Possible status codes: UserAlreadyFollowing = 8013, NotFound = 500007, InvalidAssetId = 4024.
	 * @param	followTvSeries	KalturaFollowTvSeries		Follow series request parameters (optional)
	 **/
	add: function(followTvSeries){
		var kparams = new Object();
		kparams.followTvSeries = followTvSeries;
		return new KalturaRequestBuilder("followtvseries", "add", kparams);
	},
	
	/**
	 * Delete a user&#39;s tv series follow.
 *	            Possible status codes: UserNotFollowing = 8012, NotFound = 500007, InvalidAssetId = 4024, AnnouncementNotFound = 8006.
	 * @param	assetId	int		Asset identifier (optional)
	 **/
	deleteAction: function(assetId){
		var kparams = new Object();
		kparams.assetId = assetId;
		return new KalturaRequestBuilder("followtvseries", "delete", kparams);
	},
	
	/**
	 * Delete a user&#39;s tv series follow..
	 * @param	assetId	int		Asset identifier (optional)
	 * @param	token	string		User's token identifier (optional)
	 * @param	partnerId	int		Partner identifier (optional)
	 **/
	deleteWithToken: function(assetId, token, partnerId){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.token = token;
		kparams.partnerId = partnerId;
		return new KalturaRequestBuilder("followtvseries", "deleteWithToken", kparams);
	},
	
	/**
	 * List user&#39;s tv series follows.
 *	            Possible status codes:.
	 * @param	filter	KalturaFollowTvSeriesFilter		Follow TV series filter (optional)
	 * @param	pager	KalturaFilterPager		pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("followtvseries", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: homeNetwork.
 **/
var KalturaHomeNetworkService = {
	/**
	 * Add a new home network to a household.
	 * @param	homeNetwork	KalturaHomeNetwork		Home network to add (optional)
	 **/
	add: function(homeNetwork){
		var kparams = new Object();
		kparams.homeNetwork = homeNetwork;
		return new KalturaRequestBuilder("homenetwork", "add", kparams);
	},
	
	/**
	 * Delete household’s existing home network.
	 * @param	externalId	string		The network to update (optional)
	 **/
	deleteAction: function(externalId){
		var kparams = new Object();
		kparams.externalId = externalId;
		return new KalturaRequestBuilder("homenetwork", "delete", kparams);
	},
	
	/**
	 * Retrieve the household’s home networks.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("homenetwork", "list", kparams);
	},
	
	/**
	 * Update and existing home network for a household.
	 * @param	externalId	string		Home network identifier (optional)
	 * @param	homeNetwork	KalturaHomeNetwork		Home network to update (optional)
	 **/
	update: function(externalId, homeNetwork){
		var kparams = new Object();
		kparams.externalId = externalId;
		kparams.homeNetwork = homeNetwork;
		return new KalturaRequestBuilder("homenetwork", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: household.
 **/
var KalturaHouseholdService = {
	/**
	 * Creates a household for the user.
	 * @param	household	KalturaHousehold		Household object (optional)
	 **/
	add: function(household){
		var kparams = new Object();
		kparams.household = household;
		return new KalturaRequestBuilder("household", "add", kparams);
	},
	
	/**
	 * Fully delete a household. Delete all of the household information, including users, devices, entitlements, payment methods and notification date..
	 * @param	id	int		Household identifier (optional, default: null)
	 **/
	deleteAction: function(id){
		if(!id)
			id = null;
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("household", "delete", kparams);
	},
	
	/**
	 * Returns the household model.
	 * @param	id	int		Household identifier (optional, default: null)
	 **/
	get: function(id){
		if(!id)
			id = null;
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("household", "get", kparams);
	},
	
	/**
	 * Purge a household. Delete all of the household information, including users, devices, entitlements, payment methods and notification date..
	 * @param	id	int		Household identifier (optional)
	 **/
	purge: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("household", "purge", kparams);
	},
	
	/**
	 * Reset a household’s time limitation for removing user or device.
	 * @param	frequencyType	string		Possible values: devices – reset the device change frequency. 
 *	            users – reset the user add/remove frequency (optional, enum: KalturaHouseholdFrequencyType)
	 **/
	resetFrequency: function(frequencyType){
		var kparams = new Object();
		kparams.frequencyType = frequencyType;
		return new KalturaRequestBuilder("household", "resetFrequency", kparams);
	},
	
	/**
	 * Resumed a given household service to its previous service settings.
	 **/
	resume: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("household", "resume", kparams);
	},
	
	/**
	 * Suspend a given household service. Sets the household status to “suspended&quot;.The household service settings are maintained for later resume.
	 * @param	roleId	int		roleId (optional, default: null)
	 **/
	suspend: function(roleId){
		if(!roleId)
			roleId = null;
		var kparams = new Object();
		kparams.roleId = roleId;
		return new KalturaRequestBuilder("household", "suspend", kparams);
	},
	
	/**
	 * Update the household name and description.
	 * @param	household	KalturaHousehold		Household object (optional)
	 **/
	update: function(household){
		var kparams = new Object();
		kparams.household = household;
		return new KalturaRequestBuilder("household", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: householdCoupon.
 **/
var KalturaHouseholdCouponService = {
	/**
	 * householdCoupon add.
	 * @param	objectToAdd	KalturaHouseholdCoupon		householdCoupon details (optional)
	 **/
	add: function(objectToAdd){
		var kparams = new Object();
		kparams.objectToAdd = objectToAdd;
		return new KalturaRequestBuilder("householdcoupon", "add", kparams);
	},
	
	/**
	 * Remove coupon from household.
	 * @param	id	string		Coupon code (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("householdcoupon", "delete", kparams);
	},
	
	/**
	 * Gets all HouseholdCoupon items for a household.
	 * @param	filter	KalturaHouseholdCouponFilter		Request filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("householdcoupon", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: householdDevice.
 **/
var KalturaHouseholdDeviceService = {
	/**
	 * Add device to household.
	 * @param	device	KalturaHouseholdDevice		Device (optional)
	 **/
	add: function(device){
		var kparams = new Object();
		kparams.device = device;
		return new KalturaRequestBuilder("householddevice", "add", kparams);
	},
	
	/**
	 * Registers a device to a household using pin code.
	 * @param	deviceName	string		Device name (optional)
	 * @param	pin	string		Pin code (optional)
	 **/
	addByPin: function(deviceName, pin){
		var kparams = new Object();
		kparams.deviceName = deviceName;
		kparams.pin = pin;
		return new KalturaRequestBuilder("householddevice", "addByPin", kparams);
	},
	
	/**
	 * Removes a device from household.
	 * @param	udid	string		device UDID (optional)
	 **/
	deleteAction: function(udid){
		var kparams = new Object();
		kparams.udid = udid;
		return new KalturaRequestBuilder("householddevice", "delete", kparams);
	},
	
	/**
	 * Generates device pin to use when adding a device to household by pin.
	 * @param	udid	string		Device UDID (optional)
	 * @param	brandId	int		Device brand identifier (optional)
	 **/
	generatePin: function(udid, brandId){
		var kparams = new Object();
		kparams.udid = udid;
		kparams.brandId = brandId;
		return new KalturaRequestBuilder("householddevice", "generatePin", kparams);
	},
	
	/**
	 * Returns device registration status to the supplied household.
	 * @param	udid	string		device id (optional, default: null)
	 **/
	get: function(udid){
		if(!udid)
			udid = null;
		var kparams = new Object();
		kparams.udid = udid;
		return new KalturaRequestBuilder("householddevice", "get", kparams);
	},
	
	/**
	 * Returns the devices within the household.
	 * @param	filter	KalturaHouseholdDeviceFilter		Household devices filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("householddevice", "list", kparams);
	},
	
	/**
	 * User sign-in via a time-expired sign-in PIN..
	 * @param	partnerId	int		Partner Identifier (optional)
	 * @param	pin	string		pin code (optional)
	 * @param	udid	string		Device UDID (optional, default: null)
	 **/
	loginWithPin: function(partnerId, pin, udid){
		if(!udid)
			udid = null;
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.pin = pin;
		kparams.udid = udid;
		return new KalturaRequestBuilder("householddevice", "loginWithPin", kparams);
	},
	
	/**
	 * Update the name of the device by UDID.
	 * @param	udid	string		Device UDID (optional)
	 * @param	device	KalturaHouseholdDevice		Device object (optional)
	 **/
	update: function(udid, device){
		var kparams = new Object();
		kparams.udid = udid;
		kparams.device = device;
		return new KalturaRequestBuilder("householddevice", "update", kparams);
	},
	
	/**
	 * Update the name of the device by UDID.
	 * @param	udid	string		Device UDID (optional)
	 * @param	status	string		Device status (optional, enum: KalturaDeviceStatus)
	 **/
	updateStatus: function(udid, status){
		var kparams = new Object();
		kparams.udid = udid;
		kparams.status = status;
		return new KalturaRequestBuilder("householddevice", "updateStatus", kparams);
	}
}

/**
 *Class definition for the Kaltura service: householdLimitations.
 **/
var KalturaHouseholdLimitationsService = {
	/**
	 * Get the limitation module by id.
	 * @param	id	int		Household limitations module identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("householdlimitations", "get", kparams);
	},
	
	/**
	 * Get the list of PartnerConfiguration.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("householdlimitations", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: householdPaymentGateway.
 **/
var KalturaHouseholdPaymentGatewayService = {
	/**
	 * Disable payment-gateway on the household.
	 * @param	paymentGatewayId	int		Payment Gateway Identifier (optional)
	 **/
	disable: function(paymentGatewayId){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		return new KalturaRequestBuilder("householdpaymentgateway", "disable", kparams);
	},
	
	/**
	 * Enable a payment-gateway provider for the household..
	 * @param	paymentGatewayId	int		Payment Gateway Identifier (optional)
	 **/
	enable: function(paymentGatewayId){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		return new KalturaRequestBuilder("householdpaymentgateway", "enable", kparams);
	},
	
	/**
	 * Get a household’s billing account identifier (charge ID) for a given payment gateway.
	 * @param	paymentGatewayExternalId	string		External identifier for the payment gateway (optional)
	 **/
	getChargeID: function(paymentGatewayExternalId){
		var kparams = new Object();
		kparams.paymentGatewayExternalId = paymentGatewayExternalId;
		return new KalturaRequestBuilder("householdpaymentgateway", "getChargeID", kparams);
	},
	
	/**
	 * Gets the Payment Gateway Configuration for the payment gateway identifier given.
	 * @param	paymentGatewayId	int		The payemnt gateway for which to return the registration URL/s for the household. If omitted – return the regisration URL for the household for the default payment gateway (optional)
	 * @param	intent	string		Represent the client’s intent for working with the payment gateway. Intent options to be coordinated with the applicable payment gateway adapter. (optional)
	 * @param	extraParameters	array		Additional parameters to send to the payment gateway adapter. (optional)
	 **/
	invoke: function(paymentGatewayId, intent, extraParameters){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.intent = intent;
		kparams.extraParameters = extraParameters;
		return new KalturaRequestBuilder("householdpaymentgateway", "invoke", kparams);
	},
	
	/**
	 * Get a list of all configured Payment Gateways providers available for the account. For each payment is provided with the household associated payment methods..
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("householdpaymentgateway", "list", kparams);
	},
	
	/**
	 * Resumes all the entitlements of the given payment gateway.
	 * @param	paymentGatewayId	int		Payment gateway ID (optional)
	 **/
	resume: function(paymentGatewayId){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		return new KalturaRequestBuilder("householdpaymentgateway", "resume", kparams);
	},
	
	/**
	 * Set user billing account identifier (charge ID), for a specific household and a specific payment gateway.
	 * @param	paymentGatewayExternalId	string		External identifier for the payment gateway (optional)
	 * @param	chargeId	string		The billing user account identifier for this household at the given payment gateway (optional)
	 **/
	setChargeID: function(paymentGatewayExternalId, chargeId){
		var kparams = new Object();
		kparams.paymentGatewayExternalId = paymentGatewayExternalId;
		kparams.chargeId = chargeId;
		return new KalturaRequestBuilder("householdpaymentgateway", "setChargeID", kparams);
	},
	
	/**
	 * Suspends all the entitlements of the given payment gateway.
	 * @param	paymentGatewayId	int		Payment gateway ID (optional)
	 **/
	suspend: function(paymentGatewayId){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		return new KalturaRequestBuilder("householdpaymentgateway", "suspend", kparams);
	}
}

/**
 *Class definition for the Kaltura service: householdPaymentMethod.
 **/
var KalturaHouseholdPaymentMethodService = {
	/**
	 * Add a new payment method for household.
	 * @param	householdPaymentMethod	KalturaHouseholdPaymentMethod		Household payment method (optional)
	 **/
	add: function(householdPaymentMethod){
		var kparams = new Object();
		kparams.householdPaymentMethod = householdPaymentMethod;
		return new KalturaRequestBuilder("householdpaymentmethod", "add", kparams);
	},
	
	/**
	 * Force remove of a payment method of the household..
	 * @param	paymentGatewayId	int		Payment Gateway Identifier (optional)
	 * @param	paymentMethodId	int		Payment method Identifier (optional)
	 **/
	forceRemove: function(paymentGatewayId, paymentMethodId){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.paymentMethodId = paymentMethodId;
		return new KalturaRequestBuilder("householdpaymentmethod", "forceRemove", kparams);
	},
	
	/**
	 * Get a list of all payment methods of the household..
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("householdpaymentmethod", "list", kparams);
	},
	
	/**
	 * Removes a payment method of the household..
	 * @param	paymentGatewayId	int		Payment Gateway Identifier (optional)
	 * @param	paymentMethodId	int		Payment method Identifier (optional)
	 **/
	remove: function(paymentGatewayId, paymentMethodId){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.paymentMethodId = paymentMethodId;
		return new KalturaRequestBuilder("householdpaymentmethod", "remove", kparams);
	},
	
	/**
	 * Set a payment method as default for the household..
	 * @param	paymentGatewayId	int		Payment Gateway Identifier (optional)
	 * @param	paymentMethodId	int		Payment method Identifier (optional)
	 **/
	setAsDefault: function(paymentGatewayId, paymentMethodId){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.paymentMethodId = paymentMethodId;
		return new KalturaRequestBuilder("householdpaymentmethod", "setAsDefault", kparams);
	}
}

/**
 *Class definition for the Kaltura service: householdPremiumService.
 **/
var KalturaHouseholdPremiumServiceService = {
	/**
	 * Returns all the premium services allowed for the household.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("householdpremiumservice", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: householdQuota.
 **/
var KalturaHouseholdQuotaService = {
	/**
	 * Returns the household&#39;s quota data.
	 **/
	get: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("householdquota", "get", kparams);
	}
}

/**
 *Class definition for the Kaltura service: householdUser.
 **/
var KalturaHouseholdUserService = {
	/**
	 * Adds a user to household.
	 * @param	householdUser	KalturaHouseholdUser		User details to add (optional)
	 **/
	add: function(householdUser){
		var kparams = new Object();
		kparams.householdUser = householdUser;
		return new KalturaRequestBuilder("householduser", "add", kparams);
	},
	
	/**
	 * Removes a user from household.
	 * @param	id	string		The identifier of the user to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("householduser", "delete", kparams);
	},
	
	/**
	 * Returns the users within the household.
	 * @param	filter	KalturaHouseholdUserFilter		Household user filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("householduser", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: image.
 **/
var KalturaImageService = {
	/**
	 * Add a new image.
	 * @param	image	KalturaImage		Image (optional)
	 **/
	add: function(image){
		var kparams = new Object();
		kparams.image = image;
		return new KalturaRequestBuilder("image", "add", kparams);
	},
	
	/**
	 * Delete an existing image.
	 * @param	id	int		Image ID (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("image", "delete", kparams);
	},
	
	/**
	 * Get the list of images by different filtering.
	 * @param	filter	KalturaImageFilter		Filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("image", "list", kparams);
	},
	
	/**
	 * Sets the content of an existing image.
	 * @param	id	int		Image ID (optional)
	 * @param	content	KalturaContentResource		Content of the image to set (optional)
	 **/
	setContent: function(id, content){
		var kparams = new Object();
		kparams.id = id;
		kparams.content = content;
		return new KalturaRequestBuilder("image", "setContent", kparams);
	}
}

/**
 *Class definition for the Kaltura service: imageType.
 **/
var KalturaImageTypeService = {
	/**
	 * Add a new image type.
	 * @param	imageType	KalturaImageType		Image type object (optional)
	 **/
	add: function(imageType){
		var kparams = new Object();
		kparams.imageType = imageType;
		return new KalturaRequestBuilder("imagetype", "add", kparams);
	},
	
	/**
	 * Delete an existing image type.
	 * @param	id	int		Image type ID (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("imagetype", "delete", kparams);
	},
	
	/**
	 * Get the list of image types for the partner.
	 * @param	filter	KalturaImageTypeFilter		Filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("imagetype", "list", kparams);
	},
	
	/**
	 * Update an existing image type.
	 * @param	id	int		Image type ID (optional)
	 * @param	imageType	KalturaImageType		Image type object (optional)
	 **/
	update: function(id, imageType){
		var kparams = new Object();
		kparams.id = id;
		kparams.imageType = imageType;
		return new KalturaRequestBuilder("imagetype", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: inboxMessage.
 **/
var KalturaInboxMessageService = {
	/**
	 * TBD.
	 * @param	id	string		message id (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("inboxmessage", "get", kparams);
	},
	
	/**
	 * List inbox messages.
	 * @param	filter	KalturaInboxMessageFilter		filter (optional, default: null)
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
		return new KalturaRequestBuilder("inboxmessage", "list", kparams);
	},
	
	/**
	 * Updates the message status..
	 * @param	id	string		Message identifier (optional)
	 * @param	status	string		Message status (optional, enum: KalturaInboxMessageStatus)
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("inboxmessage", "updateStatus", kparams);
	}
}

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

/**
 *Class definition for the Kaltura service: language.
 **/
var KalturaLanguageService = {
	/**
	 * Get the list of languages for the partner with option to filter by language codes.
	 * @param	filter	KalturaLanguageFilter		language filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("language", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: licensedUrl.
 **/
var KalturaLicensedUrlService = {
	/**
	 * Get the URL for playing an asset - program, media or recording.
	 * @param	request	KalturaLicensedUrlBaseRequest		Licensed URL request parameters (optional)
	 **/
	get: function(request){
		var kparams = new Object();
		kparams.request = request;
		return new KalturaRequestBuilder("licensedurl", "get", kparams);
	}
}

/**
 *Class definition for the Kaltura service: mediaConcurrencyRule.
 **/
var KalturaMediaConcurrencyRuleService = {
	/**
	 * Get the list of meta mappings for the partner.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("mediaconcurrencyrule", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: mediaFile.
 **/
var KalturaMediaFileService = {
	/**
	 * Add a new media file.
	 * @param	mediaFile	KalturaMediaFile		Media file object (optional)
	 **/
	add: function(mediaFile){
		var kparams = new Object();
		kparams.mediaFile = mediaFile;
		return new KalturaRequestBuilder("mediafile", "add", kparams);
	},
	
	/**
	 * Delete an existing media file.
	 * @param	id	int		Media file identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("mediafile", "delete", kparams);
	},
	
	/**
	 * Returns a list of media-file.
	 * @param	filter	KalturaMediaFileFilter		Filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("mediafile", "list", kparams);
	},
	
	/**
	 * update an existing media file.
	 * @param	id	int		Media file identifier (optional)
	 * @param	mediaFile	KalturaMediaFile		Media file object (optional)
	 **/
	update: function(id, mediaFile){
		var kparams = new Object();
		kparams.id = id;
		kparams.mediaFile = mediaFile;
		return new KalturaRequestBuilder("mediafile", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: mediaFileType.
 **/
var KalturaMediaFileTypeService = {
	/**
	 * Add new media-file type.
	 * @param	mediaFileType	KalturaMediaFileType		Media-file type (optional)
	 **/
	add: function(mediaFileType){
		var kparams = new Object();
		kparams.mediaFileType = mediaFileType;
		return new KalturaRequestBuilder("mediafiletype", "add", kparams);
	},
	
	/**
	 * Delete media-file type by id.
	 * @param	id	int		Media-file type identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("mediafiletype", "delete", kparams);
	},
	
	/**
	 * Returns a list of media-file types.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("mediafiletype", "list", kparams);
	},
	
	/**
	 * Update existing media-file type.
	 * @param	id	int		Media-file type identifier (optional)
	 * @param	mediaFileType	KalturaMediaFileType		Media-file type (optional)
	 **/
	update: function(id, mediaFileType){
		var kparams = new Object();
		kparams.id = id;
		kparams.mediaFileType = mediaFileType;
		return new KalturaRequestBuilder("mediafiletype", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: messageTemplate.
 **/
var KalturaMessageTemplateService = {
	/**
	 * Retrieve a message template used in push notifications and inbox.
	 * @param	messageType	string		possible values: Asset type – Series, Reminder,Churn (optional, enum: KalturaMessageTemplateType)
	 **/
	get: function(messageType){
		var kparams = new Object();
		kparams.messageType = messageType;
		return new KalturaRequestBuilder("messagetemplate", "get", kparams);
	},
	
	/**
	 * Set the account’s push notifications and inbox messages templates.
	 * @param	messageType	string		The asset type to update its template (optional, enum: KalturaMessageTemplateType)
	 * @param	template	KalturaMessageTemplate		The actual message with placeholders to be presented to the user (optional)
	 **/
	update: function(messageType, template){
		var kparams = new Object();
		kparams.messageType = messageType;
		kparams.template = template;
		return new KalturaRequestBuilder("messagetemplate", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: meta.
 **/
var KalturaMetaService = {
	/**
	 * Add a new meta.
	 * @param	meta	KalturaMeta		Meta Object (optional)
	 **/
	add: function(meta){
		var kparams = new Object();
		kparams.meta = meta;
		return new KalturaRequestBuilder("meta", "add", kparams);
	},
	
	/**
	 * Delete an existing meta.
	 * @param	id	int		Meta Identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("meta", "delete", kparams);
	},
	
	/**
	 * Return a list of metas for the account with optional filter.
	 * @param	filter	KalturaMetaFilter		Meta filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("meta", "list", kparams);
	},
	
	/**
	 * Update an existing meta.
	 * @param	id	int		Meta identifier (optional)
	 * @param	meta	KalturaMeta		Meta (optional)
	 **/
	update: function(id, meta){
		var kparams = new Object();
		kparams.id = id;
		kparams.meta = meta;
		return new KalturaRequestBuilder("meta", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: notification.
 **/
var KalturaNotificationService = {
	/**
	 * TBD.
	 * @param	identifier	string		In case type is 'announcement', identifier should be the announcement ID. In case type is 'system', identifier should be 'login' (the login topic) (optional)
	 * @param	type	string		'announcement' - TV-Series topic, 'system' - login topic (optional, enum: KalturaNotificationType)
	 **/
	register: function(identifier, type){
		var kparams = new Object();
		kparams.identifier = identifier;
		kparams.type = type;
		return new KalturaRequestBuilder("notification", "register", kparams);
	},
	
	/**
	 * Sends push notification to user devices.
	 * @param	userId	int		User identifications (optional)
	 * @param	pushMessage	KalturaPushMessage		Message push data (optional)
	 **/
	sendPush: function(userId, pushMessage){
		var kparams = new Object();
		kparams.userId = userId;
		kparams.pushMessage = pushMessage;
		return new KalturaRequestBuilder("notification", "sendPush", kparams);
	},
	
	/**
	 * Sends SMS notification to user.
	 * @param	message	string		Message to send (optional)
	 **/
	sendSms: function(message){
		var kparams = new Object();
		kparams.message = message;
		return new KalturaRequestBuilder("notification", "sendSms", kparams);
	},
	
	/**
	 * Registers the device push token to the push service.
	 * @param	pushToken	string		The device-application pair authentication for push delivery (optional)
	 **/
	setDevicePushToken: function(pushToken){
		var kparams = new Object();
		kparams.pushToken = pushToken;
		return new KalturaRequestBuilder("notification", "setDevicePushToken", kparams);
	}
}

/**
 *Class definition for the Kaltura service: notificationsPartnerSettings.
 **/
var KalturaNotificationsPartnerSettingsService = {
	/**
	 * Retrieve the partner notification settings..
	 **/
	get: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("notificationspartnersettings", "get", kparams);
	},
	
	/**
	 * Update the account notification settings.
	 * @param	settings	KalturaNotificationsPartnerSettings		Account notification settings model (optional)
	 **/
	update: function(settings){
		var kparams = new Object();
		kparams.settings = settings;
		return new KalturaRequestBuilder("notificationspartnersettings", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: notificationsSettings.
 **/
var KalturaNotificationsSettingsService = {
	/**
	 * Retrieve the user’s notification settings..
	 **/
	get: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("notificationssettings", "get", kparams);
	},
	
	/**
	 * Update the user’s notification settings..
	 * @param	settings	KalturaNotificationsSettings		Notifications settings (optional)
	 **/
	update: function(settings){
		var kparams = new Object();
		kparams.settings = settings;
		return new KalturaRequestBuilder("notificationssettings", "update", kparams);
	},
	
	/**
	 * Update the user’s notification settings..
	 * @param	settings	KalturaNotificationsSettings		Notifications settings (optional)
	 * @param	token	string		User's token identifier (optional)
	 * @param	partnerId	int		Partner identifier (optional)
	 **/
	updateWithToken: function(settings, token, partnerId){
		var kparams = new Object();
		kparams.settings = settings;
		kparams.token = token;
		kparams.partnerId = partnerId;
		return new KalturaRequestBuilder("notificationssettings", "updateWithToken", kparams);
	}
}

/**
 *Class definition for the Kaltura service: ossAdapterProfile.
 **/
var KalturaOssAdapterProfileService = {
	/**
	 * Insert new OSS adapter for partner.
	 * @param	ossAdapter	KalturaOSSAdapterProfile		OSS adapter Object (optional)
	 **/
	add: function(ossAdapter){
		var kparams = new Object();
		kparams.ossAdapter = ossAdapter;
		return new KalturaRequestBuilder("ossadapterprofile", "add", kparams);
	},
	
	/**
	 * Delete OSS adapter by OSS adapter id.
	 * @param	ossAdapterId	int		OSS adapter identifier (optional)
	 **/
	deleteAction: function(ossAdapterId){
		var kparams = new Object();
		kparams.ossAdapterId = ossAdapterId;
		return new KalturaRequestBuilder("ossadapterprofile", "delete", kparams);
	},
	
	/**
	 * Generate oss adapter shared secret.
	 * @param	ossAdapterId	int		OSS adapter identifier (optional)
	 **/
	generateSharedSecret: function(ossAdapterId){
		var kparams = new Object();
		kparams.ossAdapterId = ossAdapterId;
		return new KalturaRequestBuilder("ossadapterprofile", "generateSharedSecret", kparams);
	},
	
	/**
	 * Returns all OSS adapters for partner : id + name.
	 * @param	id	int		OSS adapter identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("ossadapterprofile", "get", kparams);
	},
	
	/**
	 * Returns all OSS adapters for partner : id + name.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("ossadapterprofile", "list", kparams);
	},
	
	/**
	 * Update OSS adapter details.
	 * @param	ossAdapterId	int		OSS adapter identifier (optional)
	 * @param	ossAdapter	KalturaOSSAdapterProfile		OSS adapter Object (optional)
	 **/
	update: function(ossAdapterId, ossAdapter){
		var kparams = new Object();
		kparams.ossAdapterId = ossAdapterId;
		kparams.ossAdapter = ossAdapter;
		return new KalturaRequestBuilder("ossadapterprofile", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: ottCategory.
 **/
var KalturaOttCategoryService = {
	/**
	 * Retrieve the list of categories (hierarchical) and their associated channels.
	 * @param	id	int		Category Identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("ottcategory", "get", kparams);
	}
}

/**
 *Class definition for the Kaltura service: ottUser.
 **/
var KalturaOttUserService = {
	/**
	 * Activate the account by activation token.
	 * @param	partnerId	int		The partner ID (optional)
	 * @param	username	string		Username of the user to activate (optional)
	 * @param	activationToken	string		Activation token of the user (optional)
	 **/
	activate: function(partnerId, username, activationToken){
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.username = username;
		kparams.activationToken = activationToken;
		return new KalturaRequestBuilder("ottuser", "activate", kparams);
	},
	
	/**
	 * Deprecate - use Register or Update actions instead by setting user.roleIds parameter.
	 * @param	roleId	int		The role identifier to add (optional)
	 **/
	addRole: function(roleId){
		var kparams = new Object();
		kparams.roleId = roleId;
		return new KalturaRequestBuilder("ottuser", "addRole", kparams);
	},
	
	/**
	 * Returns tokens (KS and refresh token) for anonymous access.
	 * @param	partnerId	int		The partner ID (optional)
	 * @param	udid	string		The caller device's UDID (optional, default: null)
	 **/
	anonymousLogin: function(partnerId, udid){
		if(!udid)
			udid = null;
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.udid = udid;
		return new KalturaRequestBuilder("ottuser", "anonymousLogin", kparams);
	},
	
	/**
	 * Permanently delete a user. User to delete cannot be an exclusive household master, and cannot be default user..
	 **/
	deleteAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("ottuser", "delete", kparams);
	},
	
	/**
	 * Retrieving users&#39; data.
	 **/
	get: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("ottuser", "get", kparams);
	},
	
	/**
	 * Returns the identifier of the user encrypted with SHA1 using configured key.
	 **/
	getEncryptedUserId: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("ottuser", "getEncryptedUserId", kparams);
	},
	
	/**
	 * Returns list of OTTUser (limited to 500 items). Filters by username/external identifier/idIn or roleIdIn.
	 * @param	filter	KalturaOTTUserFilter		Filter request (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("ottuser", "list", kparams);
	},
	
	/**
	 * login with user name and password..
	 * @param	partnerId	int		Partner Identifier (optional)
	 * @param	username	string		user name (optional, default: null)
	 * @param	password	string		password (optional, default: null)
	 * @param	extraParams	map		extra params (optional, default: null)
	 * @param	udid	string		Device UDID (optional, default: null)
	 **/
	login: function(partnerId, username, password, extraParams, udid){
		if(!username)
			username = null;
		if(!password)
			password = null;
		if(!extraParams)
			extraParams = null;
		if(!udid)
			udid = null;
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.username = username;
		kparams.password = password;
		if (extraParams != null)
			kparams.extraParams = extraParams;
		kparams.udid = udid;
		return new KalturaRequestBuilder("ottuser", "login", kparams);
	},
	
	/**
	 * User sign-in via a time-expired sign-in PIN..
	 * @param	partnerId	int		Partner Identifier (optional)
	 * @param	pin	string		pin code (optional)
	 * @param	udid	string		Device UDID (optional, default: null)
	 * @param	secret	string		Additional security parameter to validate the login (optional, default: null)
	 **/
	loginWithPin: function(partnerId, pin, udid, secret){
		if(!udid)
			udid = null;
		if(!secret)
			secret = null;
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.pin = pin;
		kparams.udid = udid;
		kparams.secret = secret;
		return new KalturaRequestBuilder("ottuser", "loginWithPin", kparams);
	},
	
	/**
	 * Logout the calling user..
	 **/
	logout: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("ottuser", "logout", kparams);
	},
	
	/**
	 * Sign up a new user..
	 * @param	partnerId	int		Partner identifier (optional)
	 * @param	user	KalturaOTTUser		The user model to add (optional)
	 * @param	password	string		password (optional)
	 **/
	register: function(partnerId, user, password){
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.user = user;
		kparams.password = password;
		return new KalturaRequestBuilder("ottuser", "register", kparams);
	},
	
	/**
	 * Resend the activation token to a user.
	 * @param	partnerId	int		The partner ID (optional)
	 * @param	username	string		Username of the user to activate (optional)
	 **/
	resendActivationToken: function(partnerId, username){
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.username = username;
		return new KalturaRequestBuilder("ottuser", "resendActivationToken", kparams);
	},
	
	/**
	 * Send an e-mail with URL to enable the user to set new password..
	 * @param	partnerId	int		Partner Identifier (optional)
	 * @param	username	string		user name (optional)
	 * @param	templateName	string		Template name for reset password (optional, default: null)
	 **/
	resetPassword: function(partnerId, username, templateName){
		if(!templateName)
			templateName = null;
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.username = username;
		kparams.templateName = templateName;
		return new KalturaRequestBuilder("ottuser", "resetPassword", kparams);
	},
	
	/**
	 * Renew the user&#39;s password after validating the token that sent as part of URL in e-mail..
	 * @param	partnerId	int		Partner Identifier (optional)
	 * @param	token	string		Token that sent by e-mail (optional)
	 * @param	password	string		New password (optional)
	 **/
	setInitialPassword: function(partnerId, token, password){
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.token = token;
		kparams.password = password;
		return new KalturaRequestBuilder("ottuser", "setInitialPassword", kparams);
	},
	
	/**
	 * Update user information.
	 * @param	user	KalturaOTTUser		User data (includes basic and dynamic data) (optional)
	 * @param	id	string		User ID (optional, default: null)
	 **/
	update: function(user, id){
		if(!id)
			id = null;
		var kparams = new Object();
		kparams.user = user;
		kparams.id = id;
		return new KalturaRequestBuilder("ottuser", "update", kparams);
	},
	
	/**
	 * Update user dynamic data.
	 * @param	key	string		Type of dynamicData (optional)
	 * @param	value	KalturaStringValue		Value of dynamicData (optional)
	 **/
	updateDynamicData: function(key, value){
		var kparams = new Object();
		kparams.key = key;
		kparams.value = value;
		return new KalturaRequestBuilder("ottuser", "updateDynamicData", kparams);
	},
	
	/**
	 * Given a user name and existing password, change to a new password..
	 * @param	username	string		user name (optional)
	 * @param	oldPassword	string		old password (optional)
	 * @param	newPassword	string		new password (optional)
	 **/
	updateLoginData: function(username, oldPassword, newPassword){
		var kparams = new Object();
		kparams.username = username;
		kparams.oldPassword = oldPassword;
		kparams.newPassword = newPassword;
		return new KalturaRequestBuilder("ottuser", "updateLoginData", kparams);
	},
	
	/**
	 * Update the user&#39;s existing password..
	 * @param	userId	int		User Identifier (optional)
	 * @param	password	string		new password (optional)
	 **/
	updatePassword: function(userId, password){
		var kparams = new Object();
		kparams.userId = userId;
		kparams.password = password;
		return new KalturaRequestBuilder("ottuser", "updatePassword", kparams);
	}
}

/**
 *Class definition for the Kaltura service: parentalRule.
 **/
var KalturaParentalRuleService = {
	/**
	 * Add a new parentalRule.
	 * @param	parentalRule	KalturaParentalRule		parentalRule object (optional)
	 **/
	add: function(parentalRule){
		var kparams = new Object();
		kparams.parentalRule = parentalRule;
		return new KalturaRequestBuilder("parentalrule", "add", kparams);
	},
	
	/**
	 * Delete an existing parentalRule.
	 * @param	id	int		parentalRule identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("parentalrule", "delete", kparams);
	},
	
	/**
	 * Disables a parental rule that was previously defined by the household master. Disable can be at specific user or household level..
	 * @param	ruleId	int		Rule Identifier (optional)
	 * @param	entityReference	string		Reference type to filter by (optional, enum: KalturaEntityReferenceBy)
	 **/
	disable: function(ruleId, entityReference){
		var kparams = new Object();
		kparams.ruleId = ruleId;
		kparams.entityReference = entityReference;
		return new KalturaRequestBuilder("parentalrule", "disable", kparams);
	},
	
	/**
	 * Disables a parental rule that was defined at account level. Disable can be at specific user or household level..
	 * @param	entityReference	string		Reference type to filter by (optional, enum: KalturaEntityReferenceBy)
	 **/
	disableDefault: function(entityReference){
		var kparams = new Object();
		kparams.entityReference = entityReference;
		return new KalturaRequestBuilder("parentalrule", "disableDefault", kparams);
	},
	
	/**
	 * Enable a parental rules for a user.
	 * @param	ruleId	int		Rule Identifier (optional)
	 * @param	entityReference	string		Reference type to filter by (optional, enum: KalturaEntityReferenceBy)
	 **/
	enable: function(ruleId, entityReference){
		var kparams = new Object();
		kparams.ruleId = ruleId;
		kparams.entityReference = entityReference;
		return new KalturaRequestBuilder("parentalrule", "enable", kparams);
	},
	
	/**
	 * Get an existing parentalRule by identifier.
	 * @param	id	int		parentalRule identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("parentalrule", "get", kparams);
	},
	
	/**
	 * Return the parental rules that applies for the user or household. Can include rules that have been associated in account, household, or user level.
 *	            Association level is also specified in the response..
	 * @param	filter	KalturaParentalRuleFilter		Filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("parentalrule", "list", kparams);
	},
	
	/**
	 * Update an existing parentalRule.
	 * @param	id	int		parentalRule identifier (optional)
	 * @param	parentalRule	KalturaParentalRule		parentalRule object (optional)
	 **/
	update: function(id, parentalRule){
		var kparams = new Object();
		kparams.id = id;
		kparams.parentalRule = parentalRule;
		return new KalturaRequestBuilder("parentalrule", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: partnerConfiguration.
 **/
var KalturaPartnerConfigurationService = {
	/**
	 * Get the list of PartnerConfiguration.
	 * @param	filter	KalturaPartnerConfigurationFilter		filter by PartnerConfiguration type (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("partnerconfiguration", "list", kparams);
	},
	
	/**
	 * Update Partner Configuration.
	 * @param	configuration	KalturaPartnerConfiguration		Partner Configuration
 *	            possible configuration type: 
 *	            'configuration': { 'value': 0, 'partner_configuration_type': { 'type': 'OSSAdapter', 'objectType': 'KalturaPartnerConfigurationHolder' },
 *	            'objectType': 'KalturaBillingPartnerConfig'} (optional)
	 **/
	update: function(configuration){
		var kparams = new Object();
		kparams.configuration = configuration;
		return new KalturaRequestBuilder("partnerconfiguration", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: partner.
 **/
var KalturaPartnerService = {
	/**
	 * Returns a login session for external system (like OVP).
	 **/
	externalLogin: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("partner", "externalLogin", kparams);
	}
}

/**
 *Class definition for the Kaltura service: passwordPolicy.
 **/
var KalturaPasswordPolicyService = {
	/**
	 * Add an object.
	 * @param	objectToAdd	KalturaPasswordPolicy		Object to add (optional)
	 **/
	add: function(objectToAdd){
		var kparams = new Object();
		kparams.objectToAdd = objectToAdd;
		return new KalturaRequestBuilder("passwordpolicy", "add", kparams);
	},
	
	/**
	 * Update an object.
	 * @param	id	int		Object ID to update (optional)
	 * @param	objectToUpdate	KalturaPasswordPolicy		Object to update (optional)
	 **/
	update: function(id, objectToUpdate){
		var kparams = new Object();
		kparams.id = id;
		kparams.objectToUpdate = objectToUpdate;
		return new KalturaRequestBuilder("passwordpolicy", "update", kparams);
	},
	
	/**
	 * Delete an object.
	 * @param	id	int		Object ID to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("passwordpolicy", "delete", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaPasswordPolicyFilter		Request filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("passwordpolicy", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: paymentGatewayProfile.
 **/
var KalturaPaymentGatewayProfileService = {
	/**
	 * Insert new payment gateway for partner.
	 * @param	paymentGateway	KalturaPaymentGatewayProfile		Payment Gateway Object (optional)
	 **/
	add: function(paymentGateway){
		var kparams = new Object();
		kparams.paymentGateway = paymentGateway;
		return new KalturaRequestBuilder("paymentgatewayprofile", "add", kparams);
	},
	
	/**
	 * Delete payment gateway by payment gateway id.
	 * @param	paymentGatewayId	int		Payment Gateway Identifier (optional)
	 **/
	deleteAction: function(paymentGatewayId){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		return new KalturaRequestBuilder("paymentgatewayprofile", "delete", kparams);
	},
	
	/**
	 * Generate payment gateway shared secret.
	 * @param	paymentGatewayId	int		Payment gateway identifier (optional)
	 **/
	generateSharedSecret: function(paymentGatewayId){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		return new KalturaRequestBuilder("paymentgatewayprofile", "generateSharedSecret", kparams);
	},
	
	/**
	 * Gets the Payment Gateway Configuration for the payment gateway identifier given.
	 * @param	alias	string		The payemnt gateway for which to return the registration URL/s for the household. If omitted – return the regisration URL for the household for the default payment gateway (optional)
	 * @param	intent	string		Represent the client’s intent for working with the payment gateway. Intent options to be coordinated with the applicable payment gateway adapter. (optional)
	 * @param	extraParameters	array		Additional parameters to send to the payment gateway adapter. (optional)
	 **/
	getConfiguration: function(alias, intent, extraParameters){
		var kparams = new Object();
		kparams.alias = alias;
		kparams.intent = intent;
		kparams.extraParameters = extraParameters;
		return new KalturaRequestBuilder("paymentgatewayprofile", "getConfiguration", kparams);
	},
	
	/**
	 * Returns all payment gateways for partner : id + name.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("paymentgatewayprofile", "list", kparams);
	},
	
	/**
	 * Update payment gateway details.
	 * @param	paymentGatewayId	int		Payment Gateway Identifier (optional)
	 * @param	paymentGateway	KalturaPaymentGatewayProfile		Payment Gateway Object (optional)
	 **/
	update: function(paymentGatewayId, paymentGateway){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.paymentGateway = paymentGateway;
		return new KalturaRequestBuilder("paymentgatewayprofile", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: paymentMethodProfile.
 **/
var KalturaPaymentMethodProfileService = {
	/**
	 * TBD.
	 * @param	paymentMethod	KalturaPaymentMethodProfile		Payment method to add (optional)
	 **/
	add: function(paymentMethod){
		var kparams = new Object();
		kparams.paymentMethod = paymentMethod;
		return new KalturaRequestBuilder("paymentmethodprofile", "add", kparams);
	},
	
	/**
	 * Delete payment method profile.
	 * @param	paymentMethodId	int		Payment method identifier to delete (optional)
	 **/
	deleteAction: function(paymentMethodId){
		var kparams = new Object();
		kparams.paymentMethodId = paymentMethodId;
		return new KalturaRequestBuilder("paymentmethodprofile", "delete", kparams);
	},
	
	/**
	 * TBD.
	 * @param	filter	KalturaPaymentMethodProfileFilter		Payment gateway method profile filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("paymentmethodprofile", "list", kparams);
	},
	
	/**
	 * Update payment method.
	 * @param	paymentMethodId	int		Payment method identifier to update (optional)
	 * @param	paymentMethod	KalturaPaymentMethodProfile		Payment method to update (optional)
	 **/
	update: function(paymentMethodId, paymentMethod){
		var kparams = new Object();
		kparams.paymentMethodId = paymentMethodId;
		kparams.paymentMethod = paymentMethod;
		return new KalturaRequestBuilder("paymentmethodprofile", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: permission.
 **/
var KalturaPermissionService = {
	/**
	 * Adds new permission.
	 * @param	permission	KalturaPermission		Permission to insert (optional)
	 **/
	add: function(permission){
		var kparams = new Object();
		kparams.permission = permission;
		return new KalturaRequestBuilder("permission", "add", kparams);
	},
	
	/**
	 * Deletes an existing permission.
	 * @param	id	int		Permission ID to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("permission", "delete", kparams);
	},
	
	/**
	 * Returns permission names as comma separated string.
	 **/
	getCurrentPermissions: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("permission", "getCurrentPermissions", kparams);
	},
	
	/**
	 * Retrieving permissions by identifiers, if filter is empty, returns all partner permissions.
	 * @param	filter	KalturaPermissionFilter		Filter for permissions (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("permission", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: personalFeed.
 **/
var KalturaPersonalFeedService = {
	/**
	 * List user&#39;s feeds.
 *	            Possible status codes:.
	 * @param	filter	KalturaPersonalFeedFilter		Required sort option to apply for the identified assets. If omitted – will use relevancy.
 *	            Possible values: relevancy, a_to_z, z_to_a, views, ratings, votes, newest. (optional)
	 * @param	pager	KalturaFilterPager		Page size and index (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("personalfeed", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: personalList.
 **/
var KalturaPersonalListService = {
	/**
	 * Add a user&#39;s personal list item to follow..
	 * @param	personalList	KalturaPersonalList		Follow personal list item request parameters (optional)
	 **/
	add: function(personalList){
		var kparams = new Object();
		kparams.personalList = personalList;
		return new KalturaRequestBuilder("personallist", "add", kparams);
	},
	
	/**
	 * Remove followed item from user&#39;s personal list.
	 * @param	personalListId	int		personalListId identifier (optional)
	 **/
	deleteAction: function(personalListId){
		var kparams = new Object();
		kparams.personalListId = personalListId;
		return new KalturaRequestBuilder("personallist", "delete", kparams);
	},
	
	/**
	 * List user&#39;s tv personal item to follow.
 *	            Possible status codes:.
	 * @param	filter	KalturaPersonalListFilter		Personal list filter (optional, default: null)
	 * @param	pager	KalturaFilterPager		pager (optional, default: null)
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
		return new KalturaRequestBuilder("personallist", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: pin.
 **/
var KalturaPinService = {
	/**
	 * Retrieve the parental or purchase PIN that applies for the household or user. Includes specification of where the PIN was defined at – account, household or user  level.
	 * @param	by	string		Reference type to filter by (optional, enum: KalturaEntityReferenceBy)
	 * @param	type	string		The PIN type to retrieve (optional, enum: KalturaPinType)
	 * @param	ruleId	int		Rule ID - for PIN per rule (MediaCorp): BEO-1923 (optional, default: null)
	 **/
	get: function(by, type, ruleId){
		if(!ruleId)
			ruleId = null;
		var kparams = new Object();
		kparams.by = by;
		kparams.type = type;
		kparams.ruleId = ruleId;
		return new KalturaRequestBuilder("pin", "get", kparams);
	},
	
	/**
	 * Set the parental or purchase PIN that applies for the user or the household..
	 * @param	by	string		Reference type to filter by (optional, enum: KalturaEntityReferenceBy)
	 * @param	type	string		The PIN type to retrieve (optional, enum: KalturaPinType)
	 * @param	pin	KalturaPin		PIN to set (optional)
	 * @param	ruleId	int		Rule ID - for PIN per rule (MediaCorp): BEO-1923 (optional, default: null)
	 **/
	update: function(by, type, pin, ruleId){
		if(!ruleId)
			ruleId = null;
		var kparams = new Object();
		kparams.by = by;
		kparams.type = type;
		kparams.pin = pin;
		kparams.ruleId = ruleId;
		return new KalturaRequestBuilder("pin", "update", kparams);
	},
	
	/**
	 * Validate a purchase or parental PIN for a user..
	 * @param	pin	string		PIN to validate (optional)
	 * @param	type	string		The PIN type to retrieve (optional, enum: KalturaPinType)
	 * @param	ruleId	int		Rule ID - for PIN per rule (MediaCorp): BEO-1923 (optional, default: null)
	 **/
	validate: function(pin, type, ruleId){
		if(!ruleId)
			ruleId = null;
		var kparams = new Object();
		kparams.pin = pin;
		kparams.type = type;
		kparams.ruleId = ruleId;
		return new KalturaRequestBuilder("pin", "validate", kparams);
	}
}

/**
 *Class definition for the Kaltura service: playbackProfile.
 **/
var KalturaPlaybackProfileService = {
	/**
	 * Insert new Playback adapter for partner.
	 * @param	playbackProfile	KalturaPlaybackProfile		Playback adapter Object (optional)
	 **/
	add: function(playbackProfile){
		var kparams = new Object();
		kparams.playbackProfile = playbackProfile;
		return new KalturaRequestBuilder("playbackprofile", "add", kparams);
	},
	
	/**
	 * Delete Playback adapter by Playback adapter id.
	 * @param	id	int		Playback adapter identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("playbackprofile", "delete", kparams);
	},
	
	/**
	 * Generate playback adapter shared secret.
	 * @param	id	int		Playback adapter identifier (optional)
	 **/
	generateSharedSecret: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("playbackprofile", "generateSharedSecret", kparams);
	},
	
	/**
	 * Returns all playback profiles for partner : id + name.
	 * @param	filter	KalturaPlaybackProfileFilter		Filter parameters for filtering out the result (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("playbackprofile", "list", kparams);
	},
	
	/**
	 * Update Playback adapter details.
	 * @param	id	int		Playback adapter identifier (optional)
	 * @param	playbackProfile	KalturaPlaybackProfile		Playback adapter Object (optional)
	 **/
	update: function(id, playbackProfile){
		var kparams = new Object();
		kparams.id = id;
		kparams.playbackProfile = playbackProfile;
		return new KalturaRequestBuilder("playbackprofile", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: ppv.
 **/
var KalturaPpvService = {
	/**
	 * Returns ppv object by internal identifier.
	 * @param	id	int		ppv identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("ppv", "get", kparams);
	},
	
	/**
	 * Returns all ppv objects.
	 * @param	filter	KalturaPpvFilter		Filter parameters for filtering out the result (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("ppv", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: priceDetails.
 **/
var KalturaPriceDetailsService = {
	/**
	 * Returns the list of available prices, can be filtered by price IDs.
	 * @param	filter	KalturaPriceDetailsFilter		Filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("pricedetails", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: pricePlan.
 **/
var KalturaPricePlanService = {
	/**
	 * Returns a list of price plans by IDs.
	 * @param	filter	KalturaPricePlanFilter		Filter request (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("priceplan", "list", kparams);
	},
	
	/**
	 * Updates a price plan.
	 * @param	id	int		Price plan ID (optional)
	 * @param	pricePlan	KalturaPricePlan		Price plan to update (optional)
	 **/
	update: function(id, pricePlan){
		var kparams = new Object();
		kparams.id = id;
		kparams.pricePlan = pricePlan;
		return new KalturaRequestBuilder("priceplan", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: productPrice.
 **/
var KalturaProductPriceService = {
	/**
	 * Returns a price and a purchase status for each subscription or/and media file, for a given user (if passed) and with the consideration of a coupon code (if passed)..
	 * @param	filter	KalturaProductPriceFilter		Request filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("productprice", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: purchaseSettings.
 **/
var KalturaPurchaseSettingsService = {
	/**
	 * Retrieve the purchase settings.
 *	            Includes specification of where these settings were defined – account, household or user.
	 * @param	by	string		Reference type to filter by (optional, enum: KalturaEntityReferenceBy)
	 **/
	get: function(by){
		var kparams = new Object();
		kparams.by = by;
		return new KalturaRequestBuilder("purchasesettings", "get", kparams);
	},
	
	/**
	 * Set a purchase PIN for the household or user.
	 * @param	entityReference	string		Reference type to filter by (optional, enum: KalturaEntityReferenceBy)
	 * @param	settings	KalturaPurchaseSettings		New settings to apply (optional)
	 **/
	update: function(entityReference, settings){
		var kparams = new Object();
		kparams.entityReference = entityReference;
		kparams.settings = settings;
		return new KalturaRequestBuilder("purchasesettings", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: ratio.
 **/
var KalturaRatioService = {
	/**
	 * Add new group ratio.
	 * @param	ratio	KalturaRatio		Ratio to add for the partner (optional)
	 **/
	add: function(ratio){
		var kparams = new Object();
		kparams.ratio = ratio;
		return new KalturaRequestBuilder("ratio", "add", kparams);
	},
	
	/**
	 * Get the list of available ratios.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("ratio", "list", kparams);
	},
	
	/**
	 * Update group ratio&#39;s PrecisionPrecentage.
	 * @param	id	int		The ratio ID (optional)
	 * @param	ratio	KalturaRatio		Ratio to update for the partner (optional)
	 **/
	update: function(id, ratio){
		var kparams = new Object();
		kparams.id = id;
		kparams.ratio = ratio;
		return new KalturaRequestBuilder("ratio", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: recommendationProfile.
 **/
var KalturaRecommendationProfileService = {
	/**
	 * Insert new recommendation engine for partner.
	 * @param	recommendationEngine	KalturaRecommendationProfile		recommendation engine Object (optional)
	 **/
	add: function(recommendationEngine){
		var kparams = new Object();
		kparams.recommendationEngine = recommendationEngine;
		return new KalturaRequestBuilder("recommendationprofile", "add", kparams);
	},
	
	/**
	 * Delete recommendation engine by recommendation engine id.
	 * @param	id	int		recommendation engine Identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("recommendationprofile", "delete", kparams);
	},
	
	/**
	 * Generate recommendation engine  shared secret.
	 * @param	recommendationEngineId	int		recommendation engine Identifier (optional)
	 **/
	generateSharedSecret: function(recommendationEngineId){
		var kparams = new Object();
		kparams.recommendationEngineId = recommendationEngineId;
		return new KalturaRequestBuilder("recommendationprofile", "generateSharedSecret", kparams);
	},
	
	/**
	 * Returns all recommendation engines for partner.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("recommendationprofile", "list", kparams);
	},
	
	/**
	 * Update recommendation engine details.
	 * @param	recommendationEngineId	int		recommendation engine identifier (optional)
	 * @param	recommendationEngine	KalturaRecommendationProfile		recommendation engine Object (optional)
	 **/
	update: function(recommendationEngineId, recommendationEngine){
		var kparams = new Object();
		kparams.recommendationEngineId = recommendationEngineId;
		kparams.recommendationEngine = recommendationEngine;
		return new KalturaRequestBuilder("recommendationprofile", "update", kparams);
	}
}

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

/**
 *Class definition for the Kaltura service: region.
 **/
var KalturaRegionService = {
	/**
	 * Adds a new region for partner.
	 * @param	region	KalturaRegion		Region to add (optional)
	 **/
	add: function(region){
		var kparams = new Object();
		kparams.region = region;
		return new KalturaRequestBuilder("region", "add", kparams);
	},
	
	/**
	 * Delete an existing region.
	 * @param	id	int		Region ID to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("region", "delete", kparams);
	},
	
	/**
	 * Returns all regions for the partner.
	 * @param	filter	KalturaRegionFilter		Regions filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("region", "list", kparams);
	},
	
	/**
	 * Update an existing region.
	 * @param	id	int		Region ID to update (optional)
	 * @param	region	KalturaRegion		Region to update (optional)
	 **/
	update: function(id, region){
		var kparams = new Object();
		kparams.id = id;
		kparams.region = region;
		return new KalturaRequestBuilder("region", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: registrySettings.
 **/
var KalturaRegistrySettingsService = {
	/**
	 * Retrieve the registry settings..
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("registrysettings", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: reminder.
 **/
var KalturaReminderService = {
	/**
	 * Add a new future reminder.
	 * @param	reminder	KalturaReminder		The reminder to be added. (optional)
	 **/
	add: function(reminder){
		var kparams = new Object();
		kparams.reminder = reminder;
		return new KalturaRequestBuilder("reminder", "add", kparams);
	},
	
	/**
	 * Delete a reminder. Reminder cannot be delete while being sent..
	 * @param	id	int		Id of the reminder. (optional)
	 * @param	type	string		Reminder type. (optional, enum: KalturaReminderType)
	 **/
	deleteAction: function(id, type){
		var kparams = new Object();
		kparams.id = id;
		kparams.type = type;
		return new KalturaRequestBuilder("reminder", "delete", kparams);
	},
	
	/**
	 * Delete a reminder. Reminder cannot be delete while being sent..
	 * @param	id	int		Id of the reminder. (optional)
	 * @param	type	string		Reminder type. (optional, enum: KalturaReminderType)
	 * @param	token	string		User's token identifier (optional)
	 * @param	partnerId	int		Partner identifier (optional)
	 **/
	deleteWithToken: function(id, type, token, partnerId){
		var kparams = new Object();
		kparams.id = id;
		kparams.type = type;
		kparams.token = token;
		kparams.partnerId = partnerId;
		return new KalturaRequestBuilder("reminder", "deleteWithToken", kparams);
	},
	
	/**
	 * Return a list of reminders with optional filter by KSQL..
	 * @param	filter	KalturaReminderFilter		Filter object (optional)
	 * @param	pager	KalturaFilterPager		Paging the request (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("reminder", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: report.
 **/
var KalturaReportService = {
	/**
	 * Return a device configuration retrieval log request for a specific device..
	 * @param	udid	string		Device UDID (optional)
	 **/
	get: function(udid){
		var kparams = new Object();
		kparams.udid = udid;
		return new KalturaRequestBuilder("report", "get", kparams);
	},
	
	/**
	 * Return device configurations retrieval log. Supports paging and can be filtered with the parameter &quot;FromData&quot;..
	 * @param	filter	KalturaReportFilter		Filter option for from date (sec) (optional)
	 * @param	pager	KalturaFilterPager		Page size and index (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("report", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: searchHistory.
 **/
var KalturaSearchHistoryService = {
	/**
	 * Clean the user’s search history.
	 * @param	filter	KalturaSearchHistoryFilter		Filter of search history (optional, default: null)
	 **/
	clean: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("searchhistory", "clean", kparams);
	},
	
	/**
	 * Delete a specific search history.
 *	            Possible error code: 2032 - ItemNotFound.
	 * @param	id	string		ID of the search history reference as shown in the list action (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("searchhistory", "delete", kparams);
	},
	
	/**
	 * Get user&#39;s last search requests.
	 * @param	filter	KalturaSearchHistoryFilter		Filter parameters for filtering out the result (optional, default: null)
	 * @param	pager	KalturaFilterPager		Page size and index. Number of assets to return per page. Possible range 5 ≤ size ≥ 50. If omitted - will be set to 25. If a value > 50 provided – will set to 50> (optional, default: null)
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
		return new KalturaRequestBuilder("searchhistory", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: segmentationType.
 **/
var KalturaSegmentationTypeService = {
	/**
	 * Adds a new segmentation type to the system.
	 * @param	segmentationType	KalturaSegmentationType		The segmentation type to be added (optional)
	 **/
	add: function(segmentationType){
		var kparams = new Object();
		kparams.segmentationType = segmentationType;
		return new KalturaRequestBuilder("segmentationtype", "add", kparams);
	},
	
	/**
	 * Delete a segmentation type from the system.
	 * @param	id	int		Segmentation type id (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("segmentationtype", "delete", kparams);
	},
	
	/**
	 * Lists all segmentation types in group.
	 * @param	filter	KalturaSegmentationTypeFilter		Segmentation type filter - basically empty (optional, default: null)
	 * @param	pager	KalturaFilterPager		Simple pager (optional, default: null)
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
		return new KalturaRequestBuilder("segmentationtype", "list", kparams);
	},
	
	/**
	 * Updates an existing segmentation type.
	 * @param	segmentationTypeId	int		The ID of the object that will be updated (optional)
	 * @param	segmentationType	KalturaSegmentationType		The segmentation type to be updated (optional)
	 **/
	update: function(segmentationTypeId, segmentationType){
		var kparams = new Object();
		kparams.segmentationTypeId = segmentationTypeId;
		kparams.segmentationType = segmentationType;
		return new KalturaRequestBuilder("segmentationtype", "update", kparams);
	}
}

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

/**
 *Class definition for the Kaltura service: session.
 **/
var KalturaSessionService = {
	/**
	 * Parses KS.
	 * @param	session	string		Additional KS to parse, if not passed the user's KS will be parsed (optional, default: null)
	 **/
	get: function(session){
		if(!session)
			session = null;
		var kparams = new Object();
		kparams.session = session;
		return new KalturaRequestBuilder("session", "get", kparams);
	},
	
	/**
	 * Revokes all the sessions (KS) of a given user.
	 **/
	revoke: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("session", "revoke", kparams);
	},
	
	/**
	 * Switching the user in the session by generating a new session for a new user within the same household.
	 * @param	userIdToSwitch	string		The identifier of the user to change (optional)
	 **/
	switchUser: function(userIdToSwitch){
		var kparams = new Object();
		kparams.userIdToSwitch = userIdToSwitch;
		return new KalturaRequestBuilder("session", "switchUser", kparams);
	}
}

/**
 *Class definition for the Kaltura service: socialAction.
 **/
var KalturaSocialActionService = {
	/**
	 * Insert new user social action.
	 * @param	socialAction	KalturaSocialAction		social Action Object (optional)
	 **/
	add: function(socialAction){
		var kparams = new Object();
		kparams.socialAction = socialAction;
		return new KalturaRequestBuilder("socialaction", "add", kparams);
	},
	
	/**
	 * delete user social action.
	 * @param	id	string		social Action Id (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("socialaction", "delete", kparams);
	},
	
	/**
	 * Get list of user social actions.
	 * @param	filter	KalturaSocialActionFilter		social action filter (optional)
	 * @param	pager	KalturaFilterPager		pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("socialaction", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: socialComment.
 **/
var KalturaSocialCommentService = {
	/**
	 * Get a list of all social comments filtered by asset ID and social platform.
	 * @param	filter	KalturaSocialCommentFilter		Country filter (optional)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("socialcomment", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: social.
 **/
var KalturaSocialService = {
	/**
	 * List social accounts.
	 * @param	type	string		Social network type (optional, enum: KalturaSocialNetwork)
	 **/
	get: function(type){
		var kparams = new Object();
		kparams.type = type;
		return new KalturaRequestBuilder("social", "get", kparams);
	},
	
	/**
	 * Return the user object with social information according to a provided external social token.
	 * @param	partnerId	int		Partner identifier (optional)
	 * @param	token	string		Social token (optional)
	 * @param	type	string		Social network type (optional, enum: KalturaSocialNetwork)
	 **/
	getByToken: function(partnerId, token, type){
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.token = token;
		kparams.type = type;
		return new KalturaRequestBuilder("social", "getByToken", kparams);
	},
	
	/**
	 * Retrieve the social network’s configuration information.
	 * @param	type	string		Social network type (optional, enum: KalturaSocialNetwork)
	 * @param	partnerId	int		Partner identifier (optional, default: null)
	 **/
	getConfiguration: function(type, partnerId){
		if(!partnerId)
			partnerId = null;
		var kparams = new Object();
		kparams.type = type;
		kparams.partnerId = partnerId;
		return new KalturaRequestBuilder("social", "getConfiguration", kparams);
	},
	
	/**
	 * Login using social token.
	 * @param	partnerId	int		Partner identifier (optional)
	 * @param	token	string		Social token (optional)
	 * @param	type	string		Social network (optional, enum: KalturaSocialNetwork)
	 * @param	udid	string		Device UDID (optional, default: null)
	 **/
	login: function(partnerId, token, type, udid){
		if(!udid)
			udid = null;
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.token = token;
		kparams.type = type;
		kparams.udid = udid;
		return new KalturaRequestBuilder("social", "login", kparams);
	},
	
	/**
	 * Connect an existing user in the system to an external social network user.
	 * @param	token	string		social token (optional)
	 * @param	type	string		Social network type (optional, enum: KalturaSocialNetwork)
	 **/
	merge: function(token, type){
		var kparams = new Object();
		kparams.token = token;
		kparams.type = type;
		return new KalturaRequestBuilder("social", "merge", kparams);
	},
	
	/**
	 * Create a new user in the system using a provided external social token.
	 * @param	partnerId	int		Partner identifier (optional)
	 * @param	token	string		social token (optional)
	 * @param	type	string		Social network type (optional, enum: KalturaSocialNetwork)
	 * @param	email	string		User email (optional, default: null)
	 **/
	register: function(partnerId, token, type, email){
		if(!email)
			email = null;
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.token = token;
		kparams.type = type;
		kparams.email = email;
		return new KalturaRequestBuilder("social", "register", kparams);
	},
	
	/**
	 * Disconnect an existing user in the system from its external social network user.
	 * @param	type	string		Social network type (optional, enum: KalturaSocialNetwork)
	 **/
	unmerge: function(type){
		var kparams = new Object();
		kparams.type = type;
		return new KalturaRequestBuilder("social", "unmerge", kparams);
	},
	
	/**
	 * Set the user social network’s configuration information.
	 * @param	configuration	KalturaSocialConfig		The social action settings (optional)
	 **/
	UpdateConfiguration: function(configuration){
		var kparams = new Object();
		kparams.configuration = configuration;
		return new KalturaRequestBuilder("social", "UpdateConfiguration", kparams);
	}
}

/**
 *Class definition for the Kaltura service: socialFriendActivity.
 **/
var KalturaSocialFriendActivityService = {
	/**
	 * Get a list of the social friends activity for a user.
	 * @param	filter	KalturaSocialFriendActivityFilter		Social friend activity filter (optional, default: null)
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
		return new KalturaRequestBuilder("socialfriendactivity", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: ssoAdapterProfile.
 **/
var KalturaSsoAdapterProfileService = {
	/**
	 * Insert new sso adapter for partner.
	 * @param	ssoAdapter	KalturaSSOAdapterProfile		SSO Adapter Object to be added (optional)
	 **/
	add: function(ssoAdapter){
		var kparams = new Object();
		kparams.ssoAdapter = ssoAdapter;
		return new KalturaRequestBuilder("ssoadapterprofile", "add", kparams);
	},
	
	/**
	 * Delete sso adapters by sso adapters id.
	 * @param	ssoAdapterId	int		SSO Adapter Identifier (optional)
	 **/
	deleteAction: function(ssoAdapterId){
		var kparams = new Object();
		kparams.ssoAdapterId = ssoAdapterId;
		return new KalturaRequestBuilder("ssoadapterprofile", "delete", kparams);
	},
	
	/**
	 * Generate SSO Adapter shared secret.
	 * @param	ssoAdapterId	int		SSO Adapter identifier (optional)
	 **/
	generateSharedSecret: function(ssoAdapterId){
		var kparams = new Object();
		kparams.ssoAdapterId = ssoAdapterId;
		return new KalturaRequestBuilder("ssoadapterprofile", "generateSharedSecret", kparams);
	},
	
	/**
	 * Returns all sso adapters for partner : id + name.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("ssoadapterprofile", "list", kparams);
	},
	
	/**
	 * Update sso adapter details.
	 * @param	ssoAdapterId	int		SSO Adapter Identifier (optional)
	 * @param	ssoAdapter	KalturaSSOAdapterProfile		SSO Adapter Object (optional)
	 **/
	update: function(ssoAdapterId, ssoAdapter){
		var kparams = new Object();
		kparams.ssoAdapterId = ssoAdapterId;
		kparams.ssoAdapter = ssoAdapter;
		return new KalturaRequestBuilder("ssoadapterprofile", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: subscription.
 **/
var KalturaSubscriptionService = {
	/**
	 * Returns a list of subscriptions requested by Subscription ID or file ID.
	 * @param	filter	KalturaSubscriptionFilter		Filter request (optional, default: null)
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
		return new KalturaRequestBuilder("subscription", "list", kparams);
	},
	
	/**
	 * Returns information about a coupon for subscription.
	 * @param	id	int		subscription id (optional)
	 * @param	code	string		coupon code (optional)
	 **/
	validateCoupon: function(id, code){
		var kparams = new Object();
		kparams.id = id;
		kparams.code = code;
		return new KalturaRequestBuilder("subscription", "validateCoupon", kparams);
	}
}

/**
 *Class definition for the Kaltura service: subscriptionSet.
 **/
var KalturaSubscriptionSetService = {
	/**
	 * Add a new subscriptionSet.
	 * @param	subscriptionSet	KalturaSubscriptionSet		SubscriptionSet Object (optional)
	 **/
	add: function(subscriptionSet){
		var kparams = new Object();
		kparams.subscriptionSet = subscriptionSet;
		return new KalturaRequestBuilder("subscriptionset", "add", kparams);
	},
	
	/**
	 * Delete a subscriptionSet.
	 * @param	id	int		SubscriptionSet Identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("subscriptionset", "delete", kparams);
	},
	
	/**
	 * Get the subscriptionSet according to the Identifier.
	 * @param	id	int		SubscriptionSet Identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("subscriptionset", "get", kparams);
	},
	
	/**
	 * Returns a list of subscriptionSets requested by ids or subscription ids.
	 * @param	filter	KalturaSubscriptionSetFilter		SubscriptionSet filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("subscriptionset", "list", kparams);
	},
	
	/**
	 * Update the subscriptionSet.
	 * @param	id	int		SubscriptionSet Identifier (optional)
	 * @param	subscriptionSet	KalturaSubscriptionSet		SubscriptionSet Object (optional)
	 **/
	update: function(id, subscriptionSet){
		var kparams = new Object();
		kparams.id = id;
		kparams.subscriptionSet = subscriptionSet;
		return new KalturaRequestBuilder("subscriptionset", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: system.
 **/
var KalturaSystemService = {
	/**
	 * Returns current server timestamp.
	 **/
	getTime: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "getTime", kparams);
	},
	
	/**
	 * Returns current server version.
	 **/
	getVersion: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "getVersion", kparams);
	},
	
	/**
	 * Returns true.
	 **/
	ping: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "ping", kparams);
	}
}

/**
 *Class definition for the Kaltura service: tag.
 **/
var KalturaTagService = {
	/**
	 * Add a new tag.
	 * @param	tag	KalturaTag		Tag Object (optional)
	 **/
	add: function(tag){
		var kparams = new Object();
		kparams.tag = tag;
		return new KalturaRequestBuilder("tag", "add", kparams);
	},
	
	/**
	 * Delete an existing tag.
	 * @param	id	int		Tag Identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("tag", "delete", kparams);
	},
	
	/**
	 * Get the list of tags for the partner.
	 * @param	filter	KalturaTagFilter		Filter (optional, default: null)
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
		return new KalturaRequestBuilder("tag", "list", kparams);
	},
	
	/**
	 * Update an existing tag.
	 * @param	id	int		Tag Identifier (optional)
	 * @param	tag	KalturaTag		Tag Object (optional)
	 **/
	update: function(id, tag){
		var kparams = new Object();
		kparams.id = id;
		kparams.tag = tag;
		return new KalturaRequestBuilder("tag", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: timeShiftedTvPartnerSettings.
 **/
var KalturaTimeShiftedTvPartnerSettingsService = {
	/**
	 * Retrieve the account’s time-shifted TV settings (catch-up and C-DVR, Trick-play, Start-over).
	 **/
	get: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("timeshiftedtvpartnersettings", "get", kparams);
	},
	
	/**
	 * Configure the account’s time-shifted TV settings (catch-up and C-DVR, Trick-play, Start-over).
	 * @param	settings	KalturaTimeShiftedTvPartnerSettings		Time shifted TV settings (optional)
	 **/
	update: function(settings){
		var kparams = new Object();
		kparams.settings = settings;
		return new KalturaRequestBuilder("timeshiftedtvpartnersettings", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: topic.
 **/
var KalturaTopicService = {
	/**
	 * Deleted a topic.
	 * @param	id	int		Topic identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("topic", "delete", kparams);
	},
	
	/**
	 * Gets a topic.
	 * @param	id	int		Topic identifier (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("topic", "get", kparams);
	},
	
	/**
	 * Get list of topics.
	 * @param	filter	KalturaTopicFilter		Topics filter (optional, default: null)
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
		return new KalturaRequestBuilder("topic", "list", kparams);
	},
	
	/**
	 * Updates a topic &quot;automatic issue notification&quot; behavior..
	 * @param	id	int		Topic identifier (optional)
	 * @param	automaticIssueNotification	string		Behavior options:
 *	             Inherit = 0: Take value from partner notification settings
 *	             Yes = 1: Issue a notification massage when a new episode is available on the catalog
 *	             No = 2: Do send a notification message when a new episode is available on the catalog (optional, enum: KalturaTopicAutomaticIssueNotification)
	 **/
	updateStatus: function(id, automaticIssueNotification){
		var kparams = new Object();
		kparams.id = id;
		kparams.automaticIssueNotification = automaticIssueNotification;
		return new KalturaRequestBuilder("topic", "updateStatus", kparams);
	}
}

/**
 *Class definition for the Kaltura service: topicNotification.
 **/
var KalturaTopicNotificationService = {
	/**
	 * Add a new topic notification.
	 * @param	topicNotification	KalturaTopicNotification		The topic notification to add (optional)
	 **/
	add: function(topicNotification){
		var kparams = new Object();
		kparams.topicNotification = topicNotification;
		return new KalturaRequestBuilder("topicnotification", "add", kparams);
	},
	
	/**
	 * Delete an existing topic notification.
	 * @param	id	int		ID of topic notification to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("topicnotification", "delete", kparams);
	},
	
	/**
	 * Lists all topic notifications in the system..
	 * @param	filter	KalturaTopicNotificationFilter		Filter options (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("topicnotification", "list", kparams);
	},
	
	/**
	 * Subscribe a user to a topic notification.
	 * @param	topicNotificationId	int		ID of topic notification to subscribe to. (optional)
	 **/
	subscribe: function(topicNotificationId){
		var kparams = new Object();
		kparams.topicNotificationId = topicNotificationId;
		return new KalturaRequestBuilder("topicnotification", "subscribe", kparams);
	},
	
	/**
	 * Unubscribe a user from a topic notification.
	 * @param	topicNotificationId	int		ID of topic notification to unsubscribe from. (optional)
	 **/
	unsubscribe: function(topicNotificationId){
		var kparams = new Object();
		kparams.topicNotificationId = topicNotificationId;
		return new KalturaRequestBuilder("topicnotification", "unsubscribe", kparams);
	},
	
	/**
	 * Update an existing topic notification.
	 * @param	id	int		The topic notification ID to update (optional)
	 * @param	topicNotification	KalturaTopicNotification		The topic notification to update (optional)
	 **/
	update: function(id, topicNotification){
		var kparams = new Object();
		kparams.id = id;
		kparams.topicNotification = topicNotification;
		return new KalturaRequestBuilder("topicnotification", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: topicNotificationMessage.
 **/
var KalturaTopicNotificationMessageService = {
	/**
	 * Add a new topic notification message.
	 * @param	topicNotificationMessage	KalturaTopicNotificationMessage		The topic notification message to add (optional)
	 **/
	add: function(topicNotificationMessage){
		var kparams = new Object();
		kparams.topicNotificationMessage = topicNotificationMessage;
		return new KalturaRequestBuilder("topicnotificationmessage", "add", kparams);
	},
	
	/**
	 * Delete an existing topic notification message.
	 * @param	id	int		ID of topic notification message to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("topicnotificationmessage", "delete", kparams);
	},
	
	/**
	 * Lists all topic notifications in the system..
	 * @param	filter	KalturaTopicNotificationMessageFilter		Filter options (optional, default: null)
	 * @param	pager	KalturaFilterPager		Paging the request (optional, default: null)
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
		return new KalturaRequestBuilder("topicnotificationmessage", "list", kparams);
	},
	
	/**
	 * Update an existing topic notification message.
	 * @param	id	int		The topic notification message ID to update (optional)
	 * @param	topicNotificationMessage	KalturaTopicNotificationMessage		The topic notification message to update (optional)
	 **/
	update: function(id, topicNotificationMessage){
		var kparams = new Object();
		kparams.id = id;
		kparams.topicNotificationMessage = topicNotificationMessage;
		return new KalturaRequestBuilder("topicnotificationmessage", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: transaction.
 **/
var KalturaTransactionService = {
	/**
	 * downgrade specific subscription for a household. entitlements will be updated on the existing subscription end date..
	 * @param	purchase	KalturaPurchase		Purchase properties (optional)
	 **/
	downgrade: function(purchase){
		var kparams = new Object();
		kparams.purchase = purchase;
		return new KalturaRequestBuilder("transaction", "downgrade", kparams);
	},
	
	/**
	 * Retrieve the purchase session identifier.
	 * @param	purchaseSession	KalturaPurchaseSession		Purchase properties (optional)
	 **/
	getPurchaseSessionId: function(purchaseSession){
		var kparams = new Object();
		kparams.purchaseSession = purchaseSession;
		return new KalturaRequestBuilder("transaction", "getPurchaseSessionId", kparams);
	},
	
	/**
	 * Purchase specific product or subscription for a household. Upon successful charge entitlements to use the requested product or subscription are granted..
	 * @param	purchase	KalturaPurchase		Purchase properties (optional)
	 **/
	purchase: function(purchase){
		var kparams = new Object();
		kparams.purchase = purchase;
		return new KalturaRequestBuilder("transaction", "purchase", kparams);
	},
	
	/**
	 * This method shall set the waiver flag on the user entitlement table and the waiver date field to the current date..
	 * @param	assetId	int		Asset identifier (optional)
	 * @param	transactionType	string		The transaction type (optional, enum: KalturaTransactionType)
	 **/
	setWaiver: function(assetId, transactionType){
		var kparams = new Object();
		kparams.assetId = assetId;
		kparams.transactionType = transactionType;
		return new KalturaRequestBuilder("transaction", "setWaiver", kparams);
	},
	
	/**
	 * Updates a pending purchase transaction state..
	 * @param	paymentGatewayId	string		Payment gateway identifier (optional)
	 * @param	externalTransactionId	string		external transaction identifier (optional)
	 * @param	signature	string		Security signature to validate the caller is a payment gateway adapter application (optional)
	 * @param	status	KalturaTransactionStatus		Status properties (optional)
	 **/
	updateStatus: function(paymentGatewayId, externalTransactionId, signature, status){
		var kparams = new Object();
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.externalTransactionId = externalTransactionId;
		kparams.signature = signature;
		kparams.status = status;
		return new KalturaRequestBuilder("transaction", "updateStatus", kparams);
	},
	
	/**
	 * upgrade specific subscription for a household. Upon successful charge entitlements to use the requested product or subscription are granted..
	 * @param	purchase	KalturaPurchase		Purchase properties (optional)
	 **/
	upgrade: function(purchase){
		var kparams = new Object();
		kparams.purchase = purchase;
		return new KalturaRequestBuilder("transaction", "upgrade", kparams);
	},
	
	/**
	 * Verifies PPV/Subscription/Collection client purchase (such as InApp) and entitles the user..
	 * @param	externalReceipt	KalturaExternalReceipt		Receipt properties (optional)
	 **/
	validateReceipt: function(externalReceipt){
		var kparams = new Object();
		kparams.externalReceipt = externalReceipt;
		return new KalturaRequestBuilder("transaction", "validateReceipt", kparams);
	}
}

/**
 *Class definition for the Kaltura service: transactionHistory.
 **/
var KalturaTransactionHistoryService = {
	/**
	 * Gets user or household transaction history..
	 * @param	filter	KalturaTransactionHistoryFilter		Filter by household or user (optional, default: null)
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
		return new KalturaRequestBuilder("transactionhistory", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: tvmRule.
 **/
var KalturaTvmRuleService = {
	/**
	 * Get the list of tvm rules for the partner.
	 * @param	filter	KalturaTvmRuleFilter		TvmRuleFilter Filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("tvmrule", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: unifiedPayment.
 **/
var KalturaUnifiedPaymentService = {
	/**
	 * Returns the data about the next renewal.
	 * @param	id	int		Unified payment ID (optional)
	 **/
	getNextRenewal: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("unifiedpayment", "getNextRenewal", kparams);
	}
}

/**
 *Class definition for the Kaltura service: uploadToken.
 **/
var KalturaUploadTokenService = {
	/**
	 * Adds new upload token to upload a file.
	 * @param	uploadToken	KalturaUploadToken		Upload token details (optional, default: null)
	 **/
	add: function(uploadToken){
		if(!uploadToken)
			uploadToken = null;
		var kparams = new Object();
		if (uploadToken != null)
			kparams.uploadToken = uploadToken;
		return new KalturaRequestBuilder("uploadtoken", "add", kparams);
	},
	
	/**
	 * Upload a file using the upload token id.
	 * @param	uploadTokenId	string		Identifier of existing upload-token (optional)
	 * @param	fileData	HTMLElement		File to upload (optional)
	 **/
	upload: function(uploadTokenId, fileData){
		var kparams = new Object();
		var kfiles = new Object();
		kparams.uploadTokenId = uploadTokenId;
		kfiles.fileData = fileData;
		return new KalturaRequestBuilder("uploadtoken", "upload", kparams, kfiles);
	}
}

/**
 *Class definition for the Kaltura service: userAssetRule.
 **/
var KalturaUserAssetRuleService = {
	/**
	 * Retrieve all the rules (parental, geo, device or user-type) that applies for this user and asset..
	 * @param	filter	KalturaUserAssetRuleFilter		Filter (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("userassetrule", "list", kparams);
	}
}

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

/**
 *Class definition for the Kaltura service: userInterest.
 **/
var KalturaUserInterestService = {
	/**
	 * Insert new user interest for partner user.
	 * @param	userInterest	KalturaUserInterest		User interest Object (optional)
	 **/
	add: function(userInterest){
		var kparams = new Object();
		kparams.userInterest = userInterest;
		return new KalturaRequestBuilder("userinterest", "add", kparams);
	},
	
	/**
	 * Delete new user interest for partner user.
	 * @param	id	string		User interest identifier (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("userinterest", "delete", kparams);
	},
	
	/**
	 * Delete new user interest for partner user.
	 * @param	id	string		User interest identifier (optional)
	 * @param	token	string		User's token identifier (optional)
	 * @param	partnerId	int		Partner identifier (optional)
	 **/
	deleteWithToken: function(id, token, partnerId){
		var kparams = new Object();
		kparams.id = id;
		kparams.token = token;
		kparams.partnerId = partnerId;
		return new KalturaRequestBuilder("userinterest", "deleteWithToken", kparams);
	},
	
	/**
	 * Returns all Engagement for partner.
	 **/
	listAction: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("userinterest", "list", kparams);
	}
}

/**
 *Class definition for the Kaltura service: userLoginPin.
 **/
var KalturaUserLoginPinService = {
	/**
	 * Generate a time and usage expiry login-PIN that can allow a single login per PIN. If an active login-PIN already exists. Calling this API again for same user will add another login-PIN.
	 * @param	secret	string		Additional security parameter for optional enhanced security (optional, default: null)
	 **/
	add: function(secret){
		if(!secret)
			secret = null;
		var kparams = new Object();
		kparams.secret = secret;
		return new KalturaRequestBuilder("userloginpin", "add", kparams);
	},
	
	/**
	 * Immediately deletes a given pre set login pin code for the user..
	 * @param	pinCode	string		Login pin code to expire (optional)
	 **/
	deleteAction: function(pinCode){
		var kparams = new Object();
		kparams.pinCode = pinCode;
		return new KalturaRequestBuilder("userloginpin", "delete", kparams);
	},
	
	/**
	 * Immediately expire all active login-PINs for a user.
	 **/
	deleteAll: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("userloginpin", "deleteAll", kparams);
	},
	
	/**
	 * Set a time and usage expiry login-PIN that can allow a single login per PIN. If an active login-PIN already exists. Calling this API again for same user will add another login-PIN.
	 * @param	pinCode	string		Device Identifier (optional)
	 * @param	secret	string		Additional security parameter to validate the login (optional, default: null)
	 **/
	update: function(pinCode, secret){
		if(!secret)
			secret = null;
		var kparams = new Object();
		kparams.pinCode = pinCode;
		kparams.secret = secret;
		return new KalturaRequestBuilder("userloginpin", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: userRole.
 **/
var KalturaUserRoleService = {
	/**
	 * Creates a new role.
	 * @param	role	KalturaUserRole		Role to add (optional)
	 **/
	add: function(role){
		var kparams = new Object();
		kparams.role = role;
		return new KalturaRequestBuilder("userrole", "add", kparams);
	},
	
	/**
	 * Delete role.
	 * @param	id	int		Role id to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("userrole", "delete", kparams);
	},
	
	/**
	 * Retrieving user roles by identifiers, if filter is empty, returns all partner roles.
	 * @param	filter	KalturaUserRoleFilter		User roles filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("userrole", "list", kparams);
	},
	
	/**
	 * Update role.
	 * @param	id	int		Role Id (optional)
	 * @param	role	KalturaUserRole		Role to Update (optional)
	 **/
	update: function(id, role){
		var kparams = new Object();
		kparams.id = id;
		kparams.role = role;
		return new KalturaRequestBuilder("userrole", "update", kparams);
	}
}

/**
 *Class definition for the Kaltura service: userSegment.
 **/
var KalturaUserSegmentService = {
	/**
	 * Adds a segment to a user.
	 * @param	userSegment	KalturaUserSegment		User segment (optional)
	 **/
	add: function(userSegment){
		var kparams = new Object();
		kparams.userSegment = userSegment;
		return new KalturaRequestBuilder("usersegment", "add", kparams);
	},
	
	/**
	 * Deletes a segment from a user.
	 * @param	userId	string		User id (optional)
	 * @param	segmentId	int		Segment id (optional)
	 **/
	deleteAction: function(userId, segmentId){
		var kparams = new Object();
		kparams.userId = userId;
		kparams.segmentId = segmentId;
		return new KalturaRequestBuilder("usersegment", "delete", kparams);
	},
	
	/**
	 * Retrieve all the segments that apply for given user.
	 * @param	filter	KalturaUserSegmentFilter		Filter (optional)
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("usersegment", "list", kparams);
	}
}
// ===================================================================================================
//                           _  __     _ _
//                          | |/ /__ _| | |_ _  _ _ _ __ _
//                          | ' </ _` | |  _| || | '_/ _` |
//                          |_|\_\__,_|_|\__|\_,_|_| \__,_|
//
// This file is part of the Kaltura Collaborative Media Suite which allows users
// to do with audio, video, and animation what Wiki platfroms allow them to do with
// text.
//
// Copyright (C) 2006-2011  Kaltura Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// @ignore
// ===================================================================================================

/**
 * Utility global method for extending javascript for allowing easier Inheritance.
 * This method should be called directly after defining the class or object, before extending it's prototype. 
 * @param parentClassOrObject		the parent class or object to inherit from.
 * @return	the object or class being created (the child class).
 */
Function.prototype.inheritsFrom = function( parentClassOrObject ){ 
	if ( parentClassOrObject.constructor == Function ) 
	{ 
		//Normal Inheritance 
		this.prototype = new parentClassOrObject;
		this.prototype.constructor = this;
		this.prototype.parentClass = parentClassOrObject.prototype;
	} 
	else 
	{ 
		//Pure Virtual Inheritance 
		this.prototype = parentClassOrObject;
		this.prototype.constructor = this;
		this.prototype.parentClass = parentClassOrObject;
	} 
	return this;
}

/**
 * Sorts an array by key, maintaining key to data correlations. This is useful mainly for associative arrays. 
 * @param arr 	The array to sort.
 * @return		The sorted array.
 */
function ksort(arr) {
  var sArr = [];
  var tArr = [];
  var n = 0;
  for (i in arr)
	  tArr[n++] = i+' |'+arr[i];
  tArr = tArr.sort();
  for (var i=0; i<tArr.length; i++) {
	var x = tArr[i].split(' |');
    sArr[x[0]] = x[1];
  }
  return sArr;
}

/**
 * Implement to get Kaltura Client logs
 * 
 */
function IKalturaLogger(){
}
IKalturaLogger.prototype.log = function(msg){
	if (console && console.log){
		console.log(msg);
	}
};

/**
 * Kaltura client constructor
 * 
 */
function KalturaClientBase(){
}

/**
 * Kaltura client init
 * @param KalturaConfiguration config
 */
KalturaClientBase.prototype.init = function(config){
    this.config = config;
    var logger = this.config.getLogger();
	if (logger) {
		this.shouldLog = true;	
	}
};

KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_JSON = 1;
KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_XML = 2;
KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_PHP = 3;
KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_JSONP = 9;

/**
 * @param KalturaConfiguration The Kaltura Client - this is the facade through which all service actions should be called.
 */
KalturaClientBase.prototype.config = null;
	
/**
 * @param object Kaltura general request arguments
 */
KalturaClientBase.prototype.requestData = {};
	
/**
 * @param boolean	should the client log all actions.
 */
KalturaClientBase.prototype.shouldLog = false;
	
/**
 * getter for the referenced configuration object. 
 * @return KalturaConfiguration
 */
KalturaClientBase.prototype.getConfig = function(){
	return this.config;
};

/**
 * @param KalturaConfiguration config	setter for the referenced configuration object.
 */
KalturaClientBase.prototype.setConfig = function(config){
	this.config = config;
	logger = this.config.getLogger();
	if (logger instanceof IKalturaLogger){
		this.shouldLog = true;	
	}
};

/**
 * return a new multi-request builder
 */
KalturaClientBase.prototype.startMultiRequest = function(){
	return new KalturaMultiRequestBuilder();
};

/**
 * @param string msg	client logging utility. 
 */
KalturaClientBase.prototype.log = function(msg){
	if (this.shouldLog)
		this.config.getLogger().log(msg);
};

/**
 * Constructs new Kaltura configuration object
 */
function KalturaConfiguration(){
}

KalturaConfiguration.prototype.logger		= null;
KalturaConfiguration.prototype.serviceUrl	= 'http://www.kaltura.com';
KalturaConfiguration.prototype.serviceBase 	= '/api_v3/service';

/**
 * Set logger to get kaltura client debug logs.
 * @param IKalturaLogger log
 */
KalturaConfiguration.prototype.setLogger = function(log){
	this.logger = log;
};

/**
 * Gets the logger (Internal client use)
 * @return IKalturaLogger
 */
KalturaConfiguration.prototype.getLogger = function(){
	return this.logger;
};

function KalturaRequestBuilder(service, action, data, files){
	if(!service)
		return;
	
	this.service = service;
	this.action = action;
	this.data = data;
	this.files = files;
	this.requestData = {};
}

KalturaRequestBuilder.prototype.callback = null;

/**
 * Sign array of parameters for requests validation (CRC).
 * @param array params		service action call parameters that will be sent on the request.
 * @return string			a hashed signed signature that can identify the sent request parameters.
 */
KalturaRequestBuilder.prototype.signature = function(params){
	params = ksort(params);
	var str = '';
	for(var v in params) {
		var k = params[v];
		if(typeof(k) === 'object' || $.isArray(k))
			k = this.signature(k);
		
		str += v + k;
	}
	return MD5(str);
};

/**
 * send the http request.
 * @return array 							the results and errors inside an array.
 */
KalturaRequestBuilder.prototype.doHttpRequest = function(client){
	var json = this.getData(true);
	var callback = this.callback;
	var url = this.getUrl(client);

	client.log('URL: ' + url);
	client.log('Request JSON: ' + JSON.stringify(json));
	
	var data;
	var processData;
	var contentType;
	
	if(this.files) {
		processData = false;
		contentType = false;
		data = new FormData();
		data.append("json", JSON.stringify(json));
		for(var paramName in this.files) {
			data.append(paramName, this.files[paramName].files[0]);
		}
	}
	else {
		processData = true;
		contentType = 'application/json';
		data = JSON.stringify(json);
	}
	
	$.ajax({
	    type: 'POST',
	    url: url,
	    crossDomain: true,
	    data: data,
	    processData: processData,
	    contentType: contentType,
	    dataType: 'json',
	    success: function(json, textStatus, jqXHR) {
	    	client.log('Response JSON: ' + JSON.stringify(json));
	    	
	    	if(json && typeof(json) === 'object' && json.code && json.message){
		    	if(callback)
		    		callback(false, json);
		    	else
		    		throw new Error(json.message);
	    	}
	    	else if(callback)
	    		callback(true, json);
	    },
	    error: function (responseData, textStatus, errorThrown) {
	    	if(callback)
	    		callback(false, errorThrown);
	    	else
	    		throw errorThrown;
	    }
	});
};

KalturaRequestBuilder.prototype.sign = function(){
	var signature = this.signature(this.data);
	this.data.kalsig = signature;
};

KalturaRequestBuilder.prototype.getUrl = function(client){
	var url = client.config.serviceUrl + client.config.serviceBase;
	url += '/' + this.service + '/action/' + this.action;
	
	return url;
};

KalturaRequestBuilder.prototype.getData = function(sign){
	this.data.format = KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_JSON;

	$.extend(this.data, this.requestData);

	if(sign)
		this.sign();
	
	return this.data;
};

KalturaRequestBuilder.prototype.execute = function(client, callback){
	var requestData = $.extend({}, client.requestData); // clone client requestData
	this.requestData = $.extend(requestData, this.requestData); // merge client requestData with current requestData
	
	if(callback)
		this.completion(callback);
	
	this.doHttpRequest(client);
};

KalturaRequestBuilder.prototype.completion = function(callback){
	this.callback = callback;
	return this;
};

KalturaRequestBuilder.prototype.add = function(requestBuilder){
	var multiRequestBuilder = new KalturaMultiRequestBuilder();
	multiRequestBuilder.add(this);
	multiRequestBuilder.add(requestBuilder);
	return multiRequestBuilder;
};



function KalturaMultiRequestBuilder(){
	this.requestData = {};
	this.requests = [];
	this.generalCallback = null;
	
	var This = this;
	This.callback = function(success, results){
		if(!success)
			throw new Error(results);

		for(var i = 0; i < This.requests.length; i++){
				if(This.requests[i].callback){
					if(results[i] && typeof(results[i]) == 'object' && results[i].code && results[i].message)
						This.requests[i].callback(false, results[i]);
					else
						This.requests[i].callback(true, results[i]);
				}
		}
		
		if(This.generalCallback) {
			if(results && typeof(results) == 'object' && results.code && results.message)
				This.generalCallback(false, results)
			else
				This.generalCallback(true, results)
		}
	};
}

KalturaMultiRequestBuilder.inheritsFrom (KalturaRequestBuilder);

KalturaMultiRequestBuilder.prototype.completion = function(callback){
	this.generalCallback = callback;
	
	return this;
};

KalturaMultiRequestBuilder.prototype.add = function(requestBuilder){
	this.requests.push(requestBuilder);
	return this;
};

KalturaMultiRequestBuilder.prototype.getUrl = function(client){
	var url = client.config.serviceUrl + client.config.serviceBase;
	url += '/multirequest';
	
	return url;
};

KalturaMultiRequestBuilder.prototype.getData = function(){
	this.data = {
		format: KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_JSON
	}
	
	for(var i = 0; i < this.requests.length; i++){
		this.data[i] = this.requests[i].getData();
		this.data[i].service = this.requests[i].service;
		this.data[i].action = this.requests[i].action;
	}

	$.extend(this.data, this.requestData);
	
	this.sign();
	return this.data;
};

/**
*
*  MD5 (Message-Digest Algorithm)
*  http://www.webtoolkit.info/
*
**/
 
var MD5 = function (string) {
 
	function RotateLeft(lValue, iShiftBits) {
		return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
	}
 
	function AddUnsigned(lX,lY) {
		var lX4,lY4,lX8,lY8,lResult;
		lX8 = (lX & 0x80000000);
		lY8 = (lY & 0x80000000);
		lX4 = (lX & 0x40000000);
		lY4 = (lY & 0x40000000);
		lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
		if (lX4 & lY4) {
			return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
		}
		if (lX4 | lY4) {
			if (lResult & 0x40000000) {
				return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
			} else {
				return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
			}
		} else {
			return (lResult ^ lX8 ^ lY8);
		}
 	}
 
 	function F(x,y,z) { return (x & y) | ((~x) & z); }
 	function G(x,y,z) { return (x & z) | (y & (~z)); }
 	function H(x,y,z) { return (x ^ y ^ z); }
	function I(x,y,z) { return (y ^ (x | (~z))); }
 
	function FF(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function GG(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function HH(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function II(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function ConvertToWordArray(string) {
		var lWordCount;
		var lMessageLength = string.length;
		var lNumberOfWords_temp1=lMessageLength + 8;
		var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
		var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
		var lWordArray=Array(lNumberOfWords-1);
		var lBytePosition = 0;
		var lByteCount = 0;
		while ( lByteCount < lMessageLength ) {
			lWordCount = (lByteCount-(lByteCount % 4))/4;
			lBytePosition = (lByteCount % 4)*8;
			lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
			lByteCount++;
		}
		lWordCount = (lByteCount-(lByteCount % 4))/4;
		lBytePosition = (lByteCount % 4)*8;
		lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
		lWordArray[lNumberOfWords-2] = lMessageLength<<3;
		lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
		return lWordArray;
	};
 
	function WordToHex(lValue) {
		var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
		for (lCount = 0;lCount<=3;lCount++) {
			lByte = (lValue>>>(lCount*8)) & 255;
			WordToHexValue_temp = "0" + lByte.toString(16);
			WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
		}
		return WordToHexValue;
	};
 
	function Utf8Encode(string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
 
		for (var n = 0; n < string.length; n++) {
 
			var c = string.charCodeAt(n);
 
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
 
		}
 
		return utftext;
	};
 
	var x=Array();
	var k,AA,BB,CC,DD,a,b,c,d;
	var S11=7, S12=12, S13=17, S14=22;
	var S21=5, S22=9 , S23=14, S24=20;
	var S31=4, S32=11, S33=16, S34=23;
	var S41=6, S42=10, S43=15, S44=21;
 
	string = Utf8Encode(string);
 
	x = ConvertToWordArray(string);
 
	a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
 
	for (k=0;k<x.length;k+=16) {
		AA=a; BB=b; CC=c; DD=d;
		a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
		d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
		c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
		b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
		a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
		d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
		c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
		b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
		a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
		d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
		c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
		b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
		a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
		d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
		c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
		b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
		a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
		d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
		c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
		b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
		a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
		d=GG(d,a,b,c,x[k+10],S22,0x2441453);
		c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
		b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
		a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
		d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
		c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
		b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
		a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
		d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
		c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
		b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
		a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
		d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
		c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
		b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
		a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
		d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
		c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
		b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
		a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
		d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
		c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
		b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
		a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
		d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
		c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
		b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
		a=II(a,b,c,d,x[k+0], S41,0xF4292244);
		d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
		c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
		b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
		a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
		d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
		c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
		b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
		a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
		d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
		c=II(c,d,a,b,x[k+6], S43,0xA3014314);
		b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
		a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
		d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
		c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
		b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
		a=AddUnsigned(a,AA);
		b=AddUnsigned(b,BB);
		c=AddUnsigned(c,CC);
		d=AddUnsigned(d,DD);
	}
 
	var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
 
	return temp.toLowerCase();
}

/**
 * The Kaltura Client - this is the facade through which all service actions should be called.
 * @param config the Kaltura configuration object holding partner credentials (type: KalturaConfiguration).
 */
function KalturaClient(config){
	this.init(config);
	this.setClientTag('ajax:20-01-15');
	this.setApiVersion('5.2.6.6120');
}
KalturaClient.inheritsFrom (KalturaClientBase);
/**
 * The client constructor.
 * @param config the Kaltura configuration object holding partner credentials (type: KalturaConfiguration).
 */
KalturaClient.prototype.init = function(config){
	//call the super constructor:
	KalturaClientBase.prototype.init.apply(this, arguments);
};

/**
 * Client tag
 * 
 * @param string $clientTag
 */
KalturaClient.prototype.setClientTag = function(clientTag){
	this.requestData.clientTag = clientTag;
};

/**
 * Client tag
 * 
 * @return string
 */
KalturaClient.prototype.getClientTag = function(){
	return this.requestData.clientTag;
};

/**
 * API Version
 * 
 * @param string $apiVersion
 */
KalturaClient.prototype.setApiVersion = function(apiVersion){
	this.requestData.apiVersion = apiVersion;
};

/**
 * API Version
 * 
 * @return string
 */
KalturaClient.prototype.getApiVersion = function(){
	return this.requestData.apiVersion;
};

/**
 * Impersonated partner id
 * 
 * @param int $partnerId
 */
KalturaClient.prototype.setPartnerId = function(partnerId){
	this.requestData.partnerId = partnerId;
};

/**
 * Impersonated partner id
 * 
 * @return int
 */
KalturaClient.prototype.getPartnerId = function(){
	return this.requestData.partnerId;
};

/**
 * Impersonated user id
 * 
 * @param int $userId
 */
KalturaClient.prototype.setUserId = function(userId){
	this.requestData.userId = userId;
};

/**
 * Impersonated user id
 * 
 * @return int
 */
KalturaClient.prototype.getUserId = function(){
	return this.requestData.userId;
};

/**
 * Content language
 * 
 * @param string $language
 */
KalturaClient.prototype.setLanguage = function(language){
	this.requestData.language = language;
};

/**
 * Content language
 * 
 * @return string
 */
KalturaClient.prototype.getLanguage = function(){
	return this.requestData.language;
};

/**
 * Content currency
 * 
 * @param string $currency
 */
KalturaClient.prototype.setCurrency = function(currency){
	this.requestData.currency = currency;
};

/**
 * Content currency
 * 
 * @return string
 */
KalturaClient.prototype.getCurrency = function(){
	return this.requestData.currency;
};

/**
 * Kaltura API session
 * 
 * @param string $ks
 */
KalturaClient.prototype.setKs = function(ks){
	this.requestData.ks = ks;
};

/**
 * Kaltura API session
 * 
 * @return string
 */
KalturaClient.prototype.getKs = function(){
	return this.requestData.ks;
};

/**
 * Kaltura API session
 * 
 * @param string $sessionId
 */
KalturaClient.prototype.setSessionId = function(sessionId){
	this.requestData.ks = sessionId;
};

/**
 * Kaltura API session
 * 
 * @return string
 */
KalturaClient.prototype.getSessionId = function(){
	return this.requestData.ks;
};

/**
 * Abort the Multireuqset call if any error occurs in one of the requests
 * 
 * @param bool $abortOnError
 */
KalturaClient.prototype.setAbortOnError = function(abortOnError){
	this.requestData.abortOnError = abortOnError;
};

/**
 * Abort the Multireuqset call if any error occurs in one of the requests
 * 
 * @return bool
 */
KalturaClient.prototype.getAbortOnError = function(){
	return this.requestData.abortOnError;
};

/**
 * Abort all following requests if current request has an error
 * 
 * @param bool $abortAllOnError
 */
KalturaClient.prototype.setAbortAllOnError = function(abortAllOnError){
	this.requestData.abortAllOnError = abortAllOnError;
};

/**
 * Abort all following requests if current request has an error
 * 
 * @return bool
 */
KalturaClient.prototype.getAbortAllOnError = function(){
	return this.requestData.abortAllOnError;
};

/**
 * Skip current request according to skip condition
 * 
 * @param KalturaSkipCondition $skipCondition
 */
KalturaClient.prototype.setSkipCondition = function(skipCondition){
	this.requestData.skipCondition = skipCondition;
};

/**
 * Skip current request according to skip condition
 * 
 * @return KalturaSkipCondition
 */
KalturaClient.prototype.getSkipCondition = function(){
	return this.requestData.skipCondition;
};

/**
 * Client tag
 * 
 * @param string $clientTag
 */
KalturaRequestBuilder.prototype.setClientTag = function(clientTag){
	this.requestData.clientTag = clientTag;
};

/**
 * Client tag
 * 
 * @return string
 */
KalturaRequestBuilder.prototype.getClientTag = function(){
	return this.requestData.clientTag;
};

/**
 * API Version
 * 
 * @param string $apiVersion
 */
KalturaRequestBuilder.prototype.setApiVersion = function(apiVersion){
	this.requestData.apiVersion = apiVersion;
};

/**
 * API Version
 * 
 * @return string
 */
KalturaRequestBuilder.prototype.getApiVersion = function(){
	return this.requestData.apiVersion;
};

/**
 * Impersonated partner id
 * 
 * @param int $partnerId
 */
KalturaRequestBuilder.prototype.setPartnerId = function(partnerId){
	this.requestData.partnerId = partnerId;
};

/**
 * Impersonated partner id
 * 
 * @return int
 */
KalturaRequestBuilder.prototype.getPartnerId = function(){
	return this.requestData.partnerId;
};

/**
 * Impersonated user id
 * 
 * @param int $userId
 */
KalturaRequestBuilder.prototype.setUserId = function(userId){
	this.requestData.userId = userId;
};

/**
 * Impersonated user id
 * 
 * @return int
 */
KalturaRequestBuilder.prototype.getUserId = function(){
	return this.requestData.userId;
};

/**
 * Content language
 * 
 * @param string $language
 */
KalturaRequestBuilder.prototype.setLanguage = function(language){
	this.requestData.language = language;
};

/**
 * Content language
 * 
 * @return string
 */
KalturaRequestBuilder.prototype.getLanguage = function(){
	return this.requestData.language;
};

/**
 * Content currency
 * 
 * @param string $currency
 */
KalturaRequestBuilder.prototype.setCurrency = function(currency){
	this.requestData.currency = currency;
};

/**
 * Content currency
 * 
 * @return string
 */
KalturaRequestBuilder.prototype.getCurrency = function(){
	return this.requestData.currency;
};

/**
 * Kaltura API session
 * 
 * @param string $ks
 */
KalturaRequestBuilder.prototype.setKs = function(ks){
	this.requestData.ks = ks;
};

/**
 * Kaltura API session
 * 
 * @return string
 */
KalturaRequestBuilder.prototype.getKs = function(){
	return this.requestData.ks;
};

/**
 * Kaltura API session
 * 
 * @param string $sessionId
 */
KalturaRequestBuilder.prototype.setSessionId = function(sessionId){
	this.requestData.ks = sessionId;
};

/**
 * Kaltura API session
 * 
 * @return string
 */
KalturaRequestBuilder.prototype.getSessionId = function(){
	return this.requestData.ks;
};

/**
 * Response profile - this attribute will be automatically unset after every API call
 * 
 * @param KalturaBaseResponseProfile $responseProfile
 */
KalturaRequestBuilder.prototype.setResponseProfile = function(responseProfile){
	this.requestData.responseProfile = responseProfile;
};

/**
 * Response profile - this attribute will be automatically unset after every API call
 * 
 * @return KalturaBaseResponseProfile
 */
KalturaRequestBuilder.prototype.getResponseProfile = function(){
	return this.requestData.responseProfile;
};

/**
 * Abort the Multireuqset call if any error occurs in one of the requests
 * 
 * @param bool $abortOnError
 */
KalturaRequestBuilder.prototype.setAbortOnError = function(abortOnError){
	this.requestData.abortOnError = abortOnError;
};

/**
 * Abort the Multireuqset call if any error occurs in one of the requests
 * 
 * @return bool
 */
KalturaRequestBuilder.prototype.getAbortOnError = function(){
	return this.requestData.abortOnError;
};

/**
 * Abort all following requests if current request has an error
 * 
 * @param bool $abortAllOnError
 */
KalturaRequestBuilder.prototype.setAbortAllOnError = function(abortAllOnError){
	this.requestData.abortAllOnError = abortAllOnError;
};

/**
 * Abort all following requests if current request has an error
 * 
 * @return bool
 */
KalturaRequestBuilder.prototype.getAbortAllOnError = function(){
	return this.requestData.abortAllOnError;
};

/**
 * Skip current request according to skip condition
 * 
 * @param KalturaSkipCondition $skipCondition
 */
KalturaRequestBuilder.prototype.setSkipCondition = function(skipCondition){
	this.requestData.skipCondition = skipCondition;
};

/**
 * Skip current request according to skip condition
 * 
 * @return KalturaSkipCondition
 */
KalturaRequestBuilder.prototype.getSkipCondition = function(){
	return this.requestData.skipCondition;
};


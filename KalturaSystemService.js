
/**
 *Class definition for the Kaltura service: system.
 **/
var KalturaSystemService = {
	/**
	 * Clear local server cache.
	 * @param	clearCacheAction	string		clear cache action to perform, possible values: clear_all / keys / getKey (optional, default: null)
	 * @param	key	string		key to get in case you send action getKey (optional, default: null)
	 **/
	clearLocalServerCache: function(clearCacheAction, key){
		if(!clearCacheAction)
			clearCacheAction = null;
		if(!key)
			key = null;
		var kparams = new Object();
		kparams.clearCacheAction = clearCacheAction;
		kparams.key = key;
		return new KalturaRequestBuilder("system", "clearLocalServerCache", kparams);
	},
	
	/**
	 * Returns the current layered cache group config of the sent groupId. You need to send groupId only if you wish to get it for a specific groupId and not the one the KS belongs to..
	 * @param	groupId	int		groupId (optional)
	 **/
	getLayeredCacheGroupConfig: function(groupId){
		if(!groupId)
			groupId = 0;
		var kparams = new Object();
		kparams.groupId = groupId;
		return new KalturaRequestBuilder("system", "getLayeredCacheGroupConfig", kparams);
	},
	
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
	 * Returns true if version has been incremented successfully or false otherwise. You need to send groupId only if you wish to increment for a specific groupId and not the one the KS belongs to..
	 * @param	groupId	int		groupId (optional)
	 **/
	incrementLayeredCacheGroupConfigVersion: function(groupId){
		if(!groupId)
			groupId = 0;
		var kparams = new Object();
		kparams.groupId = groupId;
		return new KalturaRequestBuilder("system", "incrementLayeredCacheGroupConfigVersion", kparams);
	},
	
	/**
	 * Returns true if the invalidation key was invalidated successfully or false otherwise..
	 * @param	key	string		the invalidation key to invalidate (optional)
	 **/
	invalidateLayeredCacheInvalidationKey: function(key){
		var kparams = new Object();
		kparams.key = key;
		return new KalturaRequestBuilder("system", "invalidateLayeredCacheInvalidationKey", kparams);
	},
	
	/**
	 * Returns true.
	 **/
	ping: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("system", "ping", kparams);
	}
}

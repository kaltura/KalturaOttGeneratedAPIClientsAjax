
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

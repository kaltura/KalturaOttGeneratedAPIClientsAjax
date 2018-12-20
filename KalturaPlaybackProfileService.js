
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

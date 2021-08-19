
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
	 * @param	extraParams	map		extra params (optional, default: null)
	 **/
	login: function(partnerId, token, type, udid, extraParams){
		if(!udid)
			udid = null;
		if(!extraParams)
			extraParams = null;
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.token = token;
		kparams.type = type;
		kparams.udid = udid;
		if (extraParams != null)
			kparams.extraParams = extraParams;
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

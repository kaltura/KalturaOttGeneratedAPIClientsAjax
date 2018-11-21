
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
	 * Retrieve user by external identifier or username or if filter is null all user in the master or the user itself.
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

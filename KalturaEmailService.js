
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

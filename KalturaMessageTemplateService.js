
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

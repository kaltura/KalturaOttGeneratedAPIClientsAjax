
/**
 *Class definition for the Kaltura service: partner.
 **/
var KalturaPartnerService = {
	/**
	 * Add a partner with default user.
	 * @param	partner	KalturaPartner		partner (optional)
	 * @param	partnerSetup	KalturaPartnerSetup		mandatory parameters to create partner (optional)
	 **/
	add: function(partner, partnerSetup){
		var kparams = new Object();
		kparams.partner = partner;
		kparams.partnerSetup = partnerSetup;
		return new KalturaRequestBuilder("partner", "add", kparams);
	},
	
	/**
	 * Internal API !!! Delete Partner.
	 * @param	id	int		Partner id (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("partner", "delete", kparams);
	},
	
	/**
	 * Returns a login session for external system (like OVP).
	 **/
	externalLogin: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("partner", "externalLogin", kparams);
	},
	
	/**
	 * Internal API !!! Returns the list of active Partners.
	 * @param	filter	KalturaPartnerFilter		Filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("partner", "list", kparams);
	}
}

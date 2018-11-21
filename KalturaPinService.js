
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

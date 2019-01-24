
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

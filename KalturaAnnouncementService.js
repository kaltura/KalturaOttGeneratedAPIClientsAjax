
/**
 *Class definition for the Kaltura service: announcement.
 **/
var KalturaAnnouncementService = {
	/**
	 * Add a new future scheduled system announcement push notification.
	 * @param	announcement	KalturaAnnouncement		The announcement to be added.
 *	            timezone parameter should be taken from the 'name of timezone' from: https://msdn.microsoft.com/en-us/library/ms912391(v=winembedded.11).aspx
 *	            Recipients values: All, LoggedIn, Guests (optional)
	 **/
	add: function(announcement){
		var kparams = new Object();
		kparams.announcement = announcement;
		return new KalturaRequestBuilder("announcement", "add", kparams);
	},
	
	/**
	 * Delete an existing announcing. Announcement cannot be delete while being sent..
	 * @param	id	int		Id of the announcement. (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("announcement", "delete", kparams);
	},
	
	/**
	 * Enable system announcements.
	 **/
	enableSystemAnnouncements: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("announcement", "enableSystemAnnouncements", kparams);
	},
	
	/**
	 * Lists all announcements in the system..
	 * @param	filter	KalturaAnnouncementFilter		Filter object (optional)
	 * @param	pager	KalturaFilterPager		Paging the request (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("announcement", "list", kparams);
	},
	
	/**
	 * Update an existing future system announcement push notification. Announcement can only be updated only before sending.
	 * @param	announcementId	int		The announcement identifier (optional)
	 * @param	announcement	KalturaAnnouncement		The announcement to update.
 *	            timezone parameter should be taken from the 'name of timezone' from: https://msdn.microsoft.com/en-us/library/ms912391(v=winembedded.11).aspx
 *	            Recipients values: All, LoggedIn, Guests (optional)
	 **/
	update: function(announcementId, announcement){
		var kparams = new Object();
		kparams.announcementId = announcementId;
		kparams.announcement = announcement;
		return new KalturaRequestBuilder("announcement", "update", kparams);
	},
	
	/**
	 * Update a system announcement status.
	 * @param	id	int		Id of the announcement. (optional)
	 * @param	status	bool		Status to update to. (optional)
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("announcement", "updateStatus", kparams);
	}
}

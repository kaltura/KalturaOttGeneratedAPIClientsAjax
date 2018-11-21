
/**
 *Class definition for the Kaltura service: exportTask.
 **/
var KalturaExportTaskService = {
	/**
	 * Adds a new bulk export task.
	 * @param	task	KalturaExportTask		The task model to add (optional)
	 **/
	add: function(task){
		var kparams = new Object();
		kparams.task = task;
		return new KalturaRequestBuilder("exporttask", "add", kparams);
	},
	
	/**
	 * Deletes an existing bulk export task by task identifier.
	 * @param	id	int		The identifier of the task to delete (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("exporttask", "delete", kparams);
	},
	
	/**
	 * Gets an existing bulk export task by task identifier.
	 * @param	id	int		The identifier of the task to get (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("exporttask", "get", kparams);
	},
	
	/**
	 * Returns bulk export tasks by tasks identifiers.
	 * @param	filter	KalturaExportTaskFilter		Bulk export tasks filter (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("exporttask", "list", kparams);
	},
	
	/**
	 * Updates an existing bulk export task by task identifier.
	 * @param	id	int		The task id to update (optional)
	 * @param	task	KalturaExportTask		The task model to update (optional)
	 **/
	update: function(id, task){
		var kparams = new Object();
		kparams.id = id;
		kparams.task = task;
		return new KalturaRequestBuilder("exporttask", "update", kparams);
	}
}

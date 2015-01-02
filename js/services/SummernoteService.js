app.service('SummernoteService', function (toaster) {
	var service = {};

	service.no_image_config = {
		height: 300,
		toolbar: [
			['fullscreen', ['undo', 'redo']],
			['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
			['color', ['color']],
			['fontsize', ['fontsize']],
			['para', ['ul', 'ol', 'paragraph']],
			['insert', ['link', 'hr', 'table']]
		]
	};

	return service;
});
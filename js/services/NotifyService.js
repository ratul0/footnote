app.service('NotifyService', ['toaster', function (toaster) {
	var service = {};
	
	service.success = function (successMsg) {
		toaster.pop('success', '', successMsg);
	};

	service.warning = function (warningMsg) {
		toaster.pop('warning', '', warningMsg);
	};

	service.error = function (errorMsg) {
		if(angular.isObject(errorMsg))
		{
			var fullErrorMsg = '';
    		angular.forEach(errorMsg, function (error) {
    			angular.forEach(error, function (oneErrorMsg) {
    				fullErrorMsg += oneErrorMsg+"\n";
    			});
    		});

    		toaster.pop('error', '', fullErrorMsg);
		}
		else
		{
			toaster.pop('error', '', errorMsg);
		}
	};

	service.info = function (infoMsg) {
		toaster.pop('info', '', infoMsg);
	};

	return service;
}]);
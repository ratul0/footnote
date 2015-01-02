app.service('AuthService', function ($http, $location, $q) {
	var service = {};
	
	service.createAccount = function (newAccount) {
		return $http.post('api/public/register', newAccount);
	};

	service.login = function (account) {
		return $http.post('api/public/login', account);
	};

	service.logout = function () {
		return $http.get('api/public/logout');
	};

	service.currentUser = function () {
		return $http.get('api/public/current-user');
	};

	service.is = function (type) {
		var deferred = $q.defer();

		$http.get('api/public/current-user')
			.success(function(response) {
				if(type == 'guest')
				{
					if(response.data == 'not-logged-in') deferred.resolve();
					else deferred.reject('logged-in');	
				}
				else if(type == 'auth')
				{
					if(response.data == 'not-logged-in') deferred.reject("not-logged-in");
					else deferred.resolve();
				}
			});

		return deferred.promise;
	}

	

	return service;
});
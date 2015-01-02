app.controller('LogoutCtrl', ['$scope', 'NotifyService', 'AuthService', '$location', function ($scope, NotifyService, AuthService, $location) {

    $scope.doLogout = function (account) {
    	AuthService.logout()
    		.success(function(response) {
	    		NotifyService.success(response.msg);
	    		$location.path('/login');
	    });
    }

    $scope.doLogout();
}]);
app.controller('LoginCtrl', ['$scope', 'NotifyService', 'AuthService', '$location', function ($scope, NotifyService, AuthService, $location) {
    $scope.$emit('changePageTitle', 'Login');

    $scope.doLogin = function (account) {
    	AuthService.login(account)
    		.success(function(response) {
	    		NotifyService.success(response.msg);
	    		$location.path('/');
	    	})
	    	.error(function(response) {
	    		NotifyService.error(response.msg);
	    	});
    }
}]);
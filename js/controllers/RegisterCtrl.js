app.controller('RegisterCtrl', ['$scope', 'NotifyService', 'AuthService', '$location','$q', function ($scope, NotifyService, AuthService, $location,$q) {

    $scope.$emit('changePageTitle', 'Register');

    $scope.newAccount = {};
    
    //console.log($scope.newAccount);
    $scope.doCreateAccount = function(newAccount) {
        //console.log($scope.newAccount);
    	AuthService.createAccount(newAccount)
    		.success(function(response) {
	    		NotifyService.success(response.msg);
	    		$location.path('/');
	    	})
	    	.error(function(response) {
	    		NotifyService.error(response.msg);
	    	});
    }

}]);
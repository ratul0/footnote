app.controller('BaseCtrl', function ($scope, $rootScope, siteName, NotifyService, AuthService) {
    $scope.siteName = siteName;
    $scope.date = new Date();
    $rootScope.currentUser = {};

    // default page title
    $scope.pageTitle = 'Home';

    // change page title on page change
    $scope.$on('changePageTitle', function(event, newPageTitle) {
    	$scope.pageTitle = newPageTitle;
    });

    $scope.getCurrentUser = function () {
    	AuthService.currentUser()
			.success(function(response) {
				if(response.data == 'not-logged-in')
				{
					$rootScope.currentUser = false;
				}
				else
				{
					$rootScope.currentUser = response.data;
				}
			});
    }

    $rootScope.$on("$routeChangeStart", function (event, current, previous) {
		$scope.getCurrentUser();
		//console.log($rootScope.currentUser);
	});


	$rootScope.$on("$routeChangeError", function (event, current, previous, msg) {

		if(msg == 'not-logged-in')
		{
			NotifyService.error('You need to log-in first');
			$location.path('/login');
		}
		else if(msg == 'logged-in')
		{
			NotifyService.error('You are already logged in');
			$location.path('/');
		}
		else if(msg == 'not-authorized')
		{
			NotifyService.error('You are not authrized to view this page');
			$location.path('/');
		}

		// same check permissions/roles
	});


    



});
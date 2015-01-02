app.controller('HomeCtrl', ['$scope','NotifyService', function($scope,NotifyService){
	$scope.$emit('changePageTitle','Home');
}])
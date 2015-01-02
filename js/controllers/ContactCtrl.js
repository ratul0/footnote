app.controller('ContactCtrl', ['$scope', 'NotifyService', function ($scope, NotifyService) {
    $scope.$emit('changePageTitle', 'Contact');

    $scope.doContact = function (newContact) {
    	//alert('daskl');
    	NotifyService.info("Contact is currently disabled.");
    };
}]);
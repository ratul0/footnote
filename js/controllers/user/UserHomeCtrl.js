/**
 * Created by yousufkhan on 06-Jan-15.
 */
app.controller('UserHomeCtrl', ['$scope','NotifyService', function($scope,NotifyService){
    $scope.$emit('changePageTitle','Home');
    $scope.name = "rat";
}])

angular.module('friendsList').controller('mainCtrl', function($scope){
    $scope.friends = [ 'Garry', 'Jerry', 'Larry', 'Perry', 'Mary' ];

    $scope.addFriend = function (){
        $scope.friends.push($scope.newFriend)
    }

  });
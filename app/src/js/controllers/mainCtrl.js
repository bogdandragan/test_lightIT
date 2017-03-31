mainCtrl.$inject = ['authService', '$scope', '$state'];

function mainCtrl (AuthService, $scope, $state){

    $scope.authStatus = AuthService.authStatus;

    $scope.logOut = function(){
        AuthService.logOut();
        $state.go('home');
    }

    $scope.loadAsset = function(name) {
        return require('../assets/' + name);
    };

    console.log($scope.authStatus);

}

export default mainCtrl;
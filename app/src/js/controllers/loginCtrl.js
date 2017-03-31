loginCtrl.$inject = ['authService', '$state', '$scope'];

function loginCtrl (AuthService, $state, $scope){
    if(AuthService.authStatus.isAuth){
        $state.go('home');
    }

    $scope.submitLoginForm = function(isValid){
        if(!isValid){
            return;
        }

        const loginData = $scope.loginData;

        AuthService.login(loginData).then((response)=>{
            console.log(response);
            $state.go('home');
        }).catch((error)=>{
            $scope.isLoginError = true;
            $scope.loginErrorText = error;
            console.log("455454"+error);
        })
    }

};

export default loginCtrl;
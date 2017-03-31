registerCtrl.$inject = ['authService', '$state', '$scope'];

function registerCtrl(AuthService, $state, $scope){
    if(AuthService.authStatus.isAuth){
        $state.go('home');
    }

    $scope.submitRegisterForm = function(isValid){
        if(!isValid){
            return;
        }

        const registrationData = {"username":$scope.registerData.username, "password":$scope.registerData.password};

        console.log(registrationData);

        AuthService.register(registrationData).then((response)=>{
            console.log(response);
            $state.go('home');
        }).catch((error)=>{
            $scope.isRegisterError = true;
            $scope.registerErrorText = error;
            console.log(error);
        })

    };
}

export default registerCtrl;
loginCtrl.$inject = ['authService'];

function loginCtrl (AuthService){

    var loginData = {"username":"","password":""}
    AuthService.login(loginData).then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    })

};

export default loginCtrl;
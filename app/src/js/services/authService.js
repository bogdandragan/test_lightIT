AuthService.$inject = ['$http', 'localStorageService','$q'];

function AuthService($http, localStorageService, $q) {
    const apiUrl = 'http://smktesting.herokuapp.com/api/';
    let authServiceFactory = {};

    let authStatus = {
        isAuth: false,
        username : ""
    };

    let register = function (registration) {

        logOut();

        return $http.post(apiUrl + 'register', registration).then(function (response) {
            return response;
        });

    };

    let login = function (loginData) {

        const data = {"username": loginData.username, "password": loginData.password};

        let deferred = $q.defer();

        $http.post(apiUrl + 'login', data)
            .then(function (response) {

                localStorageService.set('authData', { token: response.token, username: loginData.username });

                authStatus.isAuth = true;
                authStatus.username = loginData.username;

                deferred.resolve(response);

            }).catch(function (err, status) {
                logOut();
                deferred.reject(err);
            });

        return deferred.promise;

    };

    let logOut = function () {

        localStorageService.remove('authData');

        authStatus.isAuth = false;
        authStatus.username = "";

    };

    let setAuthStatus = function ($http) {
        const authData = localStorageService.get('authData');
        if (authData)
        {
            authStatus.isAuth = true;
            authStatus.userName = authData.userName;
        }

    }

    authServiceFactory.register = register;
    authServiceFactory.login = login;
    authServiceFactory.logOut = logOut;
    authServiceFactory.setAuthStatus = setAuthStatus;
    authServiceFactory.authStatus = authStatus;

    return authServiceFactory;
}

export default AuthService;








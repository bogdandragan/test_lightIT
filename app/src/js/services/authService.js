AuthService.$inject = ['$http', 'localStorageService','$q', 'appConfig'];

function AuthService($http, localStorageService, $q, appConfig) {
    const apiUrl = appConfig.apiUrl;
    let authServiceFactory = {};

    let authStatus = {
        isAuth: false,
        username : ""
    };

    let register = function (registration) {

        logOut();
        let deferred = $q.defer();

        $http.post(apiUrl + 'register/', registration).then((response) => {
            if(!response.data.success){
                return deferred.reject(response.data.message);
            }
            localStorageService.set('authData', { token: response.data.token, username: registration.username });

            authStatus.isAuth = true;
            authStatus.username = registration.username;

            return deferred.resolve(response);
        }).catch((err) => {
            logOut();
            return deferred.reject(err.status+" : "+err.statusText);
        });

        return deferred.promise;
    };

    let login = function (loginData) {
        let deferred = $q.defer();

        $http.post(apiUrl + 'login/', loginData)
            .then((response) => {
                if(!response.data.success){
                    return deferred.reject(response.data.message);
                }
                localStorageService.set('authData', { token: response.data.token, username: loginData.username });

                authStatus.isAuth = true;
                authStatus.username = loginData.username;

                return deferred.resolve(response);

            }).catch((err) => {
                logOut();
                return deferred.reject(err.status+" : "+err.statusText);
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
            authStatus.username = authData.username;
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








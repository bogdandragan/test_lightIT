RequestInterceptorService.$inject = ['$q', 'localStorageService'];

function RequestInterceptorService($q, localStorageService) {
    let requestInterceptorServiceFactory = {};

    let request = function (config) {

        config.headers = config.headers || {};

        var authData = localStorageService.get('authData');
        if (authData) {
            config.headers.Authorization = 'Token ' + authData.token;
        }

        return config;
    };

    requestInterceptorServiceFactory.request = request;

    return requestInterceptorServiceFactory;
}

export default RequestInterceptorService;








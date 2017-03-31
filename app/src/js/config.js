module.exports = function(app){
    app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
        //$locationProvider.html5Mode(true);
        //$locationProvider.hashPrefix('!');
        $httpProvider.interceptors.push('requestInterceptorService');

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                template: require('./home.html'),
                controller: 'homeCtrl',
                data: {title: 'Home', description: 'Home page description'}
            })
            .state('product',{
                url: '/product/:id',
                template: require('./product.html'),
                controller: 'productCtrl',
                data: {title: 'Product', description: 'Product page description'}
            })
            .state('login', {
                url: '/login',
                template: require('./login.html'),
                controller: 'loginCtrl',
                data: {title: 'Login', description: 'Login page description'}
            })
            .state('register', {
                url: '/register',
                template: require('./register.html'),
                controller: 'registerCtrl',
                data: {title: 'Registration', description: 'Registration page description'}
            })
    }).run(function ($rootScope, $state, authService) {
        authService.setAuthStatus();
        $rootScope.$state = $state;
    })

}

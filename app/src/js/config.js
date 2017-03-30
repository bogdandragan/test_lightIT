module.exports = function(app){
    app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
        //$locationProvider.html5Mode(true);
        //$locationProvider.hashPrefix('!');

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                template: require('./home.html'),
                controller: 'homeCtrl'
            })
            .state('product',{
                url: '/product/:id',
                template: require('./product.html'),
                controller: 'productCtrl'
            })
            .state('login', {
                url: '/login',
                template: require('./login.html'),
                controller: 'loginCtrl'
            })
            .state('register', {
                url: '/register',
                template: require('./register.html'),
                controller: 'registerCtrl'
            })
    }).run(function (authService) {
        authService.setAuthStatus();
    })

}

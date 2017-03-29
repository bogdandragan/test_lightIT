var angular = require('angular');
var uirouter = require('angular-ui-router');

var app = angular.module('app',[uirouter]);

require('./config')(app);
require('./controllers/homeCtrl').default(app);
require('./controllers/loginCtrl').default(app);
require('./controllers/registerCtrl').default(app);

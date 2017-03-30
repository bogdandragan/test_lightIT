const angular = require('angular');
const uirouter = require('angular-ui-router');

global.jQuery = require('jquery');
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require('./styles/font-awesome/css/font-awesome.min.css');


const app = angular.module('app',[uirouter]);

require('./config')(app);
require('./controllers/homeCtrl').default(app);
require('./controllers/loginCtrl').default(app);
require('./controllers/registerCtrl').default(app);

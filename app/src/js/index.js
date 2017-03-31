const angular = require('angular');
const uirouter = require('angular-ui-router');
const localStorage = require('angular-local-storage');
const ngMessages = require('angular-messages');

global.jQuery = require('jquery');
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require('./styles/font-awesome/css/font-awesome.min.css');
require('./styles/styles.css');

const app = angular.module('app',[uirouter, localStorage, ngMessages]);

app.constant('appConfig', {
   baseUrl : "http://smktesting.herokuapp.com/",
   apiUrl : "http://smktesting.herokuapp.com/api/",
   staticPath : "static/"
});

require('./services').default(app);
require('./config')(app);
require('./controllers').default(app);


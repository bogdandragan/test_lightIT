import loginCtrl from './loginCtrl'
import registerCtrl from './registerCtrl'
import homeCtrl from './homeCtrl'
import mainCtrl from './mainCtrl'

export default app => {
    app.controller('mainCtrl', mainCtrl);
    app.controller('homeCtrl', homeCtrl);
    app.controller('loginCtrl', loginCtrl);
    app.controller('registerCtrl', registerCtrl);
}
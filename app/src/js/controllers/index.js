import loginCtrl from './loginCtrl'
import registerCtrl from './registerCtrl'
import homeCtrl from './homeCtrl'

export default app => {
    app.controller('loginCtrl', loginCtrl);
    app.controller('registerCtrl', registerCtrl);
    app.controller('homeCtrl', homeCtrl);
}
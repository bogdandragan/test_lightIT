let loginCtrl = function(){
    console.log('loginCtrl');
};

export default app => {
    app.controller('loginCtrl', loginCtrl);
}
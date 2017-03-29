let registerCtrl = function(){
    console.log('registerCtrl');
};

export default app => {
    app.controller('registerCtrl', registerCtrl);
}
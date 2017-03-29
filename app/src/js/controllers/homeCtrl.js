let homeCtrl = function(){
    console.log('homeCtrl');
};

export default app => {
    app.controller('homeCtrl', homeCtrl);
}
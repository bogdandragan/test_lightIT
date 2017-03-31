homeCtrl.$inject = ['productsService'];

function homeCtrl (ProductsService){

    ProductsService.getProducts().then((response)=>{
        console.log(response);
    }).catch((err)=>{
        console.log(err);
    });

    console.log('homeCtrl');
}

export default homeCtrl;
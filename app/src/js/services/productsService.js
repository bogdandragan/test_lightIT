ProductsService.$inject = ['$http','$q', 'appConfig'];

function ProductsService($http, $q, appConfig) {
    const apiUrl = appConfig.apiUrl;
    let productsServiceFactory = {};

    let getProducts = function () {

        return $http.get(apiUrl + 'products/');

    };

    productsServiceFactory.getProducts = getProducts;

    return productsServiceFactory;
}

export default ProductsService;








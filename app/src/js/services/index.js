import authService from './authService'
import productsService from './productsService'
import requestInterceptorService from './requestInterceptorService'


export default app =>{
    app.factory('requestInterceptorService', requestInterceptorService);
    app.factory('authService', authService);
    app.factory('productsService', productsService);

}


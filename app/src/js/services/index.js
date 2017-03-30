import authService from './authService'

export default app =>{
    app.factory('authService', authService);
}


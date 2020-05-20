import UserController from '../controllers/user.controller'
class UserRoutes {
    public routesRegister(app: any): void {
        app.route('/register').post(UserController.createUser)
    }
    public routesLogin(app: any):void {
        app.route('/login').post(UserController.login)
    }
}

export default UserRoutes;
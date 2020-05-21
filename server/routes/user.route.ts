import UserController from '../controllers/user.controller';
class UserRoutes {
    public routesRegister(app: any): void {
        app.route('/register').post(UserController.createUser)
    }
    public routesLogin(app: any):void {
        app.route('/login').post(UserController.login)
    }
    public routesGetUser(app: any):void {
        app.route('/users/:userId').get(UserController.getUser);
    }
}

export default UserRoutes;
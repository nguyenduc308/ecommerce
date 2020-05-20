import UserController from '../controllers/user.controller'
class UserRoutes {
    public routes(app: any): void {
        app.route('/register').post(UserController.createUser)
    }
}

export default UserRoutes;
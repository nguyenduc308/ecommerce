import { Request, Response } from 'express';

class UserRoutes {
    public routes(app: any): void {
        app.route('/users')
            .get((req: Request, res: Response)=> {
                res.status(200).send("hello")
            } )
    }
}

export default UserRoutes;
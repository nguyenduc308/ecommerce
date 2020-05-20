import { Request, Response, NextFunction } from 'express';
import { validatorSignUp, validatorLogin } from '../middlewares/user.validator'
import { User } from 'models/User.model';
class UserRoutes {
    public routes(app: any): void {
        app.route('/users')
            .post( async (req: Request, res: Response, next: NextFunction)=> {
                const { valid, errors } = validatorSignUp(req.body);
                if(!valid) res.status(400).json({error: errors});

                const { email, password, fullName, phoneNumber } = req.body;
                try {
                    const user = User.findOne({email});
                    if(user) res.status(400)
                } catch (error) {
                    
                }

            } )
    }
}

export default UserRoutes;
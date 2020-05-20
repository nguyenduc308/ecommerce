import { User } from '../models/User.model';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import { validatorLogin, validatorSignUp } from '../middlewares/user.validator';
class UserController {

    public async createUser(req: Request, res: Response) {
        const { valid, errors } = validatorSignUp(req.body)
        if(!valid) return res.status(400).json({error: errors});
        const { email, password, fullName, phoneNumber} = req.body;
        try {
            const user = await User.findOne({email});
            if(user) return res.status(400).json({msg: 'Email already exist!'}) 
            const newUser = new User({email, password, fullName, phoneNumber});
            await newUser.save((error)=> {
                console.log(error);
            });
            const payload = {id: "1"};
            jwt.sign(
                payload, 
                'A123213123AAAA', 
                {expiresIn: 360000000}, 
                (error, token)=> {
                    if(error) return  res.status(500).json({error: "Server error 2"})
                    return res.status(201).json({token});
                })
        } catch (error) {
            return res.status(500).json({error: "Server error"})
        }
    }
}

export default new UserController();
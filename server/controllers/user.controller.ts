import { User } from '../models/User.model';
import { Request, Response } from 'express';
import { compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { validatorLogin, validatorSignUp } from '../middlewares/user.validator';
class UserController {

    public async createUser(req: Request, res: Response) {
        const { valid, errors } = validatorSignUp(req.body);
        if(!valid) return res.status(400).json({error: errors});
        const { email, password, fullName, phoneNumber} = req.body;
        try {
            const user = await User.findOne({email});
            if(user) return res.status(400).json({msg: 'Email already exist!'}) 
            const newUser = new User({email, password, fullName, phoneNumber});
            await newUser.save();
            const payload = {id: newUser._id};
            jwt.sign(
                payload, 
                'A123213123AAAA', 
                {expiresIn: 360000000}, 
                (error, token)=> {
                    if(error) return  res.status(500).json({error: "Server error"});
                    const userRes = {email, fullName, phoneNumber};
                    return res.status(201).json({token, user: {email,fullName, phoneNumber}});
                })
        } catch (error) {
            return res.status(500).json({error: "Server error"})
        }
    }
    public async login(req:Request, res:Response) {
        const { valid, errors } = validatorLogin(req.body);
        if(!valid) return res.status(400).json({error: errors});
        const { email, password} = req.body;
        try {
            const user = await User.findOne({email});
            if(!user) return res.status(400).json({error: "Login fail"});
            const isMatch = compare(password, user['password']);
            if(!isMatch) return res.status(400).json({error: "Login fail"})
            const payload = {id: user._id};
            jwt.sign(
                payload, 
                'A123213123AAAA', 
                {expiresIn: 360000000}, 
                (error, token)=> {
                    if(error) return  res.status(500).json({error: "Server error"})
                    const userRes = {email:user['email'], fullName:user['fullName'], phoneNumber: user['phoneNumber']};
                    return res.status(201).json({token, user: userRes});
                })
        } catch (error) {
            return res.status(500).json({error: "Server error"})
        }
    }
}

export default new UserController();
import * as mongoose from 'mongoose';
import { User } from '../models/User.model';
import { Request, Response } from 'express';

class UserController {

    public async createUser(req: Request, res: Response) {
        const {email, password, fullName, phoneNumber} = req.body;
        if(!User.findOne({email})) {
            let newUser = new User({email, password, fullName, phoneNumber});
            await newUser.save();
        }
    }
}
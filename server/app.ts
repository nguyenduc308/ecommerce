import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { UserRoutes } from './routes/api';
class App {
    public app: express.Application;
    public userRoutes = new UserRoutes();
    constructor() {
        this.app = express();
        this.config();
        this.connectDb();
        this.userRoutes.routes(this.app);
    }
    private config():void {
        this.app.use(function(req: Request, res: Response, next: NextFunction) {
            res.header("Access-Control-Allow-Origin", "*"); 
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
            next();
        })

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    private async connectDb() {
        try {
            await mongoose.connect('mongodb+srv://admin:abc123!@ecomerce-a9ij9.mongodb.net/ecomerce?retryWrites=true&w=majority',  {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
            console.log("Database connected");
        } catch(error) {
            console.error(error)
        }
    }
}

export default new App().app;
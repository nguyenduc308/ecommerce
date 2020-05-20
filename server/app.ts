import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser'
import { UserRoutes } from './routes/api'
class App {
    public app: express.Application;
    public userRoutes = new UserRoutes();
    constructor() {
        this.app = express();
        this.userRoutes.routes(this.app);
        this.config();
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
}

export default new App().app;
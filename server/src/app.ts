import express, {Request,Response} from 'express';
import {experienceRoute, userRoute} from './route';
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json());


app.use(experienceRoute);
app.use(userRoute);
app.get('/',(req:Request,res:Response)=>{
    res.json('hello world');
})

export default app;
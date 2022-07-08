import {Request,Response} from 'express';

const loginController = (req:Request, resp:Response) => {

    resp.send('usuario correcto');
}

export default loginController;
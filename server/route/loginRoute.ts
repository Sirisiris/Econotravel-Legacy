import Router from 'express';
import loginController from '../controller/loginController';
import auth 

const router = Router();

router.post ('/login', auth.validateUser, loginController);


export default router;

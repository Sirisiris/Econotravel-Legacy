import Router from 'express';
import userController from '../controllers/user/userController';
import auth from '../middleware/authHandler';
import jwt from '../middleware/jwHandler';

const router = Router();

router.post('/user',auth.encryptPassword,userController.saveUser);
router.post('/user/login',auth.validateUser,userController.login);
router.get('/user/all',jwt.validateToken,userController.getAllUsers);
router.put('/user/:id',jwt.validateToken,userController.reserva);
//router.get('/user/register')

export default router;

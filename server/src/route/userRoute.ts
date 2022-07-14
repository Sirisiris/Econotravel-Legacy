import Router from 'express';
import userController from '../controllers/userController';
import auth from '../middleware/authHandler';
import jwt from '../middleware/jwHandler';
const router = Router();

router.post('/user',auth.encryptPassword,userController.saveUser);
router.post('/user/login',auth.validateUser,userController.login);
router.get('/user/all',jwt.validateToken,userController.getAllUsers);

export default router;
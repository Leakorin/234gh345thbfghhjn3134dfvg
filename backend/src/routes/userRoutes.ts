import { Router } from 'express';
import * as UserController from '../controllers/userController';

const router = Router();

router.post('/register', UserController.registerUser);
router.get('/:tgId', UserController.getUser);
router.get('/', UserController.getAllUsers);
router.put('/:tgId/balance', UserController.updateUserBalance);

export default router;

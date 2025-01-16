import express from 'express';
import * as referralController from '../controllers/referralController';

const router = express.Router();

router.post('/add', referralController.addReferral);

router.get('/referrer/:referrerId', referralController.getReferralsByReferrer);

router.get('/receiver/:referralId', referralController.getReferralsByReceiver);

export default router;

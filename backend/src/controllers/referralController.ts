import { Request, Response } from 'express';
import * as referralService from '../services/referralService';

export const addReferral = async (req: Request, res: Response) => {
    const { referrerId, referralId } = req.body;

    try {
        const referral = await referralService.addReferral(referrerId, referralId);
        res.status(201).json({ message: 'Referral added successfully', referral });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getReferralsByReferrer = async (req: Request, res: Response) => {
    const { referrerId } = req.params;

    try {
        const referrals = await referralService.getReferralsByReferrer(Number(referrerId));
        res.status(200).json(referrals);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getReferralsByReceiver = async (req: Request, res: Response) => {
    const { referralId } = req.params;

    try {
        const referrals = await referralService.getReferralsByReceiver(Number(referralId));
        res.status(200).json(referrals);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

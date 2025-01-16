import { Request, Response } from 'express';
import * as UserService from '../services/userService';

export const registerUser = async (req: Request, res: Response) => {
    const { tgId, balance, bchAddress } = req.body;
    try {
        const user = await UserService.createUser(Number(tgId), balance, bchAddress);
        res.status(201).json(user);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getUser = async (req: Request, res: Response) => {
    const { tgId } = req.params;
    try {
        const user = await UserService.findUserById(Number(tgId));
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const user = await UserService.findAllUsers();
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};


export const updateUserBalance = async (req: Request, res: Response) => {
    const { tgId } = req.params;
    const { balance } = req.body;
    try {
        const updatedUser = await UserService.updateUserBalance(Number(tgId), balance);
        res.json(updatedUser);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

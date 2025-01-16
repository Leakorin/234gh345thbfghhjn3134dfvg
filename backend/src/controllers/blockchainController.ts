import { Request, Response } from 'express';
import * as blockchainService from '../services/blockchainService';

export const addBlockchainBlock = async (req: Request, res: Response) => {
    const { blockHash, totalGas, revenueNoder } = req.body;

    try {
        const block = await blockchainService.addBlockchainBlock(blockHash, totalGas, revenueNoder);
        res.status(201).json({ message: 'Blockchain block added successfully', block });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const addBlockchainTransaction = async (req: Request, res: Response) => {
    const { blockHash, txHash, author, receiver, amount, gas, revenue } = req.body;

    try {
        const transaction = await blockchainService.addBlockchainTransaction(
            blockHash,
            txHash,
            author,
            receiver,
            amount,
            gas,
            revenue
        );
        res.status(201).json({ message: 'Blockchain transaction added successfully', transaction });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getTransactionsByBlock = async (req: Request, res: Response) => {
    const { blockHash } = req.params;

    try {
        const transactions = await blockchainService.getTransactionsByBlock(blockHash);
        res.status(200).json(transactions);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getBlockchainBlockByHash = async (req: Request, res: Response) => {
    const { blockHash } = req.params;

    try {
        const block = await blockchainService.getBlockchainBlockByHash(blockHash);
        if (!block) {
            res.status(404).json({ error: 'Block not found' });
        }
        res.status(200).json(block);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllBlockchainBlocks = async (req: Request, res: Response) => {
    try {
        const blocks = await blockchainService.getAllBlockchainBlocks();
        res.status(200).json(blocks);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};


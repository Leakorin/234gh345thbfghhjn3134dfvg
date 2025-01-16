import express from 'express';
import * as blockchainController from '../controllers/blockchainController';

const router = express.Router();

router.post('/block', blockchainController.addBlockchainBlock);

router.post('/transaction', blockchainController.addBlockchainTransaction);

router.get('/block/:blockHash/transactions', blockchainController.getTransactionsByBlock);

router.get('/block/:blockHash', blockchainController.getBlockchainBlockByHash);

router.get('/blocks', blockchainController.getAllBlockchainBlocks);

export default router;

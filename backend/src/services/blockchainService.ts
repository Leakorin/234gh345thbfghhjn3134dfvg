import prisma from '../prisma';

export const addBlockchainBlock = async (blockHash: string, totalGas: number, revenueNoder: number) => {
    return prisma.blockchainBlock.create({
        data: {
            blockHash,
            totalGas,
            revenueNoder,
        },
    });
};

export const addBlockchainTransaction = async (
    blockHash: string,
    txHash: string,
    author: string,
    receiver: string,
    amount: number,
    gas: number,
    revenue: number
) => {
    return prisma.blockchainTransaction.create({
        data: {
            blockHash,
            txHash,
            author,
            receiver,
            amount,
            gas,
            revenue,
        },
    });
};

export const getTransactionsByBlock = async (blockHash: string) => {
    return prisma.blockchainTransaction.findMany({
        where: { blockHash },
    });
};

export const getBlockchainBlockByHash = async (blockHash: string) => {
    return prisma.blockchainBlock.findUnique({
        where: { blockHash },
    });
};


export const getAllBlockchainBlocks = async () => {
    return prisma.blockchainBlock.findMany({
        include: {
            transactions: true, // Include transactions for each block
        },
    });
};
// TODO: limited fetch of blocks (last 20)

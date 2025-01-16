import prisma from '../prisma';

export const createUser = async (tgId: number, balance = 0, bchAddress: string | null = null) => {
    return prisma.userData.create({
        data: {
            tgId,
            balance,
            bchAddress,
        },
    });
};

export const findUserById = async (tgId: number) => {
    return prisma.userData.findUnique({
        where: { tgId },
    });
};

export const findAllUsers = async () => {
    return prisma.userData.findMany();
};


export const updateUserBalance = async (tgId: number, newBalance: number) => {
    return prisma.userData.update({
        where: { tgId },
        data: { balance: newBalance },
    });
};

export const updateUserBchAddress = async (tgId: number, newBchAddress: string) => {
    return prisma.userData.update({
        where: { tgId },
        data: { bchAddress: newBchAddress },
    });
};

export const deleteUser = async (tgId: number) => {
    return prisma.userData.delete({
        where: { tgId },
    });
};

export const createBalanceArchive = async (tgId: number, balance: number) => {
    return prisma.balanceArchive.create({
        data: {
            tgId,
            balance,
        },
    });
};

export const getBalanceArchivesByUser = async (tgId: number) => {
    return prisma.balanceArchive.findMany({
        where: { tgId },
        orderBy: {
            datetime: 'desc',
        },
    });
};

export const getLatestBalanceArchive = async (tgId: number) => {
    return prisma.balanceArchive.findFirst({
        where: { tgId },
        orderBy: {
            datetime: 'desc',
        },
    });
};

export const deleteBalanceArchive = async (id: number) => {
    return prisma.balanceArchive.delete({
        where: { id },
    });
};
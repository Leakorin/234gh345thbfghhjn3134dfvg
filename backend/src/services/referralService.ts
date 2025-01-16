import prisma from '../prisma';

export const addReferral = async (referrerId: number, referralId: number) => {
    return prisma.referral.create({
        data: {
            referrerId,
            referralId,
        },
    });
};

export const getReferralsByReferrer = async (referrerId: number) => {
    return prisma.referral.findMany({
        where: { referrerId },
        include: { referral: true },
    });
};

export const getReferralsByReceiver = async (referralId: number) => {
    return prisma.referral.findMany({
        where: { referralId },
        include: { referrer: true },
    });
};

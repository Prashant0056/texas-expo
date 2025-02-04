"use server";

import { getPayload } from 'payload';
import configPromise from "../../payload.config"
import { Media } from '@/payload-types';

export interface Participant {
    collegeName: string;
    participantNumber: number;
    photo: Media | string;
    createdAt: string;
}


const payload = await getPayload({ config: configPromise })
export const fetchParticipants = async () => {

    const participantList = await payload.find({
        collection: 'participants',
        depth: 1,
        select: {
            collegeName: true,
            participantNumber: true,
            photo: true,
            createdAt: true,
        },
    });

    return participantList;
};


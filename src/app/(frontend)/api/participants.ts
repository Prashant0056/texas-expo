// pages/api/data.ts

import { fetchParticipants } from '@/action/participants';
import { Media } from '@/payload-types';
import { NextApiRequest, NextApiResponse } from 'next';

export interface Data {
    docs: {
        id: string;
        collegeName: string;
        participantNumber: number;
        photo: Media | string;
        createdAt: string;
    }[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | { error: string }>) {
    try {
        const data = await fetchParticipants(); // Your async function
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
}
import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextResponse } from 'next/server'

export async function GET() {
    const payload = await getPayload({ config })

    const [participants, activities, stalls] = await Promise.all([
        await payload.find({ collection: 'participants', limit: 50 }),
        await payload.find({ collection: 'activities', limit: 50 }),
        await payload.find({ collection: 'stalls', limit: 50 }),
    ])

    const data = {
        activities: activities.docs.filter(item=> item.photo).map((image) => ({
            image: (image.photo as any).url,
        })), 
        display: participants.docs.filter(item=> item.photo).map((image) => ({
            image: (image.photo as any)?.url,
        })),
        participants: participants.docs,
        stalls: stalls.docs
    }

    return NextResponse.json(data)
}


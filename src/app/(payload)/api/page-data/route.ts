import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextResponse } from 'next/server'

export async function GET() {
    const payload = await getPayload({ config })

    const [participants, activities] = await Promise.all([

        // await payload.find({
        //     collection: 'participants',
        //     depth: 1,
        //   }),

        await payload.find({ collection: 'participants', limit: 50 }),
        await payload.find({ collection: 'activities', limit: 50 }),
        // await payload.find({ collection: 'events', limit: 50 }),
        // await payload.findGlobal({
        //   slug: 'staff',
        //   depth: 1,
        // })
    ])

    const data = {
        activities: activities.docs.map((image) => ({
            image: (image.photo as any).url,
        })), 
        display: participants.docs.map((image) => ({
            image: (image.photo as any).url,
        })),
        participants: participants.docs
    }

    return NextResponse.json(data)
}


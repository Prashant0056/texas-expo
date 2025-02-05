"use client"

import { Card, CardContent } from "@/components/ui/card"
import { UsersRound } from "lucide-react"
import { Participant } from "@/payload-types";

interface ParticipantCountProps {
    data: Participant[];
}

const ParticipantCount = ({ data }: ParticipantCountProps) => {
    const participantCount = data?.reduce((sum, doc) => sum + doc.participantNumber, 0)
    console.log(participantCount)
    return (
        <Card className="rounded-xl h-full pt-2 bg-white shadow-sm">
            <CardContent className="flex flex-col gap-4 items-center justify-center h-full">
                <div className="text-3xl font-semibold">Total Participants</div>
                <div className="aspect-square p-10 rounded-full border-4 border-green-500 shadow-lg flex items-center justify-center  font-bold text-6xl">
                    <div className="flex flex-col items-center justify-center gap-3">
                        <UsersRound className="h-16 w-16 text-green-600" />
                        {participantCount}
                    </div>
                </div>
            </CardContent>
        </Card>
    )

}

export default ParticipantCount


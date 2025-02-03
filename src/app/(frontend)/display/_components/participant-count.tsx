"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, School, UsersRound } from "lucide-react"

interface ParticipantCountProps {
    totalParticipants: number

}

const ParticipantCount = ({ totalParticipants }: ParticipantCountProps) => {

    return (
        <Card className="rounded-xl h-full pt-2">
            <CardContent className="flex flex-col gap-4 items-center justify-center h-full">
                <div className="text-3xl font-semibold">Total Participants</div>
                <div className="aspect-square p-10 rounded-full border-4 border-green-500 shadow-lg flex items-center justify-center  font-bold text-4xl">
                    <div className="flex flex-col items-center justify-center gap-3">
                        <UsersRound className="h-16 w-16 text-green-600"/>
                        {totalParticipants}
                    </div>
                </div>
            </CardContent>
        </Card>
    )

}

export default ParticipantCount


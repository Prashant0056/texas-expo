import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ParticipantCount = ()=>{
    return (
        <Card className="rounded-xl">
            <CardHeader>
                <CardTitle>
                    Participant Count
                </CardTitle>
            </CardHeader>
            <CardContent>
            <div>Total: 1234</div>
            <div>This School: 12</div>
            </CardContent>
        </Card>
    )
}

export default ParticipantCount;
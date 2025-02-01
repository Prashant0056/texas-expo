import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ImportantPersonnel = ()=>{
    return (
        <Card className="rounded-xl">
            <CardHeader>
                <CardTitle>
                    Contacts
                </CardTitle>
            </CardHeader>
            <CardContent>
            <div>Teacher 1: 9800009999</div>
            <div>Teacher 2: 9800009991</div>
            </CardContent>
        </Card>
    )
}

export default ImportantPersonnel;
"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLivePreview } from "@payloadcms/live-preview-react";
import { useRouter } from "next/navigation";

const ImportantPersonnel : React.FC<{
    page: {
      title: string
    }
  }> = ({ page: initialPage })=>{
    const router = useRouter()

    const { data } = useLivePreview({
        initialData: initialPage,
        serverURL: "http://localhost:3000",
        depth: 2,
      })
    
    return (
        <Card className="rounded-xl h-full">
            <CardHeader>
                <CardTitle>
                    Contacts
                </CardTitle>
            </CardHeader>
            <CardContent>
            <div>Teacher 1: 9800009999</div>
            <div>Teacher 2: 9800009991</div>
            </CardContent>
            <Button onClick={()=>router.refresh()}>
                asf
            </Button>


 \ <h1>{data.title}</h1>
        </Card>
    )
}

export default ImportantPersonnel;
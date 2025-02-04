"use client";
import ParticipantCount from "./_components/participant-count";
import { DisplayCarousel } from "./_components/display-carousel";
import { useEffect, useState } from "react";
import WelcomeOverlay from "./_components/welcome-overlay";
import { Media } from "@/payload-types";
import ImportantPersonnel from "./_components/important-personnels";
import { useWelcome, WelcomeProvider } from "./_components/welcome-context";
import { Button } from "@/components/ui/button";

interface IDocs {
  id: string;
  collegeName: string;
  participantNumber: number;
  photo: Media | string;
  createdAt: string;
  contactPerson: string;
}

export type TCollegeDetails = {
  name: string;
  count: number;
  imageUrl: string;
};

interface PageData {
  participants: any[],
  display: any[],
}

async function getData(): Promise<PageData> {
  const response = await fetch('/api/page-data')
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return response.json()
}


const DisplayPage = () => {
  const [showOverlay, setShowOverlay] = useState(true)
  const [latestCollege, setLatestCollege] = useState<IDocs | undefined>(undefined);

  const [data, setData] = useState<PageData | undefined>(undefined)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await getData()
        const latestData = newData.participants.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0]
        setLatestCollege(latestData);
        setData(newData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    // Initial fetch
    fetchData()

    // Set up polling every 5 seconds
    const intervalId = setInterval(fetchData, 5000)

    // Clean up interval on component unmount
    return () => clearInterval(intervalId)
  }, [])


  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="flex-1 h-svh bg-gray-100 flex flex-col gap-2 p-4">
        <div className="flex-1 bg-gray-100 flex gap-2">
          <div className="flex-1 rounded-xl overflow-clip relative">
            <DisplayCarousel images={data.display} />

          </div>
          <div className="flex-1">
            <ParticipantCount data={data.participants} />
          </div>
        </div>
        <div className="flex-1 flex gap-2">
          <div className="flex-1"><ImportantPersonnel /></div>
          <div className="flex-1 rounded-xl overflow-clip relative">
            <DisplayCarousel images={data.display} />
          </div>
        </div>
      </div>
      <WelcomeProvider>
        <WelcomeOverlay showOverlay={showOverlay} college={latestCollege?.collegeName} photoUrl={typeof latestCollege?.photo !== 'string' && latestCollege?.photo?.url
        } studentCount={latestCollege?.participantNumber} contactPerson={latestCollege?.contactPerson} />
      </WelcomeProvider>

      <Button variant={"default"} onClick={()=>setShowOverlay(true)}>
                Trigger welcome
            </Button>
    </>

  )
}

export default DisplayPage;
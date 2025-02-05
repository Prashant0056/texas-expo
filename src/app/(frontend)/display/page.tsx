"use client";
import ParticipantCount from "./_components/participant-count";
import { DisplayCarousel } from "./_components/display-carousel";
import { useEffect, useState } from "react";
import WelcomeOverlay from "./_components/welcome-overlay";
import { Media, Stall } from "@/payload-types";
import StallsDetails from "./_components/stalls";
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
  activities: any[],
  stalls: Stall[],
}

async function getData(): Promise<PageData> {
  const response = await fetch('/api/page-data')
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return response.json()
}


const DisplayPage = () => {
  const [showOverlay, setShowOverlay] = useState(false)
  const [latestCollege, setLatestCollege] = useState<IDocs | undefined>(undefined);
  const [stallsData, setStallsData] = useState<Stall[] | undefined>(undefined)

  const [data, setData] = useState<PageData>({
    participants: [],
    display: [],
    activities: [],
    stalls: {} as Stall[],
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await getData();

        // Fetch the previous value from sessionStorage
        const length = JSON.parse((sessionStorage.getItem("length") ?? "0"));

        // Sort and get the latest participant
        const latestData = newData.participants.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )[0];

        setLatestCollege(latestData);

        // Compare newData length with the previous one in sessionStorage
        if (newData.participants.length > length) {
          sessionStorage.setItem("length", newData.participants.length.toString());
          setShowOverlay(true);
        }

        // Set the new stalls data and participants
        setStallsData(newData.stalls);
        setData(newData); // Update state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Initial fetch
    fetchData();

    // Set up polling every 5 seconds
    const intervalId = setInterval(fetchData, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (showOverlay) {
      const timer = setTimeout(() => {
        setShowOverlay(false); // Reset to false after 5 seconds
      }, 60000);

      // Cleanup timer on unmount or when showOverlay changes
      return () => clearTimeout(timer);
    }
  }, [showOverlay]);


  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="flex-1 h-svh bg-gray-100 flex flex-col gap-2 p-4">
        <div className="flex-1 flex gap-2">

          <div className="flex-1 rounded-xl overflow-clip relative">
            <DisplayCarousel images={data.display} />
          </div>

          <div className="flex-1">
            <ParticipantCount data={data.participants} />
          </div>
        </div>


        <div className="flex-1 flex gap-2">

          <div className="flex-1 w-1/2 overflow-clip rounded-xl border-black border">
            <StallsDetails stallsData={stallsData} />
          </div>

          <div className="flex-1 rounded-xl overflow-clip relative">
            <DisplayCarousel images={data.activities} />
          </div>

        </div>
      </div>
      <Button onClick={()=>setShowOverlay(true)} className="bg-gray-200 text-black hover:bg-gray-200 hover:text-black" asChild><div className="bg-gray-200 text-center">&copy; A product of Texas Imaginology - TIC</div></Button>
      <WelcomeOverlay showOverlay={showOverlay} college={latestCollege?.collegeName} photoUrl={typeof latestCollege?.photo !== 'string' && latestCollege?.photo?.url
        } studentCount={latestCollege?.participantNumber} contactPerson={latestCollege?.contactPerson} />
    </>

  )
}

export default DisplayPage;
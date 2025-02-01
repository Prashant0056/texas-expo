"use client";

import { Button } from "@/components/ui/button";
import Carousel from "./_components/carousel";
import { useEffect, useState } from "react";
import Image from "next/image";
import ParticipantCount from "./_components/participant-count";
import ImportantPersonnel from "./_components/important-personnels";

const DisplayPage= ()=>{

    const [showOverlay, setShowOverlay] = useState(false)

    useEffect(() => {
      let timer: NodeJS.Timeout
      if (showOverlay) {
        timer = setTimeout(() => {
          setShowOverlay(false)
        }, 5000)
      }
      return () => clearTimeout(timer)
    }, [showOverlay])

    return (
        <div>
            <div className="h-screen grid grid-cols-2 grid-rows-2 p-4 gap-2">
            <Carousel/>
            <ParticipantCount/>
            <ImportantPersonnel/>
            <Carousel/>
            </div>
            <Button onClick={() => setShowOverlay(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Show Overlay
            </Button>


        <div
          className={`${showOverlay ? 'block' : 'hidden'} fixed inset-0 bg-black z-50 flex items-center justify-center transition-all duration-700 ease-in-out`}
        >
          <div className="text-white text-center w-full h-full flex flex-col justify-between py-12">
            <h2 className="text-5xl font-bold mb-8">Welcome, Schools!</h2>
            <div className="flex-grow flex flex-col items-center justify-center">
              <div className="mb-8">
                <p className="text-2xl">Number of Attending Students:</p>
                <p className="text-6xl font-bold">1,234</p>
              </div>
              <div className="w-full h-2/5 max-w-4xl mx-auto relative">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="School Image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>

        </div>
    )
}

export default DisplayPage;
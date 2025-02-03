"use server";

import ParticipantCount from "./_components/participant-count";
import ImportantPersonnel from "./_components/important-personnels";
import { getPayload } from "payload";
import configPromise from "../../../payload.config"
import DisplayCarousel from "./_components/display-carousel";
import { RefreshRouteOnSave } from "./_components/refresh-route-onSave";



// const participants = [
//   { collegeName: "Texas International College", participantCount: 12, photo: "/api/media/file/HTML5_logo.svg" },
//   { collegeName: "Stanford University", participantCount: 8, photo: "/url2" },
//   { collegeName: "Harvard University", participantCount: 15, photo: "/url3" },
//   { collegeName: "MIT", participantCount: 10, photo: "/url4" },
//   { collegeName: "University of California, Berkeley", participantCount: 20, photo: "/url5" }
// ];

const DisplayPage = async () => {

  const payload = await getPayload({ config: configPromise })
  const participantsList = await payload.find({
    collection: 'participants',
    depth: 1,
    select: {
      collegeName: true,
      participantNumber: true,
      photo: true,
    }
  })


  console.log("participant", (participantsList).docs[1]?.id);
  console.log("participant tet");

  console.log("This is the count: ", participantsList.docs.length)

  participantsList.docs.map(item => {
    console.log(item)
  })

  const participants: Record<string, string | number>[] = participantsList.docs.map(item => {
    return {
      collegeName: item.collegeName,
      participantNumber: item.participantNumber,
      photo: item.photo.url,
    }
  })


  async function refreshed() {
    "use server"
    console.log("refreshed")
  }

  return (
    <>
      <RefreshRouteOnSave />
      <div className="flex-1 bg-gray-100 grid grid-cols-2 grid-rows-2 gap-2 p-4">
        {/* <Carousel carouselItem={participants}/> */}
        <DisplayCarousel />
        <ParticipantCount totalParticipants={12435} />
        <ImportantPersonnel page={{title: "new"}}/>
        {/* <ImportantPersonnel /> */}
      </div>
    </>

  )
}

export default DisplayPage;
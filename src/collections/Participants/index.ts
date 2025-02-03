import { TriggerWelcome } from "@/action/participants/action";

import { CollectionConfig } from "payload";


const Participants: CollectionConfig = {
  slug: 'participants',
  fields: [
    {
      name: 'collegeName',
      type: 'text',
      required: true,
    },
    {
      name: 'participantNumber',
      type: 'number',
      required: true,
      unique: true,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
  hooks:{
    afterChange:[
        async ({operation, doc, req})=>{
            if(operation === "update"){
                const populatedDoc = await req.payload.findByID({
                    collection: 'participants',
                    id: doc.id,
                    depth: 1, // This will populate the photo field
                  });
                await TriggerWelcome(populatedDoc)
            }
        }
    ]
  }
};

export default Participants;

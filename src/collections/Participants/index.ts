import { CollectionConfig } from "payload";


const Participants: CollectionConfig = {
  slug: 'participants',
  access: {
    read: () => true
  },
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
      required: false,
    },
    {
      name: 'contactPerson',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
};

export default Participants;

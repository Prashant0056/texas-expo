import { CollectionConfig } from "payload";


const Activities: CollectionConfig = {
  slug: 'activities',
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
};

export default Activities;

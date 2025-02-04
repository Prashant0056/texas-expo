import { CollectionConfig } from "payload";


const Stalls: CollectionConfig = {
    slug: 'stalls',
    access: {
        read: () => true
    },
    fields: [
        {
            name: 'stallNo',
            type: 'text',
            required: true,
        },
        {
            name: "projects",
            type: "array",
            required: true,
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                }
            ]
        }
    ],
};

export default Stalls;



const project = {

  name: "project",
  title: "Kultamarjan blogi",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",

        }
      ]
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
}

const cloudberriesAmount = {
  name: "cloudberriesAmount",
  title: "Amount of Cloudberries",
  type: "document",
  fields: [
    {
      name: "amount",
      title: "Amount",
      type: "string",
    }
  ]
}


export default project;
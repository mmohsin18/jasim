export default {
    name: 'Highlight',
    type: 'document',
    title: 'Highlights',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Details',
            name: 'description',
            type: 'text'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image'
        },
        {
            name: 'publishedAt',
            title: 'date',
            type: 'datetime',
        }
    ],
  }
  
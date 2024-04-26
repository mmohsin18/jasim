export default {
    name: 'Blog',
    type: 'document',
    title: 'Blogs',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
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
  
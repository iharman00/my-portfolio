export default {
  name: 'sections',
  title: 'Sections',
  type: 'document',
  fields: [
    {
      name: 'index',
      title: 'Index',
      type: 'number',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'img',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'imgAlt',
      title: 'Image alt text',
      type: 'string',
    },
  ],
  orderings: [
    {
      title: 'Index Asc',
      name: 'indexAsc',
      by: [{field: 'index', direction: 'asc'}],
    },
  ],
}

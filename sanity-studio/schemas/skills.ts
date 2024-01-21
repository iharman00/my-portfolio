export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'categories'}],
    },
    {
      name: 'index',
      title: 'Index',
      type: 'number',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'alt',
      title: 'Alt text',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
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

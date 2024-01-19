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
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'index',
      title: 'Index',
      type: 'number',
    },
    {
      name: 'link',
      title: 'Link',
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

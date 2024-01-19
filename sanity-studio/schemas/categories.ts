export default {
  name: 'categories',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      options: ['Frontend', 'Backend', 'Dev Tools'],
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
  ],
  orderings: [
    {
      title: 'Index Asc',
      name: 'indexAsc',
      by: [{field: 'index', direction: 'asc'}],
    },
  ],
}

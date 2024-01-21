export default {
  name: 'socials',
  title: 'Socials',
  type: 'document',
  fields: [
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
      name: 'link',
      title: 'Link',
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

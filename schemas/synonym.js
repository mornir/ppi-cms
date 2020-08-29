export default {
  title: 'Synonym',
  name: 'synonym',
  type: 'object',
  fields: [
    {
      type: 'string',
      name: 'term',
      title: 'Begriff',
    },
    {
      type: 'blockContent',
      name: 'source',
      title: 'Quelle',
    },
  ],
}

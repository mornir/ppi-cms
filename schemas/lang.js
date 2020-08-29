export default {
  title: 'Sprache',
  name: 'lang',
  type: 'object',
  fields: [
    {
      type: 'string',
      name: 'vedette',
      title: 'Hauptbegriff',
    },
    {
      type: 'blockContent',
      name: 'deDef',
      title: 'Definition',
    },
    {
      type: 'array',
      name: 'synonyms',
      title: 'Alternative Begriffe',
      of: [{ type: 'synonym' }],
    },
  ],
}

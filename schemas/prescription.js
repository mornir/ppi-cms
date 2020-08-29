export default {
  name: 'prescription',
  title: 'BS-Vorschrift',
  type: 'document',
  fields: [
    {
      name: 'code',
      title: 'Numéro',
      type: 'number',
      description: 'Numéro de la prescription (p.ex. 12)',
    },
    {
      name: 'de',
      title: 'Allemand',
      type: 'langue',
    },
    {
      name: 'fr',
      title: 'Français',
      type: 'langue',
    },
  ],
  preview: {
    select: {
      code: 'code',
      title: 'de.title',
    },
    prepare({ code, title }) {
      return {
        title: `${code}-15 ${title}`,
      }
    },
  },
}

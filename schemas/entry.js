export default {
  name: 'entry',
  title: 'Eintrag',
  type: 'document',
  fields: [
    {
      name: 'prescription',
      title: 'BS-Vorschrift',
      type: 'reference',
      description: 'Quelle des Begriffs',
      to: [{ type: 'prescription' }],
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

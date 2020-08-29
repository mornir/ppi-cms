import Tabs from 'sanity-plugin-tabs'

export default {
  name: 'entry',
  title: 'Termino-Einträge',
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
      name: 'content',
      type: 'object',
      inputComponent: Tabs,
      fieldsets: [
        { name: 'de', title: 'Deutsch' },
        { name: 'fr', title: 'Français' },
        { name: 'it', title: 'Italiano' },
      ],
      fields: [
        {
          type: 'lang',
          name: 'de',
          title: 'Deutsch',
          fieldset: 'de',
        },
        {
          type: 'lang',
          name: 'fr',
          title: 'Français',
          fieldset: 'fr',
        },
        {
          type: 'lang',
          name: 'aside',
          title: 'Italiano',
          fieldset: 'it',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'content.de.vedette',
    },
  },
}

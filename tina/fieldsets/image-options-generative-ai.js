export const imageOptionsGenerativeAi = [
  {
    name: 'generativeAi',
    type: 'object',
    label: 'Generative AI',
    fields: [
      {
        name: 'genRemove',
        type: 'object',
        label: 'Generative AI Remove',
        fields: [
          // {
          //   name: 'items',
          //   type: 'string',
          //   label: 'Objects',
          //   description: 'Which objects should be removed?',
          //   list: true,
          // },
          // {
          //   name: 'multiple',
          //   type: 'boolean',
          //   label: 'Remove multiple occurrences',
          //   description:
          //     'Remove multiple occurrences of the specified objects',
          // },
          {
            name: 'shadow',
            type: 'boolean',
            label: 'Remove Shadows',
            description:
              'Remove shadows from the image.',
          },
        ],
      },
    ],
  },
]

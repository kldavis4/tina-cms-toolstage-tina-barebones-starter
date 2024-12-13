import { imageFieldsetGenerative } from "../fieldsets/image-fieldset"

export const generativeImageBlockSchema = {
  name: 'generativeImageBlock',
  label: 'Image with Generative Options',
  fields: [
    ...imageFieldsetGenerative
  ],
  ui: {
    itemProps: (item) => {
      // Field values are accessed by item?.<Field name>
      return {
        label: item?.alt,
      }
    },
  },
}
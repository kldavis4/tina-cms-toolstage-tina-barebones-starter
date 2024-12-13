import { imageFieldset } from '../fieldsets/image-fieldset';

export const imageBlockSchema = {
  name: 'imageBlock',
  label: 'Image',
  fields: [
    {
      name: 'src',
      type: 'image',
      label: 'Image Source',
      required: true,
    },
    {
      name: 'alt',
      type: 'string',
      label: 'Image Alt Text',
      required: true,
    },
  ],
}

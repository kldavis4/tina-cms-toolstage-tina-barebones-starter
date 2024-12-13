import { imageFieldset } from '../fieldsets/image-fieldset';

export const imageBlockSchema = {
  name: 'imageBlock',
  label: 'Image',
  fields: [
    ...imageFieldset
  ],
}

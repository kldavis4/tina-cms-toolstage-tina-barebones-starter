import { imageBlockSchema } from '../blocks/image-block';
import { generativeImageBlockSchema } from '../blocks/generative-image-block';
/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Page Content",
  name: "page",
  path: "content/page",
  format: "mdx",
  fields: [
    {
      name: "body",
      label: "Main Content",
      type: "rich-text",
      isBody: true,
    },
    {
      name: 'blocks',
      type: 'object',
      label: "Sections",
      ui: {
        visualSelector: true,
      },
      list: true,
      templates: [
        imageBlockSchema,
        generativeImageBlockSchema
      ],
    },
    {
    name: 'imgSrc',
    type: 'image',
    label: 'Image Source',
    },
  ],
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      return undefined;
    },
  },
};

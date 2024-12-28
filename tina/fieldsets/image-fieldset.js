import { imageOptionsGenerativeAi } from './image-options-generative-ai';
// import { imageOptionsSource } from './image-options-source';
import { imageOptionsEffects } from './image-options-effects';

export const imageFieldset = [
  // ...imageOptionsSource,
  {
    name: 'advancedImageOptions',
    type: 'object',
    label: 'Image Options',
    fields: [...imageOptionsEffects ],
  },
]

export const imageFieldsetGenerative = [
  // ...imageOptionsSource,
  {
    name: 'advancedImageOptions',
    type: 'object',
    label: 'Image Options',
    fields: [...imageOptionsEffects, ...imageOptionsGenerativeAi],
  },
]
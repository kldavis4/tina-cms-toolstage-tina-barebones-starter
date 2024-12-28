import { imageOptionsGenerativeAi } from './image-options-generative-ai';
import { imageOptionsEffects } from './image-options-effects';

export const imageFieldset = [
  {
    name: 'advancedImageOptions',
    type: 'object',
    label: 'Image Options',
    fields: [...imageOptionsEffects ],
  },
]

export const imageFieldsetGenerative = [
  {
    name: 'advancedImageOptions',
    type: 'object',
    label: 'Image Options',
    fields: [...imageOptionsEffects, ...imageOptionsGenerativeAi],
  },
]
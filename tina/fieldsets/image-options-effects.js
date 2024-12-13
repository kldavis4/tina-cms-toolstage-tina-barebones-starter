import React from 'react'
import { wrapFieldsWithMeta } from 'tinacms'

// This WILL NOT Build when shared between two diffent block tempaltes.
export const imageOptionsEffects = [
  {
    name: 'effects',
    type: 'object',
    label: 'Effects',
    fields: [
      // At this point, we reach the max depth of nested object fields.
      // The tina-lock.json generation begins to behave strange, leading to 'Checking local Tina schema matches server' errors!
      {
        name: 'optimizations',
        type: 'object',
        label: 'Optimizations',
        fields: [
          {
            name: 'improve',
            type: 'number',
            label: 'Auto Improve',
            ui: {
              parse: (val) => Number(val),
              component: wrapFieldsWithMeta(({ input }) => {
                return (
                  <div>
                    <input
                      name='improve'
                      id='improve'
                      type='range'
                      min='0'
                      max='100'
                      step='25'
                      {...input}
                    />
                    <br />
                    Auto correction level: {input.value ? input.value : '0'}%
                  </div>
                )
              }),
            },
          },
        ],
      },
    ],
  },
]

// This one WILL Build.
export const imageOptionsEffectsWorking = [
  {
    name: 'effects',
    type: 'object',
    label: 'Effects',
    fields: [
      {
        name: 'improve',
        type: 'number',
        label: 'Auto Improve',
        ui: {
          parse: (val) => Number(val),
          component: wrapFieldsWithMeta(({ input }) => {
            return (
              <div>
                <input
                  name='improve'
                  id='improve'
                  type='range'
                  min='0'
                  max='100'
                  step='25'
                  {...input}
                />
                <br />
                Auto correction level: {input.value ? input.value : '0'}%
              </div>
            )
          }),
        },
      },
    ],
  },
]
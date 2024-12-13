import React from 'react'
import { wrapFieldsWithMeta } from 'tinacms'

export const imageOptionsEffects = [
  {
    name: 'effects',
    type: 'object',
    label: 'Effects',
    fields: [
      {
        name: 'improve',
        type: 'number',
        label: 'Image Optimization',
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
                  // This will pass along props.input.onChange to set our form values as this input changes.
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

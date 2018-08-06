import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Card from './index'

storiesOf('Card', module)
  .add('Simple', () => (
    <Card
      action={action('hello')}
      percentage={67}
      note={'Simple card'}
      due={'2018-05-10'}
      members={[]}
    />
  ))
  .add('With members', () => (
    <Card
      action={action('hello')}
      percentage={67}
      note={'Simple card'}
      due={'2018-05-10'}
      status={true}
      members={[
          {
            image: 'https://picsum.photos/200/300/?random'
          },
          {
            image: 'https://picsum.photos/200/300/?random'
          },
          {
            image: 'https://picsum.photos/200/300/?random'
          }
      ]}
    />
  ))

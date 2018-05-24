import React from 'react'
import { storiesOf } from '@storybook/react'
import Bin from './index'
import styled, {injectGlobal} from 'styled-components'
import Panel from '../panel'
import { action } from '@storybook/addon-actions'
import Card from '../card'

injectGlobal`
  body {
    background: #191B22;
  }
`

storiesOf('Bin', module)
  .add('Basic', () => (
    <Bin
      openCardController={action('clicked')}
      updateProcess={action('clicked')}
      actionPopupId={action('clicked')}
      actionPopup={action('clicked')}
      toggleActions={action('clicked')}
      name={'Simple Bin'}
      status={'Completed'}
      infoNote={'This is a basic Kanban bin'}
      infoDue={'2018-05-20'}
      outputs={[]}
      id={9}
      cardController={false}
    >
      <Card
        action={action('hello')}
        percentage={67}
        note={'Simple card'}
        due={'2018-05-10'}
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
    </Bin>
  ))
  .add('With output', () => (
    <Bin
      openCardController={action('clicked')}
      updateProcess={action('clicked')}
      actionPopupId={action('clicked')}
      actionPopup={action('clicked')}
      toggleActions={action('clicked')}
      name={'Simple Bin'}
      status={'Completed'}
      infoNote={'This is a basic Kanban bin'}
      infoDue={'2018-05-20'}
      outputs={[
        {
          resourceClassifiedAs: {
            name: '3kg of grapes'
          }
        },
        {
          resourceClassifiedAs: {
            name: '1kg of yellow'
          }
        }
      ]}
      id={9}
      cardController={false}
    >
      <Card
        action={action('hello')}
        percentage={67}
        note={'Simple card'}
        due={'2018-05-10'}
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
      <Card
        action={action('hello')}
        percentage={67}
        note={'Simple card'}
        due={'2018-05-10'}
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
      <Card
        action={action('hello')}
        percentage={67}
        note={'Simple card'}
        due={'2018-05-10'}
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
    </Bin>
  ))
  .add('Controller Open', () => (
    <Bin
      openCardController={action('clicked')}
      updateProcess={action('clicked')}
      actionPopupId={action('clicked')}
      actionPopup={action('clicked')}
      toggleActions={action('clicked')}
      name={'Simple Bin'}
      status={'Completed'}
      infoNote={'This is a basic Kanban bin'}
      infoDue={'2018-05-20'}
      outputs={[]}
      id={8}
      cardController
    >
      <Card
        action={action('hello')}
        percentage={67}
        note={'Simple card'}
        due={'2018-05-10'}
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
    </Bin>
  ))
  .add('Multiple bins', () => (
    <div>
    <Bin
      openCardController={action('clicked')}
      updateProcess={action('clicked')}
      actionPopupId={action('clicked')}
      actionPopup={action('clicked')}
      toggleActions={action('clicked')}
      name={'Simple Bin'}
      status={'Completed'}
      infoNote={'This is a basic Kanban bin'}
      infoDue={'2018-05-20'}
      outputs={[]}
      id={9}
      cardController={false}
    >
      <Card
        action={action('hello')}
        percentage={67}
        note={'Simple card'}
        due={'2018-05-10'}
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
    </Bin>
    <Bin
      openCardController={action('clicked')}
      updateProcess={action('clicked')}
      actionPopupId={action('clicked')}
      actionPopup={action('clicked')}
      toggleActions={action('clicked')}
      name={'Simple Bin'}
      status={'Completed'}
      infoNote={'This is a basic Kanban bin'}
      infoDue={'2018-05-20'}
      outputs={[]}
      id={9}
      cardController={false}
    >
      <Card
        action={action('hello')}
        percentage={67}
        note={'Simple card'}
        due={'2018-05-10'}
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
      <Card
        action={action('hello')}
        percentage={67}
        note={'Simple card'}
        due={'2018-05-10'}
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
      <Card
        action={action('hello')}
        percentage={67}
        note={'Simple card'}
        due={'2018-05-10'}
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
    </Bin>
    <Bin
      openCardController={action('clicked')}
      updateProcess={action('clicked')}
      actionPopupId={action('clicked')}
      actionPopup={action('clicked')}
      toggleActions={action('clicked')}
      name={'Simple Bin'}
      status={'Completed'}
      infoNote={'This is a basic Kanban bin'}
      infoDue={'2018-05-20'}
      outputs={[]}
      id={9}
      cardController={false}
    >
      <Card
        action={action('hello')}
        percentage={67}
        note={'Simple card'}
        due={'2018-05-10'}
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
      <Card
        action={action('hello')}
        percentage={67}
        note={'Simple card'}
        due={'2018-05-10'}
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
    </Bin>
    </div>
  ))
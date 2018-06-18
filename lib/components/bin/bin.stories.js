import React from 'react'
import { storiesOf } from '@storybook/react'
import Bin, {NewBin} from './index'
import {injectGlobal} from 'styled-components'
import Panel from '../panel'
import { action } from '@storybook/addon-actions'
import Card from '../card'
import { State, Store } from '@sambego/storybook-state'
import moment from 'moment'
import DatePicker from 'react-datepicker'
require('react-datepicker/dist/react-datepicker-cssmodules.css')

injectGlobal`
  body {
    background: #191B22;
  }
`
const store = new Store({
  clicked: false,
  cardController: false
})

storiesOf('Bin', module)
  .add('New Bin', () => (
    <State store={store}>
      <NewBin
        clicked={store.get('active')}
        toggleClicked={() => store.set({ clicked: !store.get('clicked') })}
        options={[<option key={1}>test</option>]}
        dateComponent={<DatePicker
          selected={moment()}
          onChange={() => console.log('test')}
          dateFormatCalendar={'DD MMM YYYY'}
          className='dateClass'
        />}
      />
    </State>
  ))
  .add('Basic', () => (
    <div>
      <Bin
        openCardController={() => store.set({ clicked: !store.get('cardController') })}
        cardController={store.get('cardController')}
        updateProcess={action('clicked')}
        name={'Simple Bin'}
        infoNote={'This is a basic Kanban bin'}
        plannedStart={'2018-05-20'}
        outputs={[]}
        id={9}
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
      <NewBin
        clicked={store.get('active')}
        toggleClicked={() => store.set({ clicked: !store.get('clicked') })}
      />
    </div>
  ))
  .add('With output', () => (
    <Bin
      updateProcess={action('clicked')}
      name={'Simple Bin'}
      status={'Completed'}
      infoNote={'This is a basic Kanban bin'}
      plannedStart={'2018-05-20'}
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
      name={'Simple Bin'}
      status={'Completed'}
      infoNote={'This is a basic Kanban bin'}
      plannedStart={'2018-05-20'}
      outputs={[]}
      toggleActions={true}
      id={2}
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
      name={'Simple Bin'}
      status={'Completed'}
      infoNote={'This is a basic Kanban bin'}
      plannedStart={'2018-05-20'}
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
      name={'Simple Bin'}
      status={'Completed'}
      infoNote={'This is a basic Kanban bin'}
      plannedStart={'2018-05-20'}
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
      name={'Simple Bin'}
      status={'Completed'}
      infoNote={'This is a basic Kanban bin'}
      plannedStart={'2018-05-20'}
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
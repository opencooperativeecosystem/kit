import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button } from './index'

storiesOf('Button', module)
.add(
  'with text', () => {
    const buttonProp = {
      onClick: action('clicked'),
      target: 'blank'
    }
    return (<Button extraClass={'sbiri'} properties={buttonProp}>Ciao Ciao</Button>)
  }
)

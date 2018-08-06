import React from 'react'
import { storiesOf } from '@storybook/react'
import Panel from './index'
import Icons from '../icons'
import styled, {injectGlobal} from 'styled-components'
import NavigationItem from '../navigationItem'
import {Wrapper} from '../utilities'

const Block = styled.div`
  width: 600px;
  height: 150px;
  background: palevioletred;
`

const Button = styled.button`
  margin-top: 10px;
  margin-right: 10px;
`

storiesOf('Panel', module)
  .add('with actions', () => (
    <Wrapper>
    <Panel icon={<Icons.Diary width='18' color='#f0f0f0' />} title='Diary' actions={<Button>validate</Button>}>
    <div>
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    </div>
    </Panel>
    </Wrapper>
  ))
  .add('Multiple', () => (
    <Wrapper>
      <Panel navigation icon={<Icons.Diary width='18' color='#f0f0f0' />} title='Diary' />
      <Panel icon={<Icons.Users width='18' color='#f0f0f0' />} title='Users' />
      <Panel icon={<Icons.Globe width='18' color='#f0f0f0' />} title='Globe' />
      <Panel icon={<Icons.Settings width='18' color='#f0f0f0' />} title='Settings' />
      <Panel icon={<Icons.Power width='18' color='#f0f0f0' />} title='Power' />
    </Wrapper>
  ))
  .add('Extra Large', () => (
    <Wrapper>
      <Panel icon={<Icons.Diary width='18' color='#f0f0f0' />} title='Diary' />
      <Panel large icon={<Icons.Users width='18' color='#f0f0f0' />} title='Users'>
        <Block>asddsadas</Block>
      </Panel>
      <Panel icon={<Icons.Globe width='18' color='#f0f0f0' />} title='Globe' />
    </Wrapper>
  ))

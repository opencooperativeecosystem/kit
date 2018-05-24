import React from 'react'
import { storiesOf } from '@storybook/react'
import Panel from './index'
import Icons from '../icons'
import styled, {injectGlobal} from 'styled-components'

injectGlobal`
  body {
    background: #191B22;
  }
`

const Wrapper = styled.div`
  user-select: none;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 10px;
`

const Block = styled.div`
  width: 600px;
  height: 150px;
  background: palevioletred;
`

storiesOf('Panel', module)
  .add('Empty', () => (
    <Panel icon={<Icons.Diary width='18' color='#f0f0f0' />} title='Diary' />
  ))
  .add('Multiple', () => (
    <Wrapper>
      <Panel icon={<Icons.Diary width='18' color='#f0f0f0' />} title='Diary' />
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

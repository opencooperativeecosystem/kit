import React from 'react'
import { storiesOf } from '@storybook/react'
import Notifications from './index'
import styled, {injectGlobal} from 'styled-components'
import Icons from '../icons'

// injectGlobal`
//   body {
//     background: #191B22;
//   }
// `

const Wrapper = styled.div`
  margin: 10px;
  position: relative;
  min-height: 100vh;
`

const Title = styled.div`
  font-size: 14px;
`

const Span = styled.span`
  margin-right: 10px;
  vertical-align: sub;
`

const Separator = styled.div`
  margin-bottom: 10px;
`

const Right = styled.div`
  position: absolute;
  width: 300px;
  top: 0;
  right: 0;
`
const Left = styled.div`
  position: absolute;
  width: 300px;
  top: 0;
  left: 0;
`
const Center = styled.div`
  position: absolute;
  width: 300px;
  top: 0;
  left: 50%;
  margin-left: -150px;
`
const Bottom = styled.div`
  position: absolute;
  width: 300px;
  bottom: 20px;
  left: 50%;
  margin-left: -150px;
`

const BottomRight = styled.div`
  position: absolute;
  width: 300px;
  bottom: 20px;
  right: 0;
`
const BottomLeft = styled.div`
  position: absolute;
  width: 300px;
  bottom: 20px;
  left: 0;
`
const CenterRight = styled.div`
  position: absolute;
  width: 300px;
  top: 50%;
  right: 0;
  margin-top: -26px;
`
const CenterLeft = styled.div`
  position: absolute;
  width: 300px;
  left: 0px;
  top: 50%;
  margin-top: -26px;
`

const notifications = [
    {id: 1, type: 'normal', message:<Title><Span><Icons.Bell width='18' height='18' color='white' /></Span> An easy message!!!</Title>},
    {id: 2, type: 'warning', message:<Title><Span><Icons.Edit width='18' height='18' color='#091E42' /></Span> A warning message!!!</Title>},
    {id: 3, type: 'alert', message:<Title><Span><Icons.Bell width='18' height='18' color='white' /></Span> Alert!!!</Title>},
    {id: 4, type: 'success', message:<Title><Span><Icons.Check width='18' height='18' color='#091E42' /></Span> A success message!!!</Title>},

]

storiesOf('Notification', module)
  .add('Classic', () => (
    <Wrapper>
        <Notifications notifications={notifications} />
    {/* <Separator>
        <Notification message={<Title><Span><Icons.Bell width='18' height='18' color='white' /></Span> An easy message!!!</Title>} />
    </Separator>
    <Separator>
        <Notification type={'alert'} message={<Title><Span><Icons.Bell width='18' height='18' color='white' /></Span> Alert!!!</Title>} />
    </Separator>    
    <Separator>
        <Notification type={'warning'} message={<Title><Span><Icons.Edit width='18' height='18' color='#091E42' /></Span> A warning message!!!</Title>} />
    </Separator>    
    <Separator>
        <Notification type={'success'} message={<Title><Span><Icons.Check width='18' height='18' color='#091E42' /></Span> A success message!!!</Title>} />
    </Separator> */}
    </Wrapper>
  ))


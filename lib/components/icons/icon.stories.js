import React from 'react'
import styled, {injectGlobal} from 'styled-components'
import { storiesOf } from '@storybook/react'
import Icon, {Activity, Copy, Link, NewFile, Trash, Folder, Lock, Star, Clock, Edit2, Inventory, Loading, Calendar, Globe, Edit, Home, Work, Validate, Bell, User, Settings, Power, Preferites, Menu, Card, Left, Right, Text, Message, Cross, Users, Check, Shield, Plus, More} from './index'
import Fira from '../../../theme/FiraSans-Regular.ttf'
import Panel from '../panel'
import {Wrapper} from '../utilities'

injectGlobal`
  @font-face {
    font-family: Fira-Sans;
    src: url('${Fira}') format('opentype');
  }
`

const Item = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 1px solid rgba(240, 240, 240, .1)
`

const Span = styled.span`
  display: inline-block;
  vertical-align: sub;
  margin-right: 10px;
`

const Title = styled.h1`
  font-size: 16px;
  letter-spacing: 0.5px;
  display: inline-block;
  color: #F0F0F0;
  font-family: Fira-Sans;
`

const Header = styled.h1`
  background: #313542;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: #F0F0F0;
  font-family: Fira-Sans;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  border-radius: 3px 3px 0 0;
`

storiesOf('Icon', module)
  .add('All', () => (
    <Wrapper>
      <Panel icon={<Icon.Diary width='18' color='#f0f0f0' />} title='All icons'>
        <div>
          <Item>
            <Span><Activity width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Activity</Title>
          </Item>
          <Item>
            <Span><Copy width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Copy</Title>
          </Item>
          <Item>
            <Span><Link width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Link</Title>
          </Item>
          <Item>
            <Span><NewFile width='18' height='18' color='#F0F0F0' /></Span>
            <Title>NewFile</Title>
          </Item>
          <Item>
            <Span><Lock width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Lock</Title>
          </Item>
          <Item>
            <Span><Folder width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Folder</Title>
          </Item>
          <Item>
            <Span><Star width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Star</Title>
          </Item>
          <Item>
            <Span><Clock width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Clock</Title>
          </Item>
          <Item>
            <Span><Edit2 width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Edit2</Title>
          </Item>
          <Item>
            <Span><Trash width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Trash</Title>
          </Item>
          <Item>
            <Span><Icon.Diary width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Diary</Title>
          </Item>
          <Item>
            <Span><Inventory width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Inventory</Title>
          </Item>
          <Item>
            <Span><Globe width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Globe</Title>
          </Item>
          <Item>
            <Span><Home width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Home</Title>
          </Item>
          <Item>
            <Span><Edit width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Edit</Title>
          </Item>
          <Item>
            <Span><Work width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Work</Title>
          </Item>
          <Item>
            <Span><Validate width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Validate</Title>
          </Item>
          <Item>
            <Span><User width='18' height='18' color='#F0F0F0' /></Span>
            <Title>User</Title>
          </Item>
          <Item>
            <Span><Settings width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Settings</Title>
          </Item>
          <Item>
            <Span><Power width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Power</Title>
          </Item>
          <Item>
            <Span><Preferites width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Preferites</Title>
          </Item>
          <Item>
            <Span><Menu width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Menu</Title>
          </Item>
          <Item>
            <Span><Card width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Card</Title>
          </Item>
          <Item>
            <Span><Left width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Left</Title>
          </Item>
          <Item>
            <Span><Right width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Right</Title>
          </Item>
          <Item>
            <Span><Bell width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Bell</Title>
          </Item>
          <Item>
            <Span><Text width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Text</Title>
          </Item>
          <Item>
            <Span><Message width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Message</Title>
          </Item>
          <Item>
            <Span><Calendar width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Calendar</Title>
          </Item>
          <Item>
            <Span><Cross width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Cross</Title>
          </Item>
          <Item>
            <Span><Users width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Users</Title>
          </Item>
          <Item>
            <Span><Check width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Check</Title>
          </Item>
          <Item>
            <Span><Shield width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Shield</Title>
          </Item>
          <Item>
            <Span><Plus width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Plus</Title>
          </Item>
          <Item>
            <Span><More width='18' height='18' color='#F0F0F0' /></Span>
            <Title>More</Title>
          </Item>
          <Item>
            <Span><Loading width='18' height='18' color='#F0F0F0' /></Span>
            <Title>Loading</Title>
          </Item>
        </div>
      </Panel>
    </Wrapper>
  ))

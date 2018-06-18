import React from 'react'
import styled, {css} from 'styled-components'
import {clearFix, placeholder, animation} from 'polished'
import Icon from '../icons'

const Header = styled.div`
  ${clearFix()};
`
const HeaderTitle = styled.h5`
    font-size: 16px;
    text-align: left;
    margin: 0;
    margin-top: 5px;
    text-transform: capitalize;
    letter-spacing: .5px;
    float: left;
    width: 250px;
    color: #333;
    font-size: 16px;
    line-height: 18px;
    font-weight: 600;
`

const HeaderButton = styled.span`
  float: right;
  padding: 4px;
  height: 16px;
  width: 16px;
  text-align: center;
  cursor: pointer;
  border-radius: 3px;
  ${props => props.actionsPopup && css`
  background: #cdd2d4;
  `}
  &:hover {
    background: #cdd2d4;
    ${animation(['fadeIn', '.3s', 'ease-in-out'])}
  }
`
const Input = styled.input`
  width: 250px;
  color: #333;
  font-size: 16px;
  line-height: 30px;
  font-weight: 500;
  border: 0;
  border-radius: 4px;
  height: 30px;
  text-indent: 5px;
  ${placeholder({
    'color': '#BCBCBC',
    'font-size': '14px',
    'font-weight': '500'
  })}
`

const ListTitle = ({name, actionsPopup, toggleActions, id}) => (
  <Header>
    {name
    ? <HeaderTitle>{name}</HeaderTitle>
    : <Input placeholder='Type a process name' />
    }
    <HeaderButton actionsPopup={actionsPopup} onClick={toggleActions}>
      <Icon.More width='13' height='13' color='#999' />
    </HeaderButton>
  </Header>
)

export default ListTitle

import React from 'react'
import styled from 'styled-components'
import {clearFix} from 'polished'
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
`

const ListTitle = ({name, toggleActions, id}) => (
  <Header>
    <HeaderTitle>{name}</HeaderTitle>
    <HeaderButton onClick={() => toggleActions(id)}>
      <Icon.More width='13' height='13' color='#999' />
    </HeaderButton>
  </Header>
)

export default ListTitle

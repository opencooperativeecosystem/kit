import React from 'react'
import styled , {css }from 'styled-components'
import {clearFix, placeholder, animation} from 'polished'
import Icon from '../icons'

const InfosHeader = styled.div`
  ${clearFix()}
`
const InfosStatus = styled.div`
  float: left;
  height: 20px;
  line-height: 20px;
  background: #40485D;
  color: ${({completed}) => completed ? '#36B37E' : '#FFAB00'}
  border-radius: 3px;
  padding: 0 5px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  margin:0;
`

const InfosDue = styled.div`
  float: right;
  height: 20px;
  line-height: 20px;
  border-radius: 3px;
  padding: 0 10px;
`

const DueItem = styled.span`
  line-height: 20px;
  font-size: 13px;
  text-decoration: underline;
  font-weight: 500;
  color: #F0F0F0;
`
const Span = styled.span`
  vertical-align: sub;
  line-height: 20px;
  margin-right: 0px;
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
  background: #292d37;
  `}
  &:hover {
    background: #292d37;
    ${animation(['fadeIn', '.3s', 'ease-in-out'])}
  }
`

const Infos = ({status, due, plannedStart, plannedFinish, actionsPopup, toggleActions,}) => (
  <InfosHeader>
    {status
      ? <InfosStatus completed><Span><Icon.Check width='14' height='14' color='#36B37E'/></Span>Completed</InfosStatus>
      : <InfosStatus><Span><Icon.Cross width='14' height='14' color='#FFAB00'/></Span> Incompleted</InfosStatus>}
    <HeaderButton actionsPopup={actionsPopup} onClick={toggleActions}>
      <Icon.Settings width='14' height='14' color='#fafafa' />
    </HeaderButton>
    {plannedStart
      ? <InfosDue>
        <DueItem>from {plannedStart} to {plannedFinish}</DueItem>
      </InfosDue>
    : '' }
  </InfosHeader>
)

export default Infos

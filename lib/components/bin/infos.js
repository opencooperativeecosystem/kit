import React from 'react'
import styled from 'styled-components'
import {clearFix} from 'polished'

const InfosHeader = styled.div`
  ${clearFix()}
`
const InfosStatus = styled.div`
  float: left;
  height: 24px;
  line-height: 24px;
  background: ${(status) => status ? '#36B37E' : '#FFAB00'}
  border-radius: 3px;
  padding: 0 10px;
  line-height: 24px;
  font-size: 13px;
  font-weight: 500;
  color: #172b4d;
  margin:0;
`

const InfosDue = styled.div`
  float: right;
  height: 24px;
  line-height: 24px;
  background: #c7c7c7;
  border-radius: 3px;
  padding: 0 10px;
`

const DueItem = styled.span`
  line-height: 24px;
  font-size: 13px;
  text-decoration: underline;
  font-weight: 500;
  color: #444444;
`

const Infos = ({status, due}) => (
  <InfosHeader>
    {status
      ? <InfosStatus completed >Completed</InfosStatus>
      : <InfosStatus >Incompleted</InfosStatus>}
    {due
      ? <InfosDue>
        <DueItem>Start {due}</DueItem>
      </InfosDue>
    : '' }
  </InfosHeader>
)

export default Infos

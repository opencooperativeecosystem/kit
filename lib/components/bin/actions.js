import React from 'react'
import styled from 'styled-components'

const ActionsList = styled.div`
  position: absolute;
  right: -140px;
  top: 0px;
  z-index: 999999;
`

const ActionsItem = styled.div`
  background: rgba(0,0,0,.6);
  border-radius: 3px;
  clear: both;
  color: #e6e6e6;
  display: block;
  float: left;
  margin: 0 0 4px 8px;
  padding: 6px 12px 6px 8px;
  text-decoration: none;
  transition: transform 85ms ease-in;
  cursor: pointer;
`

const ItemTitle = styled.h5`
  color: #e6e6e6;
  margin: 0;
  font-size: 13px;
  font-weight: 400;
`

const Actions = ({status, updateProcess}) => (
  <ActionsList>
    <ActionsItem onClick={updateProcess}>
      <ItemTitle>Set as {status ? 'Incompleted' : 'Completed'}</ItemTitle>
    </ActionsItem>
    <ActionsItem>
      <ItemTitle>Edit due date</ItemTitle>
    </ActionsItem>
  </ActionsList>
)

export default Actions

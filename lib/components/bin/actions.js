import React from 'react'
import styled from 'styled-components'
import { clearFix } from 'polished';
import Icons from '../icons'
import {compose, withState} from 'recompose'

const ActionsList = styled.div`
  position: absolute;
  right: -270px;
  top: 40px;
  z-index: 999999;
  background: #fff;
  border-radius: 3px;
  border: 1px solid #d6dadc;
  border-bottom-color: #c4c9cc;
  box-shadow: 0 1px 6px rgba(0,0,0,.15);
  width: 300px;
  -webkit-transform: translateZ(0);
`

const ActionsItem = styled.div`
  cursor: pointer;
  display: block;
  font-weight: 700;
  padding: 6px 10px;
  position: relative;
  color: #444;
  font-size: 14px;
  margin: 0px;
  text-decoration: none;
  margin-bottom: 10px;
  &:hover {
    background-color: #298fca;
    h5 {color: #fff;}
  }
`

const Div = styled.div`
  display: block;
  font-weight: 700;
  padding: 6px 10px;
  position: relative;
  color: #444;
  font-size: 14px;
  margin: 0px;
  text-decoration: none;
  margin-bottom: 10px;
`

const ItemTitle = styled.h5`
  color: #444;
  margin: 0;
  font-size: 14px;
  font-weight: 700;
`
const ActionTitle = styled.div`
  height: 36px;
  position: relative;
  margin-bottom: 8px;
  text-align: center;
  box-sizing: border-box;
  
  display: block;
  ${clearFix()};
`

const H5 = styled.h5`
  line-height: 36px; 
  border-bottom: 1px solid #d6dadc;
  margin: 0 10px;
  overflow: hidden;
  padding: 0 32px;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 1;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 14px;
  color: #8c8c8c;
`
const Span = styled.span`
  padding: 8px 10px 10px 4px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  cursor: pointer;
`

const SpanLeft = styled.span`
  padding: 8px 10px 10px 4px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  cursor: pointer;
`

const ActionName = styled.div`
  position: absolute;
  background: white;
  display: block;  
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999999
`

const Actions = ({card, toggleCard,Dueform, Titleform, Noteform, Scopeform, Startform, Archive, status, updateProcess, handleActionsPopup}) => (
  <ActionsList>
    <ActionTitle>
      <H5>Actions on Process</H5>
      <Span onClick={handleActionsPopup}><Icons.Cross height='18' width='18' color='#8c8c8c' /></Span>
    </ActionTitle>
    <ActionsItem onClick={updateProcess}>
      <ItemTitle>Set as {status ? 'Incompleted' : 'Completed'}</ItemTitle>
    </ActionsItem>
    <ActionsItem onClick={() => toggleCard('title')}>
      <ItemTitle>Edit name</ItemTitle>
    </ActionsItem>
    <ActionsItem onClick={() => toggleCard('note')}>
      <ItemTitle>Edit Note</ItemTitle>
    </ActionsItem>
    <ActionsItem onClick={() => toggleCard('scope')}>
      <ItemTitle>Edit Scope</ItemTitle>
    </ActionsItem>
    <ActionsItem onClick={() => toggleCard('date')}>
      <ItemTitle>Edit start date</ItemTitle>
    </ActionsItem>
    <ActionsItem onClick={() => toggleCard('duedate')}>
      <ItemTitle>Edit due date</ItemTitle>
    </ActionsItem>
    <ActionsItem onClick={() => toggleCard('delete')}>
      <ItemTitle>Delete the process</ItemTitle>
    </ActionsItem>
    {card === 'title'
    ? <ActionName>
      <ActionTitle>
        <SpanLeft onClick={() => toggleCard('')}><Icons.Left height='18' width='18' color='#8c8c8c' /></SpanLeft>
        <H5>Edit the name</H5>
        <Span onClick={handleActionsPopup}><Icons.Cross height='18' width='18' color='#8c8c8c' /></Span>
      </ActionTitle>
      <Div>
        {Titleform}
      </Div>
    </ActionName>
    : null}
    {card === 'note'
    ? <ActionName>
      <ActionTitle>
        <SpanLeft onClick={() => toggleCard('')}><Icons.Left height='18' width='18' color='#8c8c8c' /></SpanLeft>
        <H5>Edit the note</H5>
        <Span onClick={handleActionsPopup}><Icons.Cross height='18' width='18' color='#8c8c8c' /></Span>
      </ActionTitle>
      <Div>
        {Noteform}
      </Div>
    </ActionName>
    : null }
    {card === 'scope'
    ? <ActionName>
      <ActionTitle>
        <SpanLeft onClick={() => toggleCard('')}><Icons.Left height='18' width='18' color='#8c8c8c' /></SpanLeft>
        <H5>Edit the scope</H5>
        <Span onClick={handleActionsPopup}><Icons.Cross height='18' width='18' color='#8c8c8c' /></Span>
      </ActionTitle>
      <Div>
        {Scopeform}
      </Div>
    </ActionName>
    : null }
    {card === 'date'
    ? <ActionName>
      <ActionTitle>
        <SpanLeft onClick={() => toggleCard('')}><Icons.Left height='18' width='18' color='#8c8c8c' /></SpanLeft>
        <H5>Edit the start date</H5>
        <Span onClick={handleActionsPopup}><Icons.Cross height='18' width='18' color='#8c8c8c' /></Span>
      </ActionTitle>
      <Div>
        {Startform}
      </Div>
    </ActionName>
    : null}
    {card === 'duedate'
    ? <ActionName>
      <ActionTitle>
        <SpanLeft onClick={() => toggleCard('')}><Icons.Left height='18' width='18' color='#8c8c8c' /></SpanLeft>
        <H5>Edit the due date</H5>
        <Span onClick={handleActionsPopup}><Icons.Cross height='18' width='18' color='#8c8c8c' /></Span>
      </ActionTitle>
      <Div>
        {Dueform}
      </Div>
    </ActionName>
    : null}
    {card === 'delete'
    ? <ActionName>
      <ActionTitle>
        <SpanLeft onClick={() => toggleCard('')}><Icons.Left height='18' width='18' color='#8c8c8c' /></SpanLeft>
        <H5>Delete the process</H5>
        <Span onClick={handleActionsPopup}><Icons.Cross height='18' width='18' color='#8c8c8c' /></Span>
      </ActionTitle>
      <Div>
        {Archive}
      </Div>
    </ActionName>
    : null}
  </ActionsList>
)

export default compose(withState('card', 'toggleCard', null))(Actions)

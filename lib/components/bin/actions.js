import React from 'react'
import styled, {css} from 'styled-components'
import { clearFix } from 'polished';
import Icons from '../icons'
import {compose, withState, withHandlers} from 'recompose'

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
  overflow: hidden;
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
  font-weight: 800;
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
  display: none;
  background: white;
  ${props => props.title && css`
    display: block;  
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9999999
  `}
`

const Actions = ({Titleform, Noteform, dueForm, archiveForm, status, updateProcess, handleActionsPopup, title, note, due, archive, onToggleTitle, onToggleNote, onToggleDue, onToggleArchive}) => (
  <ActionsList>
    <ActionTitle>
      <H5>Actions on Process</H5>
      <Span onClick={handleActionsPopup}><Icons.Cross height='18' width='18' color='#8c8c8c' /></Span>
    </ActionTitle>
    <ActionsItem onClick={updateProcess}>
      <ItemTitle>Set as {status ? 'Incompleted' : 'Completed'}</ItemTitle>
    </ActionsItem>
    <ActionsItem onClick={onToggleTitle}>
      <ItemTitle>Edit Title</ItemTitle>
    </ActionsItem>
    <ActionsItem onClick={onToggleNote}>
      <ItemTitle>Edit Note</ItemTitle>
    </ActionsItem>
    <ActionsItem onClick={onToggleDue}>
      <ItemTitle>Edit due date</ItemTitle>
    </ActionsItem>
    <ActionsItem onClick={onToggleArchive}>
      <ItemTitle>Archive the process</ItemTitle>
    </ActionsItem>
    <ActionName title={title}>
      <ActionTitle>
        <SpanLeft onClick={onToggleTitle}><Icons.Left height='18' width='18' color='#8c8c8c' /></SpanLeft>
        <H5>Edit the title</H5>
        <Span onClick={handleActionsPopup}><Icons.Cross height='18' width='18' color='#8c8c8c' /></Span>
      </ActionTitle>
      <Div>
        <Titleform />
      </Div>
    </ActionName>
    <ActionName title={note}>
      <ActionTitle>
        <SpanLeft onClick={onToggleNote}><Icons.Left height='18' width='18' color='#8c8c8c' /></SpanLeft>
        <H5>Edit the note</H5>
        <Span onClick={handleActionsPopup}><Icons.Cross height='18' width='18' color='#8c8c8c' /></Span>
      </ActionTitle>
      <Div>
        <Noteform />
      </Div>
    </ActionName>
    <ActionName title={due}>
      <ActionTitle>
        <SpanLeft onClick={onToggleDue}><Icons.Left height='18' width='18' color='#8c8c8c' /></SpanLeft>
        <H5>Edit the due date</H5>
        <Span onClick={handleActionsPopup}><Icons.Cross height='18' width='18' color='#8c8c8c' /></Span>
      </ActionTitle>
      <Div>
        {dueForm}
      </Div>
    </ActionName>
    <ActionName title={archive}>
      <ActionTitle>
        <SpanLeft onClick={onToggleArchive}><Icons.Left height='18' width='18' color='#8c8c8c' /></SpanLeft>
        <H5>Archive the process</H5>
        <Span onClick={handleActionsPopup}><Icons.Cross height='18' width='18' color='#8c8c8c' /></Span>
      </ActionTitle>
      <Div>
        {archiveForm}
      </Div>
    </ActionName>
  </ActionsList>
)



export default compose(
  withState('title', 'toggleTitle', false),
  withState('note', 'toggleNote', false),
  withState('due', 'toggleDue', false),
  withState('archive', 'toggleArchive', false),
  withHandlers({
    onToggleTitle : props => event => {
      props.toggleTitle(!props.title)
    },
    onToggleNote : props => event => {
      props.toggleNote(!props.note)
    },
    onToggleDue : props => event => {
      props.toggleDue(!props.due)
    },
    onToggleArchive : props => event => {
      props.toggleArchive(!props.archive)
    }
  })
)(Actions)

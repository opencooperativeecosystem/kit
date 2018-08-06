import React from 'react'
import styled, {css} from 'styled-components'
import { clearFix } from 'polished';
import Icons from '../icons'
import {compose, withState, withHandlers} from 'recompose'

const ActionsList = styled.div`
  background: #fff;
  border-radius: 3px;
  border: 1px solid #d6dadc;
  border-bottom-color: #c4c9cc;
  box-shadow: 0 1px 6px rgba(0,0,0,.15);
  width: 300px;
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

const Actions = ({handleActionsPopup, children, title}) => (
  <ActionsList>
    <ActionTitle>
      <H5>{title}</H5>
      <Span onClick={handleActionsPopup}><Icons.Cross height='18' width='18' color='#8c8c8c' /></Span>
    </ActionTitle>
    {children}
  </ActionsList>
)



export default compose(
)(Actions)

import React from 'react'
import Actions from './actions'
import BinHeader from './binHeader'
import Infos from './infos'
import styled from 'styled-components'
import Input from '../form/input'
import Button from '../button'
import Icons from '../icons'
import {clearFix} from 'polished'
import {compose, withState, withHandlers} from 'recompose'

const Wrapper = styled.div`
  display:flex;
  margin-right: 10px;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  position: relative;
  transition: background 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in;
`
const WrapperNewBin = styled.div`
  width: 300px;
  margin-right: 10px;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  position: relative;
  transition: background 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in;
  margin-top: 0;
`
const BinContainer = styled.div`
  background: #393F4F;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  width: 300px;
  position: relative;
  white-space: normal;
  box-shadow: 0 1px 1px rgba(23,43,77,0.2), 0 0 0.5px 0 rgba(23,43,77,0.25);
  transition: all 0.3s cubic-bezier(0.15, 1, 0.33, 1);
`
const MainHeader = styled.div`
  flex: 0 0 auto;
  padding: 8px 10px;
  position: relative;
  min-height: 18px;
`

const HeaderNote = styled.p`
  font-size: 13px;
  font-weight: 300;
  line-height: 16px;
  margin-top: 16px;
  color: #8190a8;
  word-wrap:break-word;
`
const BinCards = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  margin: 0 4px;
  padding: 0 4px;
  z-index: 1;
  min-height: 0;
  overflow-x: hidden; 
`

const OpenComposerButton = styled.a`
  border-radius: 0 0 3px 3px;
  color: #99ADC6;
  display: block;
  flex: 0 0 auto;
  padding: 8px 10px;
  position: relative;
  text-decoration: none;
  user-select: none;
  font-size: 13px;
  letter-spacing: .5px;
  cursor: pointer;
  &:hover {
    background-color: #313642;
    text-decoration: underline;
  }
`
const WrapperIcon = styled.span`
  margin-left: 10px;
  vertical-align: sub;
  cursor: pointer;
`

const Scope = styled.div`
  margin: 8px 0;
  font-size: 13px;
  font-weight: 500;
  color: #99ADC6;
`
const ScopeSpan = styled.span`
  margin-right: 8px;
  vertical-align: middle;
`

const Bin = ({
  children,
  openCardController,
  updateProcess,
  actionsPopup,
  Titleform,
  Noteform,
  Scopeform,
  Startform,
  Dueform,
  Archive,
  scope,
  name,
  status,
  infoNote,
  plannedStart,
  plannedFinish,
  due,
  handleActionsPopup,
  cardController}) => {
  return (
    <Wrapper>
      { actionsPopup ? <Actions Titleform={Titleform} Noteform={Noteform} Scopeform={Scopeform} Startform={Startform} Dueform={Dueform} Archive={Archive} handleActionsPopup={handleActionsPopup} status={status} updateProcess={updateProcess} /> : ''}
      <BinContainer>
        <MainHeader>
          <Infos status={status} due={due} toggleActions={handleActionsPopup} actionsPopup={actionsPopup} plannedStart={plannedStart} plannedFinish={plannedFinish}/>
          <BinHeader name={name}  />
          <Scope><ScopeSpan><Icons.Users width='14' height='14' color='#99ADC6' /></ScopeSpan>{scope}</Scope>
          <HeaderNote>{infoNote}</HeaderNote>
        </MainHeader>
        <BinCards>
          {/* <BinCardsTitle>Commitments</BinCardsTitle> */}
          {children}
          {/* <Composer cardController={cardController} id={id} openCardController={openCardController} /> */}
        </BinCards>
        {/* {outputs ? <Outputs outputs={outputs} /> : '' } */}
        {cardController ? '' : <OpenComposerButton onClick={openCardController}>Create a new commitment...</OpenComposerButton> }
      </BinContainer>
    </Wrapper>
  )
}


export default compose(
  withState('actionsPopup', 'toggleActionsPopup', false),
  withHandlers({
    handleActionsPopup : props => (event) => {
      props.toggleActionsPopup(!props.actionsPopup)
    }
  }),
)(Bin)



const ActionWrapper = styled.div`
  ${clearFix()};
  margin-bottom: 10px;
  margin-left: 10px;
  margin-top: 0px;
`
const WrapperInput = styled.div`
  cursor: pointer;
  &:hover {
    background: #ffffff13;
  }
  & > input {
    cursor: pointer;
    background: #ffffff26;
    transition: color 85ms ease-in;
  }
`
const DateWrapper = styled.div`
  display: inline-block;
  width: 180px;
  height: 32px;
  border: none;
  margin-top: 5px;
  background: #6bccab;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  line-height: 32px;
`

const H5 = styled.h5`
  margin: 0;
  float: left;
  margin-left: 10px;
  padding-right: 10px;
  border-right: 1px solid #ffffff52;
  line-height: 32px;
  font-weight: 500;
  color: white;
  letter-spacing: .5px;
`

export const NewBin = ({children, clicked, touched, errors, name, note, toggleClicked, scope, options, dateComponent}) => {
  return (
  <WrapperNewBin>
    {clicked
    ? <BinContainer>
      <MainHeader>
        {children}
      </MainHeader>
      <ActionWrapper>
        <Button>Save</Button>
        <WrapperIcon onClick={toggleClicked}><Icons.Cross width='20' height='20' color='#f0f0f0' /></WrapperIcon>
      </ActionWrapper>
    </BinContainer>
    : <WrapperInput onClick={toggleClicked}><Input placeholder='Type a process name' /></WrapperInput>
    }
  </WrapperNewBin>
)}

// export const Bin

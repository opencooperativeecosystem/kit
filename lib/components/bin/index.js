import React from 'react'
import Actions from './actions'
import BinHeader from './binHeader'
import Infos from './infos'
import Composer from './composer'
import Outputs from './outputs'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 300px;
  margin-right: 10px;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  position: relative;
`
const BinContainer = styled.div`
  background: #E2E4E6;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100%;
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
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  margin-top: 5px;
  color: #575757
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

const BinCardsTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: .5;
  margin-top: 8px;
  margin-bottom: 8px;
`
const OpenComposerButton = styled.a`
  border-radius: 0 0 3px 3px;
  color: #8c8c8c;
  display: block;
  flex: 0 0 auto;
  padding: 8px 10px;
  position: relative;
  text-decoration: none;
  user-select: none;
  font-size: 13px;
  letter-spacing: .5px;
  cursor: pointer;
`
const Bin = ({
  children,
  openCardController,
  updateProcess,
  actionPopupId,
  actionPopup,
  toggleActions,
  name,
  status,
  infoNote,
  infoDue,
  outputs,
  id,
  cardController}) => {
  return (
    <Wrapper>
      { actionPopup && Number(actionPopupId) === Number(id) ? <Actions status={status} updateProcess={updateProcess} /> : ''}
      <BinContainer>
        <MainHeader>
          <BinHeader name={name} toggleActions={toggleActions} id={id} />
          {infoNote ? <HeaderNote>{infoNote}</HeaderNote> : ''}
          <Infos status={status} due={infoDue} />
        </MainHeader>
        <BinCards>
          <BinCardsTitle>Commitments</BinCardsTitle>
          {children}
          <Composer cardController={cardController} id={id} openCardController={openCardController} />
        </BinCards>
        {outputs.length !== 0 ? <Outputs outputs={outputs} /> : '' }
        {cardController ? '' : <OpenComposerButton onClick={openCardController}>Create a new commitment...</OpenComposerButton> }
      </BinContainer>
    </Wrapper>
  )
}

export default Bin

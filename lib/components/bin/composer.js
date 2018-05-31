import React from 'react'
import styled from 'styled-components'
import Icon from '../icons'
import Textarea from '../form/textarea'
import Button from '../button'

const WrapperComposer = styled.div`
  padding-bottom: 8px;
  margin-top: 8px;
`
const ComposerCard = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 6px;
  max-width: 300px;
  min-height: 20px;
  position: relative;
  z-index: 0;
`

const CardController = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 10;
`
const IconWrapper = styled.span`
  margin-left: 10px;
  height: 36px;
  line-height: 36px;
  position: relative;
  top: 8px;
  cursor: pointer;
`

const Composer = ({cardController, updateNewCardTitle, newCardTitle, openCardController }) => (
  cardController
  ? <WrapperComposer>
    <ComposerCard>
      <CardController>
        <Textarea action={updateNewCardTitle} placeholder={'Write a new commitment'} />
      </CardController>
    </ComposerCard>
    <div>
      <Button> Add </Button>
      <IconWrapper onClick={openCardController}><Icon.Cross width='24' height='24' color='#313543' /></IconWrapper>
    </div>
  </WrapperComposer>
  : <div />
)

export default Composer

import React from 'react'
import styled from 'styled-components'

const OutputsList = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  margin: 0 4px;
  padding: 0 4px;
  z-index: 1;
  min-height: 0;
  overflow-x: hidden;
`

const OutTitle = styled.h2`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: .5;
  margin-top: 0;
`

const OutputsCards = styled.div`
  background: #333C44;
  border-radius: 3px;
  overflow: hidden;
  padding: 6px 6px 2px 8px;
  position: relative;
  z-index: 10;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  cursor: pointer;
  margin-bottom: 6px;
  max-width: 300px;
  min-height: 20px;
  position: relative;
  z-index: 0;
  padding: 10px;
`

const CardsTitle = styled.span`
  color: white;
  font-size: 14px;
  font-weight: 500;
`

const Outputs = ({outputs}) => (
  <OutputsList>
    <OutTitle>Outputs</OutTitle>
    {outputs.map((o, i) => (
      <OutputsCards key={i}>
        <CardsTitle>{o.resourceClassifiedAs.name}</CardsTitle>
      </OutputsCards>
    ))}
  </OutputsList>
)

export default Outputs

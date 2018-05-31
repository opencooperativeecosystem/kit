import React from 'react'
import styled from 'styled-components'

const DataWrapper = styled.div`
  height: 140px;
  border-radius: 4px;
  width: 315px;
  margin-right: 10px;
  &:last-of-type {
    margin-right: 0;
  }
  box-shadow: 0 3px 10px #1E1445;
  background: linear-gradient(#44B3F6, #207BEA);
  float: left;
  margin-bottom:  10px;
`

const ItemData = styled.div`
  padding: 15px;
  padding-top: 5px;
`

const ItemQt = styled.h5`
  font-size: 46px;
  color: #fff;
  font-weight: 900;
  margin: 0;
`

const ItemDesc = styled.h5`
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  margin: 0;
`

const IconWrapper = styled.div`
  padding: 15px;
  padding-bottom: 0
`

const DataBox = ({icon, qt, title}) => (
  <DataWrapper>
    <IconWrapper>{icon}</IconWrapper>
    <ItemData>
      <ItemQt>{qt}</ItemQt>
      <ItemDesc>{title}</ItemDesc>
    </ItemData>
  </DataWrapper>
)

export default DataBox

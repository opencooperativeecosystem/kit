import React from 'react'
import styled from 'styled-components'
import { clearFix, animation } from 'polished'

const Container = styled.div`
  user-select: none;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const Item = styled.div`
  background: #393F4F;
  border-radius: 3px;
  height: 60px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .2);
  ${clearFix()}
`

const Title = styled.h5`
  color: #F0F0F0;
  font-size: 14px;
  line-height: 40px;
  font-weight: 500;
  margin-top: 0px;
  line-height: 60px;
`

const PhotoContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 3px;
  background: #292D37;
  margin: 10px;
  float: left;
`

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 3px;
`

const Work = ({img, title}) => {
  return (
    <Item>
      <PhotoContainer><Img src={img} /></PhotoContainer>
      <Title>{title}</Title>
    </Item>
  )
}

export default Work

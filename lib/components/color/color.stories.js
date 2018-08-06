import React from 'react'
import { storiesOf } from '@storybook/react'
// import Card from './index'
import styled from 'styled-components'
import {clearFix} from 'polished'

const Wrapper = styled.div`
  padding: 20px 40px;
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  margin: 0;
`

const Description = styled.h4`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  margin-top: 8px;
`

const Component = styled.div`
  margin-top: 16px;
`

const BoxWrapper = styled.div`
    border-radius: 6px;
    background-color: #f4f5f7;
    width: 25%;
    float: left;
    margin-right: 8px;
    margin-bottom: 8px;
`
const Box = styled.div`
    position: relative;
    height: 0;
    padding-bottom: 50%;
    border-radius: 6px 6px 0 0;
    border: 1px solid transparent;
    
    background-color: #FF5630;
`
const BoxInfos = styled.div`
    position: relative;
    left: 50%;
    float: left;
    padding: 10px 0;
    transform: translateX(-50%);
`

const BoxInfo = styled.div`
    float: left;
    padding: 10px 30px;
    min-width: 65px;
`
const BoxTitle = styled.h5`
font-size: 11px;
color: #62748c;
text-transform: uppercase;
line-height: 16px;
margin: 0;
`
const BoxValue = styled.h6`
  font-size: 14px;
  margin: 0;
  margin-top: 10px;
`


storiesOf('Color', module)
  .add('Palette', () => (
    <Wrapper>
        <Title>Color</Title>
        <Description>Lorem ipsum</Description>
        <Component>
            <BoxWrapper>
                <Box primary900 />
                <BoxInfos>
                <BoxInfo>
                    <BoxTitle>Name</BoxTitle>
                    <BoxValue>Primary-900</BoxValue>
                </BoxInfo>
                <BoxInfo>
                    <BoxTitle>HEX</BoxTitle>
                    <BoxValue>#dadada</BoxValue>
                </BoxInfo>
                </BoxInfos>
            </BoxWrapper>
            <BoxWrapper>
                <Box primary900 />
                <BoxInfos>
                <BoxInfo>
                    <BoxTitle>Name</BoxTitle>
                    <BoxValue>Primary-900</BoxValue>
                </BoxInfo>
                <BoxInfo>
                    <BoxTitle>HEX</BoxTitle>
                    <BoxValue>#dadada</BoxValue>
                </BoxInfo>
                </BoxInfos>
            </BoxWrapper>
            <BoxWrapper>
                <Box primary900 />
                <BoxInfos>
                <BoxInfo>
                    <BoxTitle>Name</BoxTitle>
                    <BoxValue>Primary-900</BoxValue>
                </BoxInfo>
                <BoxInfo>
                    <BoxTitle>HEX</BoxTitle>
                    <BoxValue>#dadada</BoxValue>
                </BoxInfo>
                </BoxInfos>
            </BoxWrapper>
            <BoxWrapper>
                <Box primary900 />
                <BoxInfos>
                <BoxInfo>
                    <BoxTitle>Name</BoxTitle>
                    <BoxValue>Primary-900</BoxValue>
                </BoxInfo>
                <BoxInfo>
                    <BoxTitle>HEX</BoxTitle>
                    <BoxValue>#dadada</BoxValue>
                </BoxInfo>
                </BoxInfos>
            </BoxWrapper>
            <BoxWrapper>
                <Box primary900 />
                <BoxInfos>
                <BoxInfo>
                    <BoxTitle>Name</BoxTitle>
                    <BoxValue>Primary-900</BoxValue>
                </BoxInfo>
                <BoxInfo>
                    <BoxTitle>HEX</BoxTitle>
                    <BoxValue>#dadada</BoxValue>
                </BoxInfo>
                </BoxInfos>
            </BoxWrapper>
            <BoxWrapper>
                <Box primary900 />
                <BoxInfos>
                <BoxInfo>
                    <BoxTitle>Name</BoxTitle>
                    <BoxValue>Primary-900</BoxValue>
                </BoxInfo>
                <BoxInfo>
                    <BoxTitle>HEX</BoxTitle>
                    <BoxValue>#dadada</BoxValue>
                </BoxInfo>
                </BoxInfos>
            </BoxWrapper>
        </Component>
    </Wrapper>

  ))
  
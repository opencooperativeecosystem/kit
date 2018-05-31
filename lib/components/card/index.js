import React from 'react'
import styled from 'styled-components'
import {Line} from 'rc-progress'

const CardWrapper = styled.div`
    background: white;
    border-bottom: 1px solid #ccc;
    border-radius: 3px;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 6px;
    max-width: 300px;
    min-height: 20px;
    position: relative;
    z-index: 0;
    padding: 10px;
    padding-top: 0;
`

const CardTitle = styled.div`
    font-size: 14px;
    line-height: 20px;
    clear: both;
    font-weight: 400;
    margin: 0 0 4px;
    overflow: hidden;
    word-wrap: break-word;
    color: #4d4d4d;
    margin-top: 8px;
`

const Info = styled.div`
    margin-top: 5px;
`

const Due = styled.h4`
    color: #ADADAD;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 1px;
    margin: 0;
    float: left;
    height: 20px;
    line-height: 20px;
`
const Members = styled.div`
    float: right;
`

const Member = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    display: inline-block;
    background: #adadad;
    margin-left: 5px;
`

const Img = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  font-size: 0;
`

const Card = ({percentage, openCard, note, due, members}) => {
  return (
    <CardWrapper onClick={openCard}>
      <Line percent={percentage > 100 ? 100 : percentage} strokeWidth="1" strokeColor="#4DC65E" />
      <CardTitle>{note}</CardTitle>
      <Info>
        <Due>Due to {due}</Due>
        <Members>
          {members.map((member, i) => (
            <Member key={i}>
              <Img src={member.image} />
            </Member>
          ))}
        </Members>
      </Info>
    </CardWrapper>
  )
}

export default Card

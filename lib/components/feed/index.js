import React from "react";
import styled from "styled-components";
import { clearFix } from "polished";

const FeedItem = styled.div`
  border-bottom: 1px solid #e2e4e61a;
  min-height: 30px;
  padding: 10px 0;
  position: relative;
  margin-bottom: 10px;
  margin: 0 6px 0 0;
  word-wrap: break-word;
  font-size: 14px;
  color: #f0f0f0bd;
  ${clearFix()};
`;

const Primary = styled.div`
`;

const Secondary = styled.div`
  font-weight: 300;
  margin-top: 5px;
`;

const Member = styled.div`
  float: left;
  vertical-align: sub;
`;

const MemberItem = styled.span`
  background-color: #d6dadc;
  border-radius: 3px;
  color: #4d4d4d;
  display: block;
  float: left;
  height: 30px;
  margin: 0 4px 4px 0;
  overflow: hidden;
  position: relative;
  width: 30px;
  user-select: none;
  z-index: 0;
`;

const Desc = styled.div`
  float: left;
  margin-left: 5px;
`

const Img = styled.img`
  width: 32px;
  height: 32px;
  display: block;
  -webkit-appearance: none;
  line-height: 32px;
  text-indent: 4px;
  font-size: 13px;
  overflow: hidden;
  max-width: 32px;
  max-height: 32px;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  color: #8c8c8c;
  font-size: 13px;
  margin-top: 5px;
  font-weight: 300;
`;

export default function({ image, primary, secondary, date }) {
  return (
    <FeedItem>
      <Member>
        <MemberItem>
          <Img alt="provider" src={image} />
        </MemberItem>
      </Member>
      <Desc>
        <Primary>{primary}</Primary>
        <Secondary>{secondary}</Secondary>
        <Date>{date}</Date>
      </Desc>
    </FeedItem>
  );
}

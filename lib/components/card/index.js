import React from "react";
import styled, { css } from "styled-components";
import { Line } from "rc-progress";
import Icons from "../icons";
import { clearFix } from "polished";

const CardWrapper = styled.div`
  background: #40485d;
  border-bottom: 1px solid #292d37;
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
  ${props =>
    props.dark &&
    css`
      background: #333c44;
      color: white;
    `};
`;

const CardTitle = styled.div`
  font-size: 14px;
  line-height: 20px;
  clear: both;
  font-weight: 400;
  overflow: hidden;
  word-wrap: break-word;
  color: #f0f0f0;
  margin-top: 8px;
  text-transform: capitalize;
  text-decoration: underline;
`;

const Info = styled.div`
  margin-top: 5px;
  ${clearFix()};
`;

const Due = styled.h4`
  color: #99adc6;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 1px;
  margin: 0;
  float: left;
  height: 20px;
  line-height: 20px;
  border-radius: 3px;
  ${props =>
    props.deadline === "soon" &&
    css`
      color: #ffffff;
      background: #ffab00;
      padding: 0 5px;
    `} ${props =>
    props.deadline === "expired" &&
    css`
      color: #ffffff;
      background: #ff5630;
      padding: 0 5px;
    `};
`;
const Members = styled.div`
  float: right;
  line-height: 10px;
`;

const Member = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  display: inline-block;
  background: #adadad;
  margin-left: 5px;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  font-size: 0;
`;

const CardNote = styled.div`
  font-size: 13px;
  color: #f0f0f0;
  letter-spacing: 0.5px;
  line-height: 16px;
  font-weight: 300;
  margin-top: 8px;
  margin-bottom: 16px;
`;

const Span = styled.span`
  margin-right: 8px;
  vertical-align: sub;
`;
const SpanClock = styled.span`
  margin-right: 4px;
  vertical-align: sub;
`;

const Card = ({ openCard, deadline, title, note, due, status, members, dark }) => {
  return (
    <CardWrapper onClick={openCard}>
      <CardTitle dark={dark}>
        {status ? (
          <Span>
            <Icons.Check width="16" height="16" color="#36B37E" />
          </Span>
        ) : (
          <Span>
            <Icons.Cross width="16" height="16" color="#99ADC6" />
          </Span>
        )}
        {title}
      </CardTitle>
      {note ? <CardNote>{note}</CardNote> : null}
      <Info>
        <Due deadline={deadline}>
          <SpanClock>
            <Icons.Clock
              width="14"
              height="14"
              color={deadline ? "#fff" : "#99ADC6"}
            />{" "}
          </SpanClock>{" "}
          {due}
        </Due>
        <Members>
          {members.map((member, i) => (
            <Member key={i}>
              <Img src={member.image} />
            </Member>
          ))}
        </Members>
      </Info>
    </CardWrapper>
  );
};

export default Card;

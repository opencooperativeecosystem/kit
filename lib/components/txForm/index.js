import React from "react";
import styled from "styled-components";
import Icons from "../icons";
import Button from "../button";
import { clearFix, placeholder } from "polished";

const Wrapper = styled.div`
  height: 60px;
  background-color: #fff;
  border-top: 1px solid #e9e9e9;
  padding: 0 10px;
  border-radius: 4px;
  ${clearFix()};
  line-height: 60px;
`;
const TxInputWrapper = styled.div`
  height: 40px;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  margin-right: 10px;
  margin-top: 10px;
  float: left;
  ${clearFix()};
`;

const InputLabel = styled.h5`
  font-size: 14px;
  font-weight: 600;
  padding-right: 10px;
  border-right: 1px solid rgba(240, 240, 240);
  padding-left: 10px;
  float: left;
  line-height: 40px;
  margin: 0;
  color: #454c53;
`;

const Input = styled.input`
  border-color: #f8f8f8;
  color: #606E7F;
  font-weight: 200;
  padding-left: 10px;
  float: left;
  border: none;
  height: 40px;
  padding: 0;
  font-size: 14px;
  text-indent: 10px;
  ${placeholder({
    "font-size": "14px"
  })};
`;

const WrapperButton = styled.div`
  padding: 0 20px;
  padding-right: 0;
  float: left;
`;
const WrapperTag = styled.div`
  float: left;
  ${clearFix()};
`;

const Tag = styled.div`
  float: left;
  margin-left: 30px;
`;

const TagItem = styled.span`
    border: 1px solid #2588d0;
    border-radius: 4px;
    box-sizing: border-box;
    color: #2588d0;
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    height: 24px;
    letter-spacing: 0;
    line-height: 24px;
    overflow: hidden;
    padding: 0 16px;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    text-overflow: ellipsis;
    transition: all .1s ease-in;
    white-space: nowrap;
    width: auto;
    margin-top: 20px;
    margin-left: 5px;
`
const IconWrapper = styled.span`
  vertical-align: top;
`

const Right = styled.div`
  float: right
`

const TxForm = () => (
  <Wrapper>
    <TxInputWrapper>
      <InputLabel>Amount</InputLabel>
      <Input placeholder="00.00" />
    </TxInputWrapper>
    <TxInputWrapper>
      <InputLabel>To</InputLabel>
      <Input placeholder="@member" />
    </TxInputWrapper>
    <Right>
    <WrapperTag>
      <Tag>
          <IconWrapper>
            <Icons.More width={18} height={18} color="#419BF9" />
          </IconWrapper>
        <TagItem>All Tags</TagItem>
      </Tag>
    </WrapperTag>
    <WrapperButton>
      <Button>Send</Button>
    </WrapperButton>
    </Right>
  </Wrapper>
);

export default TxForm;

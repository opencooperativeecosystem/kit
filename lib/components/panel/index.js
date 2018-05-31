import React from "react";
import styled, { css, injectGlobal } from "styled-components";

import Fira from "../../../theme/FiraSans-Regular.ttf";

injectGlobal`
  @font-face {
    font-family: Fira-Sans;
    src: url('${Fira}') format('opentype');
  }
  body {
    background: #191B22
    font-family: Fira-Sans
  }
`;

const Container = styled.div`
  width: 320px;
  background: #292d37;
  border-radius: 3px;
  min-height: 100vh;
  flex: 1;
  margin-right: 10px;
  margin: 0 5px;
  margin-left: 5px;
  height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  position: relative;
  border: 3px;
  ${props =>
    props.large &&
    css`
      width: auto;
    `};
`;

const Wrapper = styled.div`
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  position: relative;
  white-space: normal;
`;

const Header = styled.div`
  height: 40px;
  background: #313542;
  lost-utility: clearfix;
`;

const Title = styled.h1`
  font-size: 14px;
  color: #f0f0f0;
  font-weight: 500;
  float: left;
  margin: 0;
  line-height: 40px;
  margin-left: 10px;
`;

const Icon = styled.span`
  float: left;
  margin-left: 10px;
  vertical-align: sub;
  margin-top: 6px;
`;

const Content = styled.div`
  flex: 1 1 auto;
  margin-bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
  min-height: 0;
`;
const Actions = styled.div`
  float: right;
`;
const Panel = props => {
  return props.large ? (
    <Container large>
      <Wrapper>
        <Header>
          <Icon>{props.icon}</Icon>
          <Title>{props.title}</Title>
          <Actions>{props.actions}</Actions>
        </Header>
        <Content>{props.children}</Content>
      </Wrapper>
    </Container>
  ) : (
    <Container>
      <Wrapper>
        <Header>
          <Icon>{props.icon}</Icon>
          <Title>{props.title}</Title>
          <Actions>{props.actions}</Actions>
        </Header>
        <Content>{props.children}</Content>
      </Wrapper>
    </Container>
  );
};

export default Panel;

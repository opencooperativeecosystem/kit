import React from "react";
import styled, { css, injectGlobal } from "styled-components";
import Icons from "../icons";
import Fira from "../../../theme/FiraSans-Regular.ttf";
import {clearFix} from 'polished'

injectGlobal`
  @font-face {
    font-family: Fira-Sans;
    src: url('${Fira}') format('opentype');
  }
  body {
    background: #fff
    font-family: Fira-Sans
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  width: 330px;
  overflow: hidden;
  flex: 0 0 auto;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
  ${props =>
    props.large &&
    css`
      width: 100%;
    `};
`;

// const Wrapper = styled.div`
//   border-radius: 3px;
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: column;
//   max-height: 100%;
//   position: relative;
//   white-space: normal;
// `;

const Header = styled.div`
  position: relative;
  flex: 0 0 auto;
  height: 40px;
  background: #313542;
  ${clearFix()};
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
  background: #282c37;
  contain: strict;
  overflow-y: scroll;
  overflow-x: hidden;
  flex: 1 1 auto;
  will-change: transform;
  padding: 8px;
`;
const Actions = styled.div`
  float: right;
`;

const Navigation = styled.div`
  float: left;
  width: 60px;
  background: #21232c;
  border-radius: 4px;
  height: 26px;
  margin-top: 7px;
  margin-left: 5px;
`;

const Arrow = styled.div`
  display: inline-block;
  width: 29px;
  padding-top: 3px;
  text-align: center;
  border-right: 1px solid rgba(240,240,240,.1);
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  cursor: pointer;
  &:hover {
    background: #16181d;
  }
  ${props =>
    props.separated &&
    css`
      border-right: 1px solid rgba(240,240,240,.1);
    `};

`;

const Panel = props => (
  <Container large={props.large}>
      <Header>
        {props.navigation ? (
          <Navigation>
            <Arrow separated onClick={props.back}> 
              <Icons.Left width="18" heigth="18" color="#fafafa" />
            </Arrow>
            <Arrow onClick={props.forward}>
              <Icons.Right width="18" heigth="18" color="#fafafa" />
            </Arrow>
          </Navigation>
        ) : null}
        <Icon>{props.icon}</Icon>
        <Title>{props.title}</Title>
        <Actions>{props.actions}</Actions>
      </Header>
      <Content>{props.children}</Content>
  </Container>
);

export default Panel;

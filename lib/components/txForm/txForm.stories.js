import React from "react";
import { storiesOf } from "@storybook/react";
import TxForm from "./index";
import Icons from "../icons";
import Panel from "../panel";
import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
    min-height: 100vh;
    padding: 10px;
    user-select: none;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

storiesOf("TxForm", module)
  .add("Simple, inside Panel", () => (
    <Panel
      icon={<Icons.Diary width="18" color="#f0f0f0" />}
      large
      title="Wallet"
    >
      <Wrapper>
        <TxForm />
      </Wrapper>
    </Panel>
  ));

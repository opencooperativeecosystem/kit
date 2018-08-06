import React from "react";
import { storiesOf } from "@storybook/react";
import TxForm from "./index";
import Icons from "../icons";
import Panel from "../panel";
import styled from "styled-components";
import {Wrapper} from '../utilities'

storiesOf("TxForm", module)
  .add("Simple, inside Panel", () => (
    <Wrapper>
    <Panel
      icon={<Icons.Diary width="18" color="#f0f0f0" />}
      large
      title="Wallet"
    >
        <TxForm />
    </Panel>
      </Wrapper>
  ));

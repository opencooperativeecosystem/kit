import React from "react";
import { storiesOf } from "@storybook/react";
import DataBox from "./index";
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

storiesOf("Data Box", module)
  .add("Single Data Box", () => (
    <DataBox
      icon={<Icons.Diary width={18} height={18} color="#4C97F3" />}
      qt={129}
      title={"Movements"}
    />
  ))
  .add("Some data box inside a panel", () => (
    <Panel
      icon={<Icons.Diary width="18" color="#f0f0f0" />}
      large
      title="Wallet"
    >
      <Wrapper>
        <DataBox
          icon={<Icons.Diary width={18} height={18} color="#4C97F3" />}
          qt={129}
          title={"Diary"}
        />
        <DataBox
          icon={<Icons.Inventory width={18} height={18} color="#4C97F3" />}
          qt={"64,4948"}
          title={"Inventory"}
        />
        <DataBox
          icon={<Icons.Home width={18} height={18} color="#4C97F3" />}
          qt={"192.000"}
          title={"Home"}
        />
      </Wrapper>
    </Panel>
  ));

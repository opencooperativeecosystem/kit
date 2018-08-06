import React from "react";
import { storiesOf } from "@storybook/react";
import TxForm from "../txForm";
import Icons from "../icons";
import Panel from "../panel";
import Feed from "../feed";
import DataBox from "../dataBox";
import styled from "styled-components";
import { clearFix } from "polished";
import SupTitle from "../supTitle";
import { Wrapper, Tag } from "../utilities";

const B = styled.b`
  text-decoration: underline;
  color: #fafafa;
`;

const DataBoxWrapper = styled.div`
  margin-bottom: 20px;
  ${clearFix()};
`;

const Economic = () => (
  <div className={{ "font-size": "14px" }}>
    <B>Mario</B> sent 10.83774 ƒ to <B>Alekos</B>
  </div>
);

const Tags = () => <Tag>Tags</Tag>;

storiesOf("Wallet", module).add("Simple wallet", () => (
  <Wrapper>
    <Panel
      icon={<Icons.Diary width="18" color="#f0f0f0" />}
      large
      title="Wallet"
    >
      <SupTitle
        icon={<Icons.Activity width={18} height={18} color={"#fafafa"} />}
        text={"Overview"}
      />
      <DataBoxWrapper>
        <DataBox
          icon={<Icons.Diary width={18} height={18} color="#4C97F3" />}
          qt={129}
          title={"Movements"}
        />
        <DataBox
          icon={<Icons.Inventory width={18} height={18} color="#4C97F3" />}
          qt={"64,4948"}
          title={"Token Exchanged"}
        />
        <DataBox
          icon={<Icons.Home width={18} height={18} color="#4C97F3" />}
          qt={"192"}
          title={"Partecipant"}
        />
      </DataBoxWrapper>
      <div style={{ "margin-bottom": "20px;" }}>
        <SupTitle
          icon={<Icons.Diary width={18} height={18} color={"#fafafa"} />}
          text={"Movements"}
        />
        <Feed
          image={"https://picsum.photos/200/300"}
          primary={<Economic />}
          secondary={<Tags />}
          date={"28 May 2018"}
        />
        <Feed
          image={"https://picsum.photos/200/300"}
          primary={<Economic />}
          secondary={<Tags />}
          date={"28 May 2018"}
        />
        <Feed
          image={"https://picsum.photos/200/300"}
          primary={<Economic />}
          secondary={<Tags />}
          date={"28 May 2018"}
        />
        <Feed
          image={"https://picsum.photos/200/300"}
          primary={<Economic />}
          secondary={<Tags />}
          date={"28 May 2018"}
        />
        <Feed
          image={"https://picsum.photos/200/300"}
          primary={<Economic />}
          secondary={<Tags />}
          date={"28 May 2018"}
        />
      </div>
      <TxForm />
    </Panel>
  </Wrapper>
));

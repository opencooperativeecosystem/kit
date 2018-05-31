import React from "react";
import { storiesOf } from "@storybook/react";
import Feed from "./index";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 14px;
`;

const B = styled.b`
  text-decoration: underline;
  color: #fafafa;
`;

const Tag = styled.span`
  border: 1px solid rgb(65, 155, 249);
  color: rgb(65, 155, 249);
  border-radius: 3px;
  heigth: 20px;
  line-height: 20px;
  padding: 0 10px;
`;

const Primary = () => (
  <Wrapper>
    <B>Mario</B> worked 6 hours for <B>Bank of the Commons</B>
  </Wrapper>
);

const Economic = () => (
  <Wrapper>
    <B>Mario</B> sent 10.83774 ƒ to <B>Alekos</B>
  </Wrapper>
);

const Tags = () => <Tag>Tags</Tag>;

storiesOf("Feed", module)
  .add("Event", () => (
    <div>
    <Feed
      image={"https://picsum.photos/200/300"}
      primary={<Primary />}
      secondary={"noooote"}
      date={"28 May 2018"}
    />
    <Feed
      image={"https://picsum.photos/200/300"}
      primary={<Primary />}
      secondary={"noooote"}
      date={"28 May 2018"}
    />
    <Feed
      image={"https://picsum.photos/200/300"}
      primary={<Primary />}
      secondary={"noooote"}
      date={"28 May 2018"}
    />
    <Feed
      image={"https://picsum.photos/200/300"}
      primary={<Primary />}
      secondary={"noooote"}
      date={"28 May 2018"}
    />
    <Feed
      image={"https://picsum.photos/200/300"}
      primary={<Primary />}
      secondary={"noooote"}
      date={"28 May 2018"}
    />
    </div>
  ))
  .add("Transaction", () => (
    <div>
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
  ));

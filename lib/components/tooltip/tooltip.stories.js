import React from "react";
import { storiesOf } from "@storybook/react";
import Tooltip from "./index";
import styled from "styled-components";

storiesOf("Tooltip", module)
  .add("Basic", () => (
    <div>
        <Tooltip title={'edit commitment'}/>
    </div>
  ))

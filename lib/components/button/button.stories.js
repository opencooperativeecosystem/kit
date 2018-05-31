import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./index";
import { withInfo } from "@storybook/addon-info";

storiesOf("Button", module)
  .add(
    "Basic button",
    withInfo(`
    ### Notes
    
    This is a simple button

    ### Usage
    ~~~js
    <Button onClick={() => alert('hello there')}>Click Here</Button>
    ~~~

  `)(() => <Button onClick={action("clicked")}>Hello Button</Button>)
  )
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

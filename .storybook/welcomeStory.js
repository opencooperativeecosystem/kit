import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";

storiesOf('Welcome', module).add(
  'to your new Storybook🎊',
  withInfo(`


    ### Notes

    Hello world!:

    ### Usage
    ~~~js
    <div>This is an example component</div>
    ~~~

    ### To use this Storybook

    Explore the panels on the left.
  `)(() => <div>This is an example component</div>)
);
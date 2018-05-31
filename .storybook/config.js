import { configure } from '@storybook/react';
import { setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
setAddon(JSXAddon);

const req = require.context('../lib/components', true, /\.stories\.js$/)

function loadStories() {
  require('./welcomeStory');
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
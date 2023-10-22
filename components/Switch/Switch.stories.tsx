import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Switch, SwitchThumb } from '.';

export default {
  title: 'Example/Switch',
  component: Switch,
  tags: ['autodocs'],
} as Meta<typeof Switch>;

const RootTemplate: StoryFn<typeof Switch> = args => {
  return (
    <Switch
      id="airplane-mode"
      {...args}
    >
      <SwitchThumb />
    </Switch>
  );
};

export const Root = RootTemplate.bind({});
Root.args = {};

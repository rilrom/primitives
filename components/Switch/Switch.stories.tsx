import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Switch, SwitchThumb } from '.';

/**
 * A control that allows the user to toggle between checked and not checked.
 *
 * https://www.radix-ui.com/primitives/docs/components/switch
 */
export default {
  title: 'Example/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description:
        'When true, prevents the user from interacting with the switch.',
      table: { defaultValue: { summary: 'false' } },
    },
    required: {
      control: 'boolean',
      description:
        'When true, indicates that the user must check the switch before the owning form can be submitted.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
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

Root.args = {
  disabled: false,
  required: false,
};

Root.parameters = {
  controls: {
    include: Object.keys(Root.args),
  },
};

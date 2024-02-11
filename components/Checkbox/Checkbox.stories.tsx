import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Checkbox } from '.';

/**
 * A control that allows the user to toggle between checked and not checked.
 *
 * https://www.radix-ui.com/primitives/docs/components/checkbox
 */
export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description:
        'When true, prevents the user from interacting with the checkbox.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
} as Meta<typeof Checkbox>;

const RootTemplate: StoryFn<typeof Checkbox> = args => {
  return <Checkbox {...args} />;
};

export const Root = RootTemplate.bind({});

Root.args = {
  disabled: false,
};

Root.parameters = {
  controls: {
    include: Object.keys(Root.args),
  },
};

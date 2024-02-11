import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Separator } from '.';

/**
 * Visually or semantically separates content.
 *
 * https://www.radix-ui.com/primitives/docs/components/separator
 */
export default {
  title: 'Example/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'inline-radio',
      options: ['vertical', 'horizontal'],
      description: 'The orientation of the separator.',
      table: { defaultValue: { summary: 'horizontal' } },
    },
    decorative: {
      control: 'boolean',
      description:
        'When true, signifies that it is purely visual, carries no semantic meaning, and ensures it is not present in the accessibility tree.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
} as Meta<typeof Separator>;

const RootTemplate: StoryFn<typeof Separator> = args => {
  return (
    <Separator
      decorative
      orientation="horizontal"
      {...args}
    />
  );
};

export const Root = RootTemplate.bind({});

Root.args = {
  orientation: 'horizontal',
  decorative: false,
};

Root.parameters = {
  controls: {
    include: Object.keys(Root.args),
  },
};

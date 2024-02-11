import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '.';

/**
 * An interactive component which expands/collapses a panel.
 *
 * https://www.radix-ui.com/primitives/docs/components/collapsible
 */
export default {
  title: 'Example/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description:
        'When true, prevents the user from interacting with the collapsible.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
} as Meta<typeof Collapsible>;

const RootTemplate: StoryFn<typeof Collapsible> = args => {
  const [open, setOpen] = React.useState(false);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      {...args}
    >
      <CollapsibleTrigger>{open ? 'Close' : 'Open'}</CollapsibleTrigger>

      <p>Visible content</p>

      <CollapsibleContent>
        <p>Hidden content</p>
        <p>Hidden content</p>
      </CollapsibleContent>
    </Collapsible>
  );
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

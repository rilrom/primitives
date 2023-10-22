import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '.';

export default {
  title: 'Example/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
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
Root.args = {};

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '.';

/**
 * A set of layered sections of content, known as tab panels, that are displayed one at a time.
 *
 * https://www.radix-ui.com/primitives/docs/components/tabs
 */
export default {
  title: 'Example/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'inline-radio',
      options: ['vertical', 'horizontal'],
      description: 'The orientation of the component.',
      table: { defaultValue: { summary: 'horizontal' } },
    },
    activationMode: {
      control: 'inline-radio',
      options: ['automatic', 'manual'],
      description:
        'When automatic, tabs are activated when receiving focus. When manual, tabs are activated when clicked.',
      table: { defaultValue: { summary: 'automatic' } },
    },
    dir: {
      control: 'inline-radio',
      options: ['ltr', 'rtl'],
      description:
        'The reading direction of the tabs. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.',
      table: { defaultValue: { summary: 'ltr' } },
    },
    disabled: {
      control: 'boolean',
      description:
        'When true, prevents the user from interacting with the tab.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
} as Meta<typeof Tabs>;

const RootTemplate: StoryFn<typeof Tabs> = args => {
  // @ts-ignore
  const { disabled, ...rest } = args;

  return (
    <Tabs
      defaultValue="tab1"
      {...rest}
    >
      <TabsList aria-label="Tabs example">
        <TabsTrigger
          value="tab1"
          disabled={disabled}
        >
          Tab one
        </TabsTrigger>
        <TabsTrigger
          value="tab2"
          disabled={disabled}
        >
          Tab two
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Tab one content</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Tab two content</p>
      </TabsContent>
    </Tabs>
  );
};

export const Root = RootTemplate.bind({});

Root.args = {
  orientation: 'horizontal',
  activationMode: 'automatic',
  dir: 'ltr',
  disabled: false,
};

Root.parameters = {
  controls: {
    include: Object.keys(Root.args),
  },
};

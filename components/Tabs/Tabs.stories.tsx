import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '.';

export default {
  title: 'Example/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'inline-radio',
      options: ['vertical', 'horizontal'],
    },
    activationMode: {
      control: 'inline-radio',
      options: ['automatic', 'manual'],
    },
  },
} as Meta<typeof Tabs>;

const RootTemplate: StoryFn<typeof Tabs> = args => {
  return (
    <Tabs defaultValue="tab1" {...args}>
      <TabsList aria-label="Tabs example">
        <TabsTrigger value="tab1">Tab one</TabsTrigger>
        <TabsTrigger value="tab2">Tab two</TabsTrigger>
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
};

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
} from '.';
import { Box, Heading, Link } from './ScrollArea.styled';

export default {
  title: 'Example/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
} as Meta<typeof ScrollArea>;

const ITEMS = Array.from({ length: 50 }).map(
  (_, i) => `Item ${i + 1}`
);

const RootTemplate: StoryFn<typeof ScrollArea> = args => {
  return (
    <ScrollArea {...args}>
      <ScrollAreaViewport>
        <Box>
          <Heading>Items</Heading>
          {ITEMS.map(item => (
            <Link
              href="#"
              key={item}
            >
              {item}
            </Link>
          ))}
        </Box>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollArea>
  );
};

export const Root = RootTemplate.bind({});
Root.args = {};

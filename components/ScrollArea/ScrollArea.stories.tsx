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

/**
 * Augments native scroll functionality for custom, cross-browser styling.
 *
 * https://www.radix-ui.com/primitives/docs/components/scroll-area
 */
export default {
  title: 'Example/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['hover', 'scroll', 'always', 'auto'],
      description:
        'Describes the nature of scrollbar visibility, similar to how the scrollbar preferences in MacOS control visibility of native scrollbars.\n\n"auto" means that scrollbars are visible when content is overflowing on the corresponding orientation.\n\n"always" means that scrollbars are always visible regardless of whether the content is overflowing.\n\n"scroll" means that scrollbars are visible when the user is scrolling along its corresponding orientation.\n\n"hover" when the user is scrolling along its corresponding orientation and when the user is hovering over the scroll area.',
      table: { defaultValue: { summary: 'hover' } },
    },
    scrollHideDelay: {
      control: 'number',
      if: { arg: 'type', eq: 'scroll' },
      // @ts-expect-error - Storybook currently doesn't handle multiple if conditionals for TS.
      if: { arg: 'type', eq: 'hover' },
      description:
        'If type is set to either "scroll" or "hover", this prop determines the length of time, in milliseconds, before the scrollbars are hidden after the user stops interacting with scrollbars.',
      table: { defaultValue: { summary: '600' } },
    },
    dir: {
      control: 'inline-radio',
      options: ['ltr', 'rtl'],
      description:
        'The reading direction of the scroll area. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.',
      table: { defaultValue: { summary: 'ltr' } },
    },
  },
} as Meta<typeof ScrollArea>;

const ITEMS = Array.from({ length: 50 }).map((_, i) => `Item ${i + 1}`);

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

Root.args = {
  type: 'hover',
  scrollHideDelay: 600,
  dir: 'ltr',
};

Root.parameters = {
  controls: {
    include: Object.keys(Root.args),
  },
};

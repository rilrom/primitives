import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { AspectRatio } from '.';
import { parseRatio } from '../../utils/parseRatio';

/**
 * Displays content within a desired ratio.
 *
 * https://www.radix-ui.com/primitives/docs/components/aspect-ratio
 */
export default {
  title: 'Example/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: 'select',
      options: ['16/9', '21/9', '4/3', '1/1'],
      description: 'The desired ratio.',
      table: { defaultValue: { summary: '16/9' } },
    },
  },
} as Meta<typeof AspectRatio>;

const RootTemplate: StoryFn<typeof AspectRatio> = args => {
  return (
    <AspectRatio
      {...args}
      ratio={parseRatio(args?.ratio as any)}
    >
      <img
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b"
        alt="Placeholder image"
      />
    </AspectRatio>
  );
};

export const Root = RootTemplate.bind({});

Root.args = {
  ratio: '16/9',
};

Root.parameters = {
  controls: {
    include: Object.keys(Root.args),
  },
};

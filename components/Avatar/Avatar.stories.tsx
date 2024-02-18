import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from '.';

/**
 * An image element with a fallback for representing the user.
 *
 * https://www.radix-ui.com/primitives/docs/components/avatar
 */
export default {
  title: 'Example/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} as Meta<typeof Avatar>;

const RootTemplate: StoryFn<typeof Avatar> = args => {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Avatar {...args}>
        <AvatarImage
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="Placeholder image"
        />
        <AvatarFallback>CT</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarFallback>CT</AvatarFallback>
      </Avatar>
    </div>
  );
};

export const Root = RootTemplate.bind({});

Root.args = {};

Root.parameters = {
  controls: {
    include: Object.keys(Root.args),
  },
};

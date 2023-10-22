import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupIndicator,
} from '.';
import { Flex, Label } from './RadioGroup.styled';

export default {
  title: 'Example/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} as Meta<typeof RadioGroup>;

const RootTemplate: StoryFn<typeof RadioGroup> = args => {
  return (
    <form>
      <RadioGroup defaultValue="default" aria-label="View density" {...args}>
        <Flex>
          <RadioGroupItem value="default" id="r1">
            <RadioGroupIndicator />
          </RadioGroupItem>
          <Label htmlFor="r1">Default</Label>
        </Flex>
        <Flex>
          <RadioGroupItem value="comfortable" id="r2">
            <RadioGroupIndicator />
          </RadioGroupItem>
          <Label htmlFor="r2">Comfortable</Label>
        </Flex>
        <Flex>
          <RadioGroupItem value="compact" id="r3">
            <RadioGroupIndicator />
          </RadioGroupItem>
          <Label htmlFor="r3">Compact</Label>
        </Flex>
      </RadioGroup>
    </form>
  );
};

export const Root = RootTemplate.bind({});
Root.args = {};

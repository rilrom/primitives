import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { RadioGroup, RadioGroupItem, RadioGroupIndicator } from '.';
import { Flex, Label } from './RadioGroup.styled';

/**
 * A set of checkable buttons - known as radio buttons - where no more than one of the buttons can be checked at a time.
 *
 * https://www.radix-ui.com/primitives/docs/components/radio-group
 */
export default {
  title: 'Example/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'inline-radio',
      options: ['vertical', 'horizontal'],
      description: 'The orientation of the component.',
      table: { defaultValue: { summary: 'vertical' } },
    },
    disabled: {
      control: 'boolean',
      description:
        'When true, prevents the user from interacting with radio items.',
      table: { defaultValue: { summary: 'false' } },
    },
    required: {
      control: 'boolean',
      description:
        'When true, indicates that the user must check a radio item before the owning form can be submitted.',
      table: { defaultValue: { summary: 'false' } },
    },
    dir: {
      control: 'inline-radio',
      options: ['ltr', 'rtl'],
      description:
        'The reading direction of the radio group. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.',
      table: { defaultValue: { summary: 'ltr' } },
    },
  },
} as Meta<typeof RadioGroup>;

const RootTemplate: StoryFn<typeof RadioGroup> = args => {
  return (
    <form>
      <RadioGroup
        defaultValue="one"
        aria-label="Lorem ipsum dolor"
        {...args}
      >
        <Flex>
          <RadioGroupItem
            value="one"
            id="one"
          >
            <RadioGroupIndicator />
          </RadioGroupItem>
          <Label htmlFor="one">One</Label>
        </Flex>
        <Flex>
          <RadioGroupItem
            value="two"
            id="two"
          >
            <RadioGroupIndicator />
          </RadioGroupItem>
          <Label htmlFor="two">Two</Label>
        </Flex>
        <Flex>
          <RadioGroupItem
            value="three"
            id="three"
          >
            <RadioGroupIndicator />
          </RadioGroupItem>
          <Label htmlFor="three">Three</Label>
        </Flex>
      </RadioGroup>
    </form>
  );
};

export const Root = RootTemplate.bind({});

Root.args = {
  disabled: false,
  required: false,
  orientation: 'vertical',
  dir: 'ltr',
};

Root.parameters = {
  controls: {
    include: Object.keys(Root.args),
  },
};

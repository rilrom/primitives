import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectViewport,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectSeparator,
} from '.';

export default {
  title: 'Example/Select',
  component: Select,
  tags: ['autodocs'],
} as Meta<typeof Select>;

const RootTemplate: StoryFn<typeof Select> = args => {
  return (
    <Select {...args}>
      <SelectTrigger aria-label="Food">
        <SelectValue placeholder="Select a fruit…" />
        <SelectIcon>
          {'>'}
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectContent>
          <SelectScrollUpButton>
            {'^'}
          </SelectScrollUpButton>
          <SelectViewport>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>

            <SelectSeparator />

            <SelectGroup>
              <SelectLabel>Vegetables</SelectLabel>
              <SelectItem value="aubergine">Aubergine</SelectItem>
              <SelectItem value="broccoli">Broccoli</SelectItem>
              <SelectItem value="carrot" disabled>
                Carrot
              </SelectItem>
              <SelectItem value="courgette">Courgette</SelectItem>
              <SelectItem value="leek">Leek</SelectItem>
            </SelectGroup>

            <SelectSeparator />

            <SelectGroup>
              <SelectLabel>Meat</SelectLabel>
              <SelectItem value="beef">Beef</SelectItem>
              <SelectItem value="chicken">Chicken</SelectItem>
              <SelectItem value="lamb">Lamb</SelectItem>
              <SelectItem value="pork">Pork</SelectItem>
            </SelectGroup>
          </SelectViewport>
          <SelectScrollDownButton>
            {'>'}
          </SelectScrollDownButton>
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

export const Root = RootTemplate.bind({});
Root.args = {};

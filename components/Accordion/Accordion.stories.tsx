import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '.';

/**
 * A vertically stacked set of interactive headings that each reveal an associated section of content.
 * 
 * https://www.radix-ui.com/primitives/docs/components/accordion
 */
export default {
  title: 'Example/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['single', 'multiple'],
      description:
        'Determines whether one or multiple items can be opened at the same time.',
      table: { defaultValue: { summary: 'multiple' } },
    },
    collapsible: {
      control: 'boolean',
      if: { arg: 'type', eq: 'single' },
      description:
        'When type is "single", allows closing content when clicking trigger for an open item.',
      table: { defaultValue: { summary: 'false' } },
    },
    orientation: {
      control: 'inline-radio',
      options: ['vertical', 'horizontal'],
      description: 'The orientation of the accordion.',
      table: { defaultValue: { summary: 'vertical' } },
    },
    disabled: {
      control: 'boolean',
      description:
        'When true, prevents the user from interacting with the accordion and all its items.',
      table: { defaultValue: { summary: 'false' } },
    },
    dir: {
      control: 'inline-radio',
      options: ['ltr', 'rtl'],
      description:
        'The reading direction of the accordion when applicable. If omitted, assumes LTR (left-to-right) reading mode.',
      table: { defaultValue: { summary: 'ltr' } },
    },
  },
} as Meta<typeof Accordion>;

const RootTemplate: StoryFn<typeof Accordion> = args => {
  return (
    <Accordion {...args}>
      <AccordionItem
        key="one"
        value="one"
      >
        <AccordionTrigger>One</AccordionTrigger>
        <AccordionContent>Lorem ipsum dolor</AccordionContent>
      </AccordionItem>
      <AccordionItem
        key="two"
        value="two"
      >
        <AccordionTrigger>Two</AccordionTrigger>
        <AccordionContent>Lorem ipsum dolor</AccordionContent>
      </AccordionItem>
      <AccordionItem
        key="three"
        value="three"
      >
        <AccordionTrigger>Three</AccordionTrigger>
        <AccordionContent>Lorem ipsum dolor</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export const Root = RootTemplate.bind({});
Root.args = {
  type: 'multiple',
  collapsible: false,
  orientation: 'vertical',
  disabled: false,
  dir: 'ltr',
};

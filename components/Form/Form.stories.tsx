import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormSubmit,
} from '.';

export default {
  title: 'Example/Form',
  component: Form,
  tags: ['autodocs'],
} as Meta<typeof Form>;

const flexStyles = {
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'flex-start',
  gap: '0.5rem',
};

const RootTemplate: StoryFn<typeof Form> = args => {
  return (
    <Form
      {...args}
      style={flexStyles}
    >
      <FormField
        name="email"
        style={flexStyles}
      >
        <FormLabel>Email</FormLabel>
        <FormControl asChild>
          <input
            type="email"
            required
          />
        </FormControl>
        <FormMessage match="valueMissing">Please enter an email</FormMessage>
      </FormField>
      <FormSubmit asChild>
        <button>Submit</button>
      </FormSubmit>
    </Form>
  );
};

export const Root = RootTemplate.bind({});
Root.args = {};

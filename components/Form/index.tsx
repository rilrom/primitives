import * as React from 'react';
import type {
  Root,
  Field,
  Label,
  Control,
  Message,
  FormValidityStateProps,
  Submit,
} from '@radix-ui/react-form';
import {
  StyledForm,
  StyledFormField,
  StyledFormLabel,
  StyledFormControl,
  StyledFormMessage,
  StyledFormSubmit,
  StyledFormValidityState,
} from './Form.styled';

const Form = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>((props, ref) => (
  <StyledForm
    ref={ref}
    {...props}
  />
));

const FormField = React.forwardRef<
  React.ElementRef<typeof Field>,
  React.ComponentPropsWithoutRef<typeof Field>
>((props, ref) => (
  <StyledFormField
    ref={ref}
    {...props}
  />
));

const FormLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>((props, ref) => (
  <StyledFormLabel
    ref={ref}
    {...props}
  />
));

const FormControl = React.forwardRef<
  React.ElementRef<typeof Control>,
  React.ComponentPropsWithoutRef<typeof Control>
>((props, ref) => (
  <StyledFormControl
    ref={ref}
    {...props}
  />
));

const FormMessage = React.forwardRef<
  React.ElementRef<typeof Message>,
  React.ComponentPropsWithoutRef<typeof Message>
>((props, ref) => (
  <StyledFormMessage
    ref={ref}
    {...props}
  />
));

const FormValidityState = (props: FormValidityStateProps) => (
  <StyledFormValidityState {...props} />
);

const FormSubmit = React.forwardRef<
  React.ElementRef<typeof Submit>,
  React.ComponentPropsWithoutRef<typeof Submit>
>((props, ref) => (
  <StyledFormSubmit
    ref={ref}
    {...props}
  />
));

export {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormValidityState,
  FormSubmit,
};

import * as React from 'react';
import type {
  Root,
  ToastProviderProps,
  Viewport,
  Title,
  Description,
  Action,
  Close,
} from '@radix-ui/react-toast';
import {
  StyledToast,
  StyledToastProvider,
  StyledToastViewport,
  StyledToastTitle,
  StyledToastDescription,
  StyledToastAction,
  StyledToastClose,
} from './Toast.styled';

const Toast = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>((props, ref) => (
  <StyledToast
    ref={ref}
    {...props}
  />
));

const ToastProvider = (props: ToastProviderProps) => (
  <StyledToastProvider {...props} />
);

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof Viewport>,
  React.ComponentPropsWithoutRef<typeof Viewport>
>((props, ref) => (
  <StyledToastViewport
    ref={ref}
    {...props}
  />
));

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof Title>,
  React.ComponentPropsWithoutRef<typeof Title>
>((props, ref) => (
  <StyledToastTitle
    ref={ref}
    {...props}
  />
));

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof Description>,
  React.ComponentPropsWithoutRef<typeof Description>
>((props, ref) => (
  <StyledToastDescription
    ref={ref}
    {...props}
  />
));

const ToastAction = React.forwardRef<
  React.ElementRef<typeof Action>,
  React.ComponentPropsWithoutRef<typeof Action>
>((props, ref) => (
  <StyledToastAction
    ref={ref}
    {...props}
  />
));

const ToastClose = React.forwardRef<
  React.ElementRef<typeof Close>,
  React.ComponentPropsWithoutRef<typeof Close>
>((props, ref) => (
  <StyledToastClose
    ref={ref}
    {...props}
  />
));

export {
  Toast,
  ToastProvider,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
};

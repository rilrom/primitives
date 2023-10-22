import * as React from 'react';
import type {
  Trigger,
  AlertDialogPortalProps,
  Overlay,
  Content,
  Title,
  Description,
  Action,
  Cancel,
  AlertDialogProps,
} from '@radix-ui/react-alert-dialog';
import {
  StyledAlertDialog,
  StyledAlertDialogTrigger,
  StyledAlertDialogPortal,
  StyledAlertDialogOverlay,
  StyledAlertDialogContent,
  StyledAlertDialogHeader,
  StyledAlertDialogFooter,
  StyledAlertDialogTitle,
  StyledAlertDialogDescription,
  StyledAlertDialogAction,
  StyledAlertDialogCancel,
} from './AlertDialog.styled';

const AlertDialog = (props: AlertDialogProps) => (
  <StyledAlertDialog {...props} />
);

const AlertDialogTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>((props, ref) => (
  <StyledAlertDialogTrigger
    ref={ref}
    {...props}
  />
));

const AlertDialogPortal = (props: AlertDialogPortalProps) => (
  <StyledAlertDialogPortal {...props} />
);

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof Overlay>,
  React.ComponentPropsWithoutRef<typeof Overlay>
>((props, ref) => (
  <StyledAlertDialogOverlay
    ref={ref}
    {...props}
  />
));

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>((props, ref) => (
  <StyledAlertDialogContent
    ref={ref}
    {...props}
  />
));

const AlertDialogHeader = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledAlertDialogHeader {...props} />
);

const AlertDialogFooter = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledAlertDialogFooter {...props} />
);

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof Title>,
  React.ComponentPropsWithoutRef<typeof Title>
>((props, ref) => (
  <StyledAlertDialogTitle
    ref={ref}
    {...props}
  />
));

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof Description>,
  React.ComponentPropsWithoutRef<typeof Description>
>((props, ref) => (
  <StyledAlertDialogDescription
    ref={ref}
    {...props}
  />
));

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof Action>,
  React.ComponentPropsWithoutRef<typeof Action>
>((props, ref) => (
  <StyledAlertDialogAction
    ref={ref}
    {...props}
  />
));

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof Cancel>,
  React.ComponentPropsWithoutRef<typeof Cancel>
>((props, ref) => (
  <StyledAlertDialogCancel
    ref={ref}
    {...props}
  />
));

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};

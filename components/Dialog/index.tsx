import * as React from 'react';
import type {
  DialogProps,
  Trigger,
  DialogPortalProps,
  Overlay,
  Content,
  Title,
  Description,
  Close,
} from '@radix-ui/react-dialog';
import {
  StyledDialog,
  StyledDialogTrigger,
  StyledDialogPortal,
  StyledDialogContent,
  StyledDialogDescription,
  StyledDialogFooter,
  StyledDialogHeader,
  StyledDialogOverlay,
  StyledDialogTitle,
  StyledDialogClose,
} from './Dialog.styled';

const Dialog = (props: DialogProps) => <StyledDialog {...props} />;

const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>((props, ref) => (
  <StyledDialogTrigger
    ref={ref}
    {...props}
  />
));

const DialogPortal = (props: DialogPortalProps) => (
  <StyledDialogPortal {...props} />
);

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof Overlay>,
  React.ComponentPropsWithoutRef<typeof Overlay>
>((props, ref) => (
  <StyledDialogOverlay
    ref={ref}
    {...props}
  />
));

const DialogContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>((props, ref) => (
  <StyledDialogContent
    ref={ref}
    {...props}
  />
));

const DialogHeader = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledDialogHeader {...props} />
);

const DialogFooter = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledDialogFooter {...props} />
);

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof Title>,
  React.ComponentPropsWithoutRef<typeof Title>
>((props, ref) => (
  <StyledDialogTitle
    ref={ref}
    {...props}
  />
));

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof Description>,
  React.ComponentPropsWithoutRef<typeof Description>
>((props, ref) => (
  <StyledDialogDescription
    ref={ref}
    {...props}
  />
));

const DialogClose = React.forwardRef<
  React.ElementRef<typeof Close>,
  React.ComponentPropsWithoutRef<typeof Close>
>((props, ref) => (
  <StyledDialogClose
    ref={ref}
    {...props}
  />
));

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
};

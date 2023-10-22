import * as React from 'react';
import type {
  Root,
  Viewport,
  Scrollbar,
  Thumb,
  Corner,
} from '@radix-ui/react-scroll-area';
import {
  StyledScrollArea,
  StyledScrollAreaViewport,
  StyledScrollAreaScrollbar,
  StyledScrollAreaThumb,
  StyledScrollAreaCorner,
} from './ScrollArea.styled';

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>((props, ref) => (
  <StyledScrollArea
    ref={ref}
    {...props}
  />
));

const ScrollAreaViewport = React.forwardRef<
  React.ElementRef<typeof Viewport>,
  React.ComponentPropsWithoutRef<typeof Viewport>
>((props, ref) => (
  <StyledScrollAreaViewport
    ref={ref}
    {...props}
  />
));

const ScrollAreaScrollbar = React.forwardRef<
  React.ElementRef<typeof Scrollbar>,
  React.ComponentPropsWithoutRef<typeof Scrollbar>
>((props, ref) => (
  <StyledScrollAreaScrollbar
    ref={ref}
    {...props}
  />
));

const ScrollAreaThumb = React.forwardRef<
  React.ElementRef<typeof Thumb>,
  React.ComponentPropsWithoutRef<typeof Thumb>
>((props, ref) => (
  <StyledScrollAreaThumb
    ref={ref}
    {...props}
  />
));

const ScrollAreaCorner = React.forwardRef<
  React.ElementRef<typeof Corner>,
  React.ComponentPropsWithoutRef<typeof Corner>
>((props, ref) => (
  <StyledScrollAreaCorner
    ref={ref}
    {...props}
  />
));

export {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
};

import * as React from 'react';
import type { Root, Image, Fallback } from '@radix-ui/react-avatar';
import {
  StyledAvatar,
  StyledAvatarImage,
  StyledAvatarFallback,
} from './Avatar.styled';

const Avatar = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>((props, ref) => (
  <StyledAvatar
    ref={ref}
    {...props}
  />
));

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof Image>,
  React.ComponentPropsWithoutRef<typeof Image>
>((props, ref) => (
  <StyledAvatarImage
    ref={ref}
    {...props}
  />
));

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof Fallback>,
  React.ComponentPropsWithoutRef<typeof Fallback>
>((props, ref) => (
  <StyledAvatarFallback
    ref={ref}
    {...props}
  />
));
export { Avatar, AvatarImage, AvatarFallback };

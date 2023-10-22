import * as React from 'react';
import type {
  SelectProps,
  Trigger,
  Value,
  Icon,
  PortalProps,
  Content,
  Viewport,
  Group,
  Label,
  Item,
  ItemText,
  ItemIndicator,
  ScrollUpButton,
  ScrollDownButton,
  Separator,
  Arrow,
} from '@radix-ui/react-select';
import {
  StyledSelect,
  StyledSelectTrigger,
  StyledSelectValue,
  StyledSelectIcon,
  StyledSelectPortal,
  StyledSelectContent,
  StyledSelectViewport,
  StyledSelectGroup,
  StyledSelectLabel,
  StyledSelectItem,
  StyledSelectItemText,
  StyledSelectItemIndicator,
  StyledSelectScrollUpButton,
  StyledSelectScrollDownButton,
  StyledSelectSeparator,
  StyledSelectArrow,
} from './Select.styled';

const Select = (props: SelectProps) => <StyledSelect {...props} />;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>((props, ref) => (
  <StyledSelectTrigger
    ref={ref}
    {...props}
  />
));

const SelectValue = React.forwardRef<
  React.ElementRef<typeof Value>,
  React.ComponentPropsWithoutRef<typeof Value>
>((props, ref) => (
  <StyledSelectValue
    ref={ref}
    {...props}
  />
));

const SelectIcon = React.forwardRef<
  React.ElementRef<typeof Icon>,
  React.ComponentPropsWithoutRef<typeof Icon>
>((props, ref) => (
  <StyledSelectIcon
    ref={ref}
    {...props}
  />
));

const SelectPortal = (props: PortalProps) => <StyledSelectPortal {...props} />;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>((props, ref) => (
  <StyledSelectContent
    ref={ref}
    {...props}
  />
));

const SelectViewport = React.forwardRef<
  React.ElementRef<typeof Viewport>,
  React.ComponentPropsWithoutRef<typeof Viewport>
>((props, ref) => (
  <StyledSelectViewport
    ref={ref}
    {...props}
  />
));

const SelectGroup = React.forwardRef<
  React.ElementRef<typeof Group>,
  React.ComponentPropsWithoutRef<typeof Group>
>((props, ref) => (
  <StyledSelectGroup
    ref={ref}
    {...props}
  />
));

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>((props, ref) => (
  <StyledSelectLabel
    ref={ref}
    {...props}
  />
));

const SelectItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>((props, ref) => (
  <StyledSelectItem
    ref={ref}
    {...props}
  />
));

const SelectItemText = React.forwardRef<
  React.ElementRef<typeof ItemText>,
  React.ComponentPropsWithoutRef<typeof ItemText>
>((props, ref) => (
  <StyledSelectItemText
    ref={ref}
    {...props}
  />
));

const SelectItemIndicator = React.forwardRef<
  React.ElementRef<typeof ItemIndicator>,
  React.ComponentPropsWithoutRef<typeof ItemIndicator>
>((props, ref) => (
  <StyledSelectItemIndicator
    ref={ref}
    {...props}
  />
));

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof ScrollUpButton>
>((props, ref) => (
  <StyledSelectScrollUpButton
    ref={ref}
    {...props}
  />
));

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof ScrollDownButton>
>((props, ref) => (
  <StyledSelectScrollDownButton
    ref={ref}
    {...props}
  />
));

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentPropsWithoutRef<typeof Separator>
>((props, ref) => (
  <StyledSelectSeparator
    ref={ref}
    {...props}
  />
));

const SelectArrow = React.forwardRef<
  React.ElementRef<typeof Arrow>,
  React.ComponentPropsWithoutRef<typeof Arrow>
>((props, ref) => (
  <StyledSelectArrow
    ref={ref}
    {...props}
  />
));

export {
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
  SelectItemText,
  SelectItemIndicator,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectSeparator,
  SelectArrow,
};

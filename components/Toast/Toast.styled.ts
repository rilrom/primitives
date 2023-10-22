import styled from 'styled-components';
import {
  Root,
  Provider,
  Viewport,
  Title,
  Description,
  Action,
  Close,
} from '@radix-ui/react-toast';

export const StyledToast = styled(Root)`
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  padding: 15px;

  &[data-state="open"] {
    transform: translateX(0);
  }

  &[data-state="closed"] {
    opacity: 0;
  }

  &[data-swipe="move"] {
    transform: translateX(var(--radix-toast-swipe-move-x));
  }

  &[data-swipe="cancel"] {
    transform: translateX(0);
    transition: transform 200ms ease-out;
  }

  &[data-swipe="end"] {
    transform: translateX(calc(100% + 25px));
  }
`;

export const StyledToastProvider = styled(Provider)``;

export const StyledToastViewport = styled(Viewport)`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 25px;
  max-width: 100vw;
  margin: 0;
  list-style: none;
  z-index: 2147483647;
  outline: none;
`;

export const StyledToastTitle = styled(Title)``;

export const StyledToastDescription = styled(Description)``;

export const StyledToastAction = styled(Action)``;

export const StyledToastClose = styled(Close)``;

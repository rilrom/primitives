import styled from 'styled-components';
import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Close,
} from '@radix-ui/react-dialog';

export const StyledDialog = styled(Root)``;

export const StyledDialogTrigger = styled(Trigger)``;

export const StyledDialogPortal = styled(Portal)``;

export const StyledDialogOverlay = styled(Overlay)`
  background-color: rgba(0, 0, 0, 0.44);
  position: fixed;
  inset: 0;
  z-index: 1;
`;

export const StyledDialogContent = styled(Content)`
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem;
  z-index: 2;

  &:focus {
    outline: none;
  }
`;

export const StyledDialogHeader = styled.div`
  > * {
    margin-top: 0;
  }
`;

export const StyledDialogFooter = styled.div``;

export const StyledDialogTitle = styled(Title)``;

export const StyledDialogDescription = styled(Description)``;

export const StyledDialogClose = styled(Close)``;
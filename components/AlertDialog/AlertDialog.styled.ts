import styled from 'styled-components';
import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Action,
  Cancel,
} from '@radix-ui/react-alert-dialog';

export const StyledAlertDialog = styled(Root)``;

export const StyledAlertDialogTrigger = styled(Trigger)``;

export const StyledAlertDialogPortal = styled(Portal)``;

export const StyledAlertDialogOverlay = styled(Overlay)`
  background-color: rgba(0, 0, 0, 0.44);
  position: fixed;
  inset: 0;
  z-index: 1;
`;

export const StyledAlertDialogContent = styled(Content)`
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

export const StyledAlertDialogHeader = styled.div`
  > * {
    margin-top: 0;
  }
`;

export const StyledAlertDialogFooter = styled.div``;

export const StyledAlertDialogTitle = styled(Title)``;

export const StyledAlertDialogDescription = styled(Description)``;

export const StyledAlertDialogAction = styled(Action)``;

export const StyledAlertDialogCancel = styled(Cancel)``;

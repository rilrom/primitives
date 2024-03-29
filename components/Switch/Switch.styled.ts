import styled from 'styled-components';
import { Root, Thumb } from '@radix-ui/react-switch';

export const StyledSwitch = styled(Root)`
  all: unset;
  width: 42px;
  height: 25px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 9999px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:focus {
    box-shadow: 0 0 0 2px black;
  }

  &[data-state='checked'] {
    background-color: black;
  }
`;

export const StyledSwitchThumb = styled(Thumb)`
  display: block;
  width: 21px;
  height: 21px;
  background-color: white;
  border-radius: 9999px;
  box-shadow: 0 2px 2px black;
  transition: transform 100ms;
  transform: translateX(2px);
  willchange: transform;

  &[data-state='checked'] {
    transform: translateX(19px);
  }
`;

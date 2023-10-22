import styled from 'styled-components';
import { Root, Track, Range, Thumb } from '@radix-ui/react-slider';

export const StyledSlider = styled(Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 200px;
  height: 20px;
`;

export const StyledSliderTrack = styled(Track)`
  background-color: rgba(0, 0, 0, 0.4);
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;
  height: 3px;
`;

export const StyledSliderRange = styled(Range)`
  position: absolute;
  background-color: black;
  border-radius: 9999px;
  height: 100%;
`;

export const StyledSliderThumb = styled(Thumb)`
  display: block;
  width: 20px;
  height: 20px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  border-radius: 10px;

  &:focus { 
    outline: none;
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;
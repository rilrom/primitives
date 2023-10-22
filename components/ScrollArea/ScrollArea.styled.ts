import styled from 'styled-components';
import {
  Root,
  Viewport,
  Scrollbar,
  Thumb,
  Corner,
} from '@radix-ui/react-scroll-area';

export const StyledScrollArea = styled(Root)`
  width: 200px;
  height: 225px;
  overflow: hidden;
  background-color: antiquewhite;
`;

export const StyledScrollAreaViewport = styled(Viewport)`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;

export const StyledScrollAreaScrollbar = styled(Scrollbar)`
  display: flex;
  // ensures no selection
  user-select: none;
  // disable browser handling of all panning and zooming gestures on touch devices
  touch-action: none;
  padding: 2px;
  background-color: gainsboro;

  &[data-orientation="vertical"] { 
    width: 10px; 
  };

  &[data-orientation="horizontal"] {
    flex-direction: column;
    height: 10px;
  };
`;

export const StyledScrollAreaThumb = styled(Thumb)`
  flex: 1;
  background-color: gray;
  border-radius: 10px;
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  };
`;

export const StyledScrollAreaCorner = styled(Corner)`
  background-color: black;
`;

export const Box = styled.div`
  padding: 1rem;
`;

export const Heading = styled.h2`
  margin-top: 0;
  font-size: 1rem;
`;

export const Link = styled.a`
  display: block;
  margin-top: 1rem;

  &:first-of-type {
    margin-top: 0;
  }
`;
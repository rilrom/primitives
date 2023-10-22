import styled from 'styled-components';
import {
  Root,
  Indicator,
} from '@radix-ui/react-progress';

export const StyledProgress = styled(Root)`
  position: relative;
  overflow: hidden;
  background-color: black;
  border: 1px solid black;
  width: 300px;
  height: 25px;

  // Fix overflow clipping in Safari
  // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
  transform: translateZ(0);
`;

export const StyledProgressIndicator = styled(Indicator)`
  background-color: white;
  width: 100%;
  height: 100%;
  transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
`;

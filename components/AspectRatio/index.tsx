import * as React from 'react';
import type { AspectRatioProps } from '@radix-ui/react-aspect-ratio';
import { StyledAspectRatio } from './AspectRatio.styled';

const AspectRatio = (props: AspectRatioProps) => (
  <StyledAspectRatio {...props} />
);

export { AspectRatio };

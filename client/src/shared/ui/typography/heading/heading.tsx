import { ElementType, FC } from 'react';
import { Base, TypographyProps } from '../base';

export interface HeadingProps extends TypographyProps {
  as?: Extract<ElementType, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
}

export const Heading: FC<HeadingProps> = ({
  as: Component = 'h1',
  ...props
}) => {
  return <Base {...props} as={Component} />;
};

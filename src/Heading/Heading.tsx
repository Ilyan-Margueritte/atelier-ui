import React, { forwardRef } from 'react';
import type { HeadingProps, HeadingSize } from './Heading.types';
import { cx } from '../utils';
import './Heading.css';

const defaultLevelSizeMap: Record<number, HeadingSize> = {
  1: '3xl',
  2: '2xl',
  3: 'xl',
  4: 'lg',
  5: 'md',
  6: 'sm',
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(
  {
    level = 2,
    as,
    size,
    weight = 'semibold',
    align,
    className,
    children,
    ...rest
  },
  ref
) {
  const Component = as || (`h${level}` as const);
  const resolvedSize = size || defaultLevelSizeMap[level] || 'xl';

  const classes = cx(
    'ui-heading',
    `ui-heading--size-${resolvedSize}`,
    `ui-heading--weight-${weight}`,
    align && `ui-heading--align-${align}`,
    className
  );

  return React.createElement(
    Component,
    {
      ref,
      className: classes,
      ...rest,
    },
    children
  );
});

Heading.displayName = 'Heading';

import React, { forwardRef } from 'react';
import type { ContainerProps } from './Container.types';
import { cx, getSpaceValue } from '../../utils';
import './Container.css';

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  {
    as: Component = 'div',
    size = 'lg',
    centered = true,
    padding = 'md',
    className,
    style,
    children,
    ...rest
  },
  ref
) {
  const classes = cx(
    'ui-container',
    `ui-container--size-${size}`,
    centered && 'ui-container--centered',
    className
  );

  let paddingValue: string | undefined;
  if (typeof padding === 'boolean') {
    paddingValue = padding ? 'var(--ui-space-md)' : '0';
  } else if (padding) {
    paddingValue = getSpaceValue(padding);
  }

  const combinedStyle: React.CSSProperties = {
    paddingLeft: paddingValue,
    paddingRight: paddingValue,
    ...style,
  };

  return React.createElement(
    Component,
    {
      ref,
      className: classes,
      style: combinedStyle,
      ...rest,
    },
    children
  );
});

Container.displayName = 'Container';

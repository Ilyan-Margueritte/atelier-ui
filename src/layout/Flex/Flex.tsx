import React, { forwardRef } from 'react';
import type { FlexProps } from './Flex.types';
import { cx, getSpaceValue } from '../../utils';
import './Flex.css';

export const Flex = forwardRef<HTMLElement, FlexProps>(function Flex(
  {
    as: Component = 'div',
    direction = 'row',
    align,
    justify,
    gap,
    wrap,
    inline = false,
    className,
    style,
    children,
    ...rest
  },
  ref
) {
  const resolvedGap = getSpaceValue(gap);

  const wrapClass =
    typeof wrap === 'boolean'
      ? wrap ? 'ui-flex--wrap' : 'ui-flex--wrap-nowrap'
      : wrap ? `ui-flex--wrap-${wrap}` : undefined;

  const classes = cx(
    'ui-flex',
    inline && 'ui-flex--inline',
    direction && `ui-flex--direction-${direction}`,
    align && `ui-flex--align-${align}`,
    justify && `ui-flex--justify-${justify}`,
    wrapClass,
    className
  );

  const combinedStyle: React.CSSProperties = {
    gap: resolvedGap,
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

Flex.displayName = 'Flex';

import React, { forwardRef } from 'react';
import type { TextProps } from './Text.types';
import { cx } from '../../utils';
import './Text.css';

export const Text = forwardRef<HTMLElement, TextProps>(function Text(
  {
    as: Component = 'p',
    size = 'md',
    weight = 'normal',
    color = 'default',
    muted = false,
    align,
    truncate = false,
    mono = false,
    className,
    children,
    ...rest
  },
  ref
) {
  const resolvedColor = muted ? 'muted' : color;

  const classes = cx(
    'ui-text',
    `ui-text--size-${size}`,
    `ui-text--weight-${weight}`,
    `ui-text--color-${resolvedColor}`,
    align && `ui-text--align-${align}`,
    truncate && 'ui-text--truncate',
    mono && 'ui-text--mono',
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

Text.displayName = 'Text';

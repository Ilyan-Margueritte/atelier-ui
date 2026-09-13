import React, { forwardRef } from 'react';
import type { IconProps, IconSize } from './Icon.types';
import { cx } from '../utils';
import './Icon.css';

const sizeMap: Record<string, number> = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
  {
    icon: Component,
    size = 'md',
    color = 'inherit',
    spin = false,
    className,
    style,
    children,
    ...rest
  },
  ref
) {
  const pixelSize = typeof size === 'number' ? size : sizeMap[size] || 20;

  let resolvedColor = color;
  const tokenColors: Record<string, string> = {
    default: 'var(--ui-color-foreground)',
    muted: 'var(--ui-color-foreground-muted)',
    subtle: 'var(--ui-color-foreground-subtle)',
    primary: 'var(--ui-color-primary)',
    success: 'var(--ui-color-success)',
    warning: 'var(--ui-color-warning)',
    danger: 'var(--ui-color-danger)',
    inherit: 'currentColor',
  };

  if (tokenColors[color]) {
    resolvedColor = tokenColors[color];
  }

  const classes = cx(
    'ui-icon',
    spin && 'ui-icon--spin',
    className
  );

  const combinedStyle: React.CSSProperties = {
    width: `${pixelSize}px`,
    height: `${pixelSize}px`,
    color: resolvedColor,
    ...style,
  };

  if (Component) {
    return (
      <span className={classes} style={combinedStyle}>
        <Component
          ref={ref}
          width={pixelSize}
          height={pixelSize}
          aria-hidden="true"
          {...rest}
        />
      </span>
    );
  }

  return (
    <span className={classes} style={combinedStyle} aria-hidden="true">
      {children}
    </span>
  );
});

Icon.displayName = 'Icon';

import React, { forwardRef } from 'react';
import type { ButtonProps } from './Button.types';
import { cx } from '../../utils';
import './Button.css';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    iconLeft,
    iconRight,
    fullWidth = false,
    as: Component = 'button',
    type = 'button',
    className,
    children,
    ...rest
  },
  ref
) {
  const isActuallyDisabled = disabled || loading;

  const classes = cx(
    'ui-btn',
    `ui-btn--variant-${variant}`,
    `ui-btn--size-${size}`,
    fullWidth && 'ui-btn--full-width',
    isActuallyDisabled && 'ui-btn--disabled',
    loading && 'ui-btn--loading',
    className
  );

  const buttonProps = Component === 'button' ? { type, disabled: isActuallyDisabled } : { 'aria-disabled': isActuallyDisabled };

  return React.createElement(
    Component,
    {
      ref,
      className: classes,
      ...buttonProps,
      ...rest,
    },
    <>
      {loading ? (
        <span className="ui-btn__spinner" aria-hidden="true" />
      ) : (
        iconLeft && <span className="ui-btn__icon-left">{iconLeft}</span>
      )}
      {children && <span className="ui-btn__label">{children}</span>}
      {!loading && iconRight && <span className="ui-btn__icon-right">{iconRight}</span>}
    </>
  );
});

Button.displayName = 'Button';

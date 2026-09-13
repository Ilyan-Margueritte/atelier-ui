import React, { forwardRef, useId } from 'react';
import type { InputProps } from './Input.types';
import { cx } from '../utils';
import './Input.css';

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    size = 'md',
    variant = 'default',
    label,
    helperText,
    error,
    leftIcon,
    rightIcon,
    fullWidth = false,
    disabled = false,
    id: explicitId,
    className,
    ...rest
  },
  ref
) {
  const generatedId = useId();
  const id = explicitId || generatedId;
  const helperId = `${id}-helper`;
  const hasError = Boolean(error);
  const errorMessage = typeof error === 'string' ? error : undefined;

  const isReadOnly = rest.readOnly !== undefined ? rest.readOnly : (rest.value !== undefined && !rest.onChange ? true : undefined);

  const wrapperClasses = cx(
    'ui-input-wrapper',
    fullWidth && 'ui-input-wrapper--full-width'
  );

  const inputClasses = cx(
    'ui-input',
    `ui-input--size-${size}`,
    `ui-input--variant-${variant}`,
    leftIcon && 'ui-input--has-left-icon',
    rightIcon && 'ui-input--has-right-icon',
    hasError && 'ui-input--error',
    className
  );

  return (
    <div className={wrapperClasses}>
      {label && (
        <label
          htmlFor={id}
          className={cx('ui-input-label', disabled && 'ui-input-label--disabled')}
        >
          {label}
        </label>
      )}

      <div className="ui-input-container">
        {leftIcon && <span className="ui-input__icon ui-input__icon--left">{leftIcon}</span>}

        <input
          ref={ref}
          id={id}
          disabled={disabled}
          readOnly={isReadOnly}
          aria-invalid={hasError}
          aria-describedby={helperText || errorMessage ? helperId : undefined}
          className={inputClasses}
          {...rest}
        />

        {rightIcon && <span className="ui-input__icon ui-input__icon--right">{rightIcon}</span>}
      </div>

      {(errorMessage || helperText) && (
        <span
          id={helperId}
          className={cx('ui-input-helper', hasError && 'ui-input-helper--error')}
        >
          {errorMessage || helperText}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

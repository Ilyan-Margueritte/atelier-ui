import React, { forwardRef, useId } from 'react';
import type { SelectProps } from './Select.types';
import { cx } from '../utils';
import './Select.css';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  {
    options,
    placeholder,
    size = 'md',
    label,
    helperText,
    error,
    fullWidth = false,
    disabled = false,
    id: explicitId,
    className,
    children,
    value,
    defaultValue,
    ...rest
  },
  ref
) {
  const generatedId = useId();
  const id = explicitId || generatedId;
  const helperId = `${id}-helper`;
  const hasError = Boolean(error);
  const errorMessage = typeof error === 'string' ? error : undefined;

  const wrapperClasses = cx(
    'ui-select-wrapper',
    fullWidth && 'ui-select-wrapper--full-width'
  );

  const selectClasses = cx(
    'ui-select',
    `ui-select--size-${size}`,
    hasError && 'ui-select--error',
    className
  );

  return (
    <div className={wrapperClasses}>
      {label && (
        <label
          htmlFor={id}
          className={cx('ui-select-label', disabled && 'ui-select-label--disabled')}
        >
          {label}
        </label>
      )}

      <div className="ui-select-container">
        <select
          ref={ref}
          id={id}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          aria-invalid={hasError}
          aria-describedby={helperText || errorMessage ? helperId : undefined}
          className={selectClasses}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options
            ? options.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                  {opt.label}
                </option>
              ))
            : children}
        </select>

        <span className="ui-select-icon" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </div>

      {(errorMessage || helperText) && (
        <span
          id={helperId}
          className={cx('ui-select-helper', hasError && 'ui-select-helper--error')}
        >
          {errorMessage || helperText}
        </span>
      )}
    </div>
  );
});

Select.displayName = 'Select';

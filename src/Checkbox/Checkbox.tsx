import React, { forwardRef, useEffect, useRef } from 'react';
import type { CheckboxProps } from './Checkbox.types';
import { cx } from '../../utils';
import './Checkbox.css';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  {
    size = 'md',
    label,
    description,
    indeterminate = false,
    checked,
    defaultChecked,
    disabled = false,
    error,
    className,
    onChange,
    readOnly,
    ...rest
  },
  forwardedRef
) {
  const innerRef = useRef<HTMLInputElement>(null);
  const inputRef = (forwardedRef as React.RefObject<HTMLInputElement>) || innerRef;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = Boolean(indeterminate);
    }
  }, [indeterminate, inputRef]);

  const isChecked = checked !== undefined ? checked : undefined;
  const isReadOnly = readOnly !== undefined ? readOnly : (checked !== undefined && !onChange ? true : undefined);

  const wrapperClasses = cx(
    'ui-checkbox-wrapper',
    disabled && 'ui-checkbox-wrapper--disabled',
    className
  );

  const boxClasses = cx(
    'ui-checkbox-box',
    `ui-checkbox-box--${size}`,
    (isChecked || defaultChecked) && 'ui-checkbox-box--checked',
    indeterminate && 'ui-checkbox-box--indeterminate',
    error && 'ui-checkbox-box--error'
  );

  return (
    <label className={wrapperClasses}>
      <input
        ref={inputRef}
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        readOnly={isReadOnly}
        onChange={onChange}
        className="ui-checkbox-input"
        {...rest}
      />

      <span className={boxClasses} aria-hidden="true">
        {indeterminate ? (
          <svg className="ui-checkbox-icon" viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        ) : (
          <svg className="ui-checkbox-icon" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </span>

      {(label || description) && (
        <span className="ui-checkbox-content">
          {label && <span className="ui-checkbox-label">{label}</span>}
          {description && <span className="ui-checkbox-desc">{description}</span>}
        </span>
      )}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

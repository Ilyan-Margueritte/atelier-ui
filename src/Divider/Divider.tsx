import React, { forwardRef } from 'react';
import type { DividerProps } from './Divider.types';
import { cx, getSpaceValue } from '../../utils';
import './Divider.css';

export const Divider = forwardRef<HTMLDivElement, DividerProps>(function Divider(
  {
    orientation = 'horizontal',
    spacing = 'md',
    label,
    align = 'center',
    className,
    style,
    children,
    ...rest
  },
  ref
) {
  const content = label || children;
  const spacingVal = getSpaceValue(spacing);

  const classes = cx(
    'ui-divider',
    `ui-divider--${orientation}`,
    content && `ui-divider--align-${align}`,
    className
  );

  const combinedStyle: React.CSSProperties = {
    marginTop: orientation === 'horizontal' ? spacingVal : undefined,
    marginBottom: orientation === 'horizontal' ? spacingVal : undefined,
    marginLeft: orientation === 'vertical' ? spacingVal : undefined,
    marginRight: orientation === 'vertical' ? spacingVal : undefined,
    ...style,
  };

  return (
    <div
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      className={classes}
      style={combinedStyle}
      {...rest}
    >
      <div className="ui-divider__line" />
      {content && <span className="ui-divider__content">{content}</span>}
      {content && <div className="ui-divider__line" />}
    </div>
  );
});

Divider.displayName = 'Divider';

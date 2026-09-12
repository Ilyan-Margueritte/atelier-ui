import React, { forwardRef, Children } from 'react';
import type { StackProps } from './Stack.types';
import { cx, getSpaceValue } from '../../utils';
import './Stack.css';

export const Stack = forwardRef<HTMLElement, StackProps>(function Stack(
  {
    as: Component = 'div',
    direction = 'vertical',
    gap = 'md',
    align,
    justify,
    wrap = false,
    divider,
    className,
    style,
    children,
    ...rest
  },
  ref
) {
  const resolvedGap = gap === 'none' ? '0px' : getSpaceValue(gap);

  const classes = cx(
    'ui-stack',
    `ui-stack--${direction}`,
    align && `ui-stack--align-${align}`,
    justify && `ui-stack--justify-${justify}`,
    wrap && 'ui-stack--wrap',
    className
  );

  const combinedStyle: React.CSSProperties = {
    gap: resolvedGap,
    ...style,
  };

  let renderedChildren = children;
  if (divider) {
    const validChildren = Children.toArray(children).filter(Boolean);
    renderedChildren = validChildren.map((child, index) => {
      const isLast = index === validChildren.length - 1;
      return (
        <React.Fragment key={index}>
          {child}
          {!isLast && (
            React.isValidElement(divider) ? (
              divider
            ) : (
              <div className="ui-stack-divider" role="separator" />
            )
          )}
        </React.Fragment>
      );
    });
  }

  return React.createElement(
    Component,
    {
      ref,
      className: classes,
      style: combinedStyle,
      ...rest,
    },
    renderedChildren
  );
});

Stack.displayName = 'Stack';

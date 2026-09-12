import React, { forwardRef } from 'react';
import type { GridProps } from './Grid.types';
import { cx, getSpaceValue } from '../../utils';
import './Grid.css';

export const Grid = forwardRef<HTMLElement, GridProps>(function Grid(
  {
    as: Component = 'div',
    columns,
    minChildWidth,
    gap = 'md',
    rowGap,
    columnGap,
    align,
    justify,
    className,
    style,
    children,
    ...rest
  },
  ref
) {
  let gridTemplateColumns: string | undefined;

  if (minChildWidth) {
    const minWidth = typeof minChildWidth === 'number' ? `${minChildWidth}px` : minChildWidth;
    gridTemplateColumns = `repeat(auto-fit, minmax(${minWidth}, 1fr))`;
  } else if (typeof columns === 'number') {
    gridTemplateColumns = `repeat(${columns}, minmax(0, 1fr))`;
  } else if (typeof columns === 'string') {
    gridTemplateColumns = columns;
  }

  const classes = cx(
    'ui-grid',
    align && `ui-grid--align-${align}`,
    justify && `ui-grid--justify-${justify}`,
    className
  );

  const combinedStyle: React.CSSProperties = {
    gridTemplateColumns,
    gap: getSpaceValue(gap),
    rowGap: getSpaceValue(rowGap),
    columnGap: getSpaceValue(columnGap),
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

Grid.displayName = 'Grid';

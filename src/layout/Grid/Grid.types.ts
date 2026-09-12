import React from 'react';
import type { SpaceToken } from '../../utils';

export type GridAlign = 'start' | 'center' | 'end' | 'stretch';
export type GridJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  columns?: number | string;
  minChildWidth?: number | string;
  gap?: SpaceToken;
  rowGap?: SpaceToken;
  columnGap?: SpaceToken;
  align?: GridAlign;
  justify?: GridJustify;
  children?: React.ReactNode;
}

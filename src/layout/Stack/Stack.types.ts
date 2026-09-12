import React from 'react';
import type { SpaceToken } from '../../utils';

export type StackDirection = 'vertical' | 'horizontal';
export type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
export type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

export interface StackProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  direction?: StackDirection;
  gap?: SpaceToken | 'none';
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: boolean;
  divider?: React.ReactNode;
  children?: React.ReactNode;
}

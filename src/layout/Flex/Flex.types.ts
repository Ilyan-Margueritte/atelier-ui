import React from 'react';
import type { SpaceToken } from '../../utils';

export type FlexDirection = 'row' | 'row-reverse' | 'col' | 'col-reverse';
export type FlexAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
export type FlexWrap = boolean | 'wrap' | 'nowrap' | 'wrap-reverse';

export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  direction?: FlexDirection;
  align?: FlexAlign;
  justify?: FlexJustify;
  gap?: SpaceToken;
  wrap?: FlexWrap;
  inline?: boolean;
  children?: React.ReactNode;
}

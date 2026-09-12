import React from 'react';
import type { SpaceToken } from '../../utils';

export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: DividerOrientation;
  spacing?: SpaceToken;
  label?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
}

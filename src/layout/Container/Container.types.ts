import React from 'react';
import type { SpaceToken } from '../../utils';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: ContainerSize;
  centered?: boolean;
  padding?: SpaceToken | boolean;
  children?: React.ReactNode;
}

import React from 'react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
export type IconColor = 'default' | 'muted' | 'subtle' | 'primary' | 'success' | 'warning' | 'danger' | 'inherit' | string;

export interface IconProps extends React.SVGAttributes<SVGElement> {
  icon?: React.ElementType;
  size?: IconSize;
  color?: IconColor;
  spin?: boolean;
  className?: string;
  children?: React.ReactNode;
}

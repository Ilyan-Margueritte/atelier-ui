import React from 'react';

export type LinkVariant = 'default' | 'subtle' | 'underline';
export type LinkSize = 'sm' | 'md' | 'lg';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
  size?: LinkSize;
  external?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

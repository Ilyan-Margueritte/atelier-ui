import React from 'react';

export type TextElement = 'p' | 'span' | 'div' | 'label' | 'strong' | 'em' | 'small' | 'code';
export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type TextColor = 'default' | 'muted' | 'subtle' | 'primary' | 'success' | 'warning' | 'danger' | 'inherit';
export type TextAlign = 'left' | 'center' | 'right' | 'justify';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextElement;
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  muted?: boolean;
  align?: TextAlign;
  truncate?: boolean;
  mono?: boolean;
  children?: React.ReactNode;
}

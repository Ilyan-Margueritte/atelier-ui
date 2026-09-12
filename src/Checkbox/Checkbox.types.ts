import React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md';
  label?: React.ReactNode;
  description?: React.ReactNode;
  indeterminate?: boolean;
  error?: string | boolean;
}

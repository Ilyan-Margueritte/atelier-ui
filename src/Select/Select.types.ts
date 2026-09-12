import React from 'react';

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options?: SelectOption[];
  placeholder?: string;
  size?: SelectSize;
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: string | boolean;
  fullWidth?: boolean;
}

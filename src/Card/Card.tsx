import React, { forwardRef } from 'react';
import type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps } from './Card.types';
import { cx } from '../utils';
import './Card.css';

const CardBase = forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    as: Component = 'div',
    variant = 'outlined',
    padding = 'lg',
    interactive = false,
    className,
    children,
    ...rest
  },
  ref
) {
  const classes = cx(
    'ui-card',
    `ui-card--variant-${variant}`,
    `ui-card--padding-${padding}`,
    interactive && 'ui-card--interactive',
    className
  );

  return React.createElement(
    Component,
    {
      ref,
      className: classes,
      ...rest,
    },
    children
  );
});

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(function CardHeader(
  { className, children, ...rest },
  ref
) {
  return (
    <div ref={ref} className={cx('ui-card__header', className)} {...rest}>
      {children}
    </div>
  );
});
CardHeader.displayName = 'Card.Header';

const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(function CardBody(
  { className, children, ...rest },
  ref
) {
  return (
    <div ref={ref} className={cx('ui-card__body', className)} {...rest}>
      {children}
    </div>
  );
});
CardBody.displayName = 'Card.Body';

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(function CardFooter(
  { className, children, ...rest },
  ref
) {
  return (
    <div ref={ref} className={cx('ui-card__footer', className)} {...rest}>
      {children}
    </div>
  );
});
CardFooter.displayName = 'Card.Footer';

export const Card = Object.assign(CardBase, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});

Card.displayName = 'Card';

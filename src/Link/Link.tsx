import React, { forwardRef } from 'react';
import type { LinkProps } from './Link.types';
import { cx } from '../../utils';
import './Link.css';

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  {
    variant = 'default',
    size = 'md',
    external = false,
    iconLeft,
    iconRight,
    className,
    target,
    rel,
    children,
    ...rest
  },
  ref
) {
  const classes = cx(
    'ui-link',
    `ui-link--variant-${variant}`,
    `ui-link--size-${size}`,
    className
  );

  const resolvedTarget = external ? '_blank' : target;
  const resolvedRel = external ? (rel ? `${rel} noopener noreferrer` : 'noopener noreferrer') : rel;

  return (
    <a
      ref={ref}
      className={classes}
      target={resolvedTarget}
      rel={resolvedRel}
      {...rest}
    >
      {iconLeft && <span className="ui-link__icon-left">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="ui-link__icon-right">{iconRight}</span>}
      {external && !iconRight && (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ui-link__external-icon"
          aria-hidden="true"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      )}
    </a>
  );
});

Link.displayName = 'Link';

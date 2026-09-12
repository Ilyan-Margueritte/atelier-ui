/**
 * Atelier UI — Internal Utilities
 */

export type ClassValue = string | number | boolean | undefined | null | { [key: string]: any } | ClassValue[];

/**
 * Lightweight classNames / cx utility with zero dependencies
 */
export function cx(...classes: ClassValue[]): string {
  const result: string[] = [];

  for (const item of classes) {
    if (!item) continue;

    if (typeof item === 'string' || typeof item === 'number') {
      result.push(String(item));
    } else if (Array.isArray(item)) {
      const inner = cx(...item);
      if (inner) result.push(inner);
    } else if (typeof item === 'object') {
      for (const [key, value] of Object.entries(item)) {
        if (value) result.push(key);
      }
    }
  }

  return result.join(' ');
}

/**
 * Maps space scale token values to css variable or raw css length
 */
export type SpaceToken = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | number | string;

export function getSpaceValue(val?: SpaceToken): string | undefined {
  if (val === undefined) return undefined;
  if (typeof val === 'number') return `${val}px`;
  const tokenList = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];
  if (tokenList.includes(val)) {
    return `var(--ui-space-${val})`;
  }
  return val;
}

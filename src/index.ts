/**
 * Atelier UI — Modern, minimalist, accessible React + TypeScript UI framework
 */

// Styles import helper (can be imported in consumer index/root)
import './styles/globals.css';

// Foundation
export * from './components/Text';
export * from './components/Heading';
export * from './components/Icon';
export * from './components/Divider';

// Actions
export * from './components/Button';
export * from './components/Link';

// Forms
export * from './components/Input';
export * from './components/Checkbox';
export * from './components/Select';

// Containers
export * from './components/Card';

// Layout
export * from './layout/Stack';
export * from './layout/Flex';
export * from './layout/Grid';
export * from './layout/Container';

// Theme
export * from './theme';

// Utils
export { cx, getSpaceValue } from './utils';
export type { SpaceToken, ClassValue } from './utils';

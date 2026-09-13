# Atelier UI — Skill File for AI Agents

> **Purpose:** This file enables an AI agent to understand and build interfaces with the Atelier UI framework. Read this file before writing any code that uses Atelier UI.

---

## 1. What is Atelier UI?

Atelier UI is a **React + TypeScript UI framework** with pure CSS design tokens. No Tailwind, no Bootstrap — just components and CSS variables.

- **Package:** `atelier-ui`
- **Peer dependencies:** `react ^18.0.0 || ^19.0.0`, `react-dom ^18.0.0 || ^19.0.0`

---

## 2. Setup

```tsx
// 1. CSS first (before any component)
import 'atelier-ui/styles/globals.css';

// 2. Components
import { ThemeProvider, Button, Card, Stack } from 'atelier-ui';
```

```tsx
function App() {
  return (
    <ThemeProvider defaultTheme="light" enableSystem>
      <YourApp />
    </ThemeProvider>
  );
}
```

---

## 3. Components

### Button

```tsx
<Button variant="primary" size="md" iconLeft={<Icon />} loading>
  Click me
</Button>
```

| Prop | Type | Default |
|------|------|---------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `loading` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |
| `iconLeft` | `ReactNode` | — |
| `iconRight` | `ReactNode` | — |
| `fullWidth` | `boolean` | `false` |
| `as` | `ElementType` | `'button'` |
| `href` | `string` | — |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` |

### Card

Compound component with `Card.Header`, `Card.Body`, `Card.Footer`.

```tsx
<Card variant="outlined" padding="md">
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Actions</Card.Footer>
</Card>
```

| Prop | Type | Default |
|------|------|---------|
| `variant` | `'elevated' \| 'outlined' \| 'flat'` | `'outlined'` |
| `padding` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'lg'` |
| `interactive` | `boolean` | `false` |
| `as` | `ElementType` | `'div'` |

### Text

```tsx
<Text as="span" size="sm" muted mono>Hello</Text>
```

| Prop | Type | Default |
|------|------|---------|
| `as` | `'p' \| 'span' \| 'div' \| 'label' \| 'strong' \| 'em' \| 'small' \| 'code'` | `'p'` |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'md'` |
| `weight` | `'normal' \| 'medium' \| 'semibold' \| 'bold'` | `'normal'` |
| `color` | `'default' \| 'muted' \| 'subtle' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'inherit'` | `'default'` |
| `muted` | `boolean` | `false` |
| `align` | `'left' \| 'center' \| 'right' \| 'justify'` | — |
| `truncate` | `boolean` | `false` |
| `mono` | `boolean` | `false` |

### Heading

```tsx
<Heading level={3} size="sm" weight="bold" align="center">Title</Heading>
```

| Prop | Type | Default |
|------|------|---------|
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `2` |
| `as` | `'h1' \| ... \| 'h6' \| 'span' \| 'div'` | auto from level |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl'` | auto from level |
| `weight` | `'normal' \| 'medium' \| 'semibold' \| 'bold'` | `'semibold'` |
| `align` | `'left' \| 'center' \| 'right'` | — |

### Input

```tsx
<Input label="Email" placeholder="name@example.com" helperText="Helper text" fullWidth />
<Input label="Password" error="Invalid password" fullWidth />
```

| Prop | Type | Default |
|------|------|---------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `variant` | `'default' \| 'filled'` | `'default'` |
| `label` | `ReactNode` | — |
| `helperText` | `ReactNode` | — |
| `error` | `string \| boolean` | — |
| `leftIcon` | `ReactNode` | — |
| `rightIcon` | `ReactNode` | — |
| `fullWidth` | `boolean` | `false` |

### Select

```tsx
<Select
  label="Region"
  options={[
    { label: 'Europe', value: 'eu' },
    { label: 'US East', value: 'us' },
  ]}
  fullWidth
/>
```

| Prop | Type | Default |
|------|------|---------|
| `options` | `SelectOption[]` | — |
| `placeholder` | `string` | — |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `label` | `ReactNode` | — |
| `helperText` | `ReactNode` | — |
| `error` | `string \| boolean` | — |
| `fullWidth` | `boolean` | `false` |

### Checkbox

```tsx
<Checkbox label="Accept terms" description="Required to proceed." />
```

| Prop | Type | Default |
|------|------|---------|
| `size` | `'sm' \| 'md'` | `'md'` |
| `label` | `ReactNode` | — |
| `description` | `ReactNode` | — |
| `indeterminate` | `boolean` | `false` |
| `error` | `string \| boolean` | — |

### Link

```tsx
<Link href="/about" variant="underline" external>About us</Link>
```

| Prop | Type | Default |
|------|------|---------|
| `variant` | `'default' \| 'subtle' \| 'underline'` | `'default'` |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `external` | `boolean` | `false` |
| `iconLeft` | `ReactNode` | — |
| `iconRight` | `ReactNode` | — |

### Icon

```tsx
<Icon icon={MySvgComponent} size="lg" color="primary" />
```

| Prop | Type | Default |
|------|------|---------|
| `icon` | `ElementType` | — |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number` | `'md'` |
| `color` | `'default' \| 'muted' \| 'subtle' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'inherit'` | `'inherit'` |
| `spin` | `boolean` | `false` |

### Divider

```tsx
<Divider label="OR" spacing="lg" align="center" />
```

| Prop | Type | Default |
|------|------|---------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` |
| `spacing` | `SpaceToken` | `'md'` |
| `label` | `ReactNode` | — |
| `align` | `'left' \| 'center' \| 'right'` | `'center'` |

---

## 4. Layout Components

### Stack

Primary layout primitive. Manages spacing between children.

```tsx
<Stack gap="md" direction="vertical" align="start">
  <Heading>Title</Heading>
  <Text muted>Description</Text>
  <Button>Action</Button>
</Stack>
```

| Prop | Type | Default |
|------|------|---------|
| `direction` | `'vertical' \| 'horizontal'` | `'vertical'` |
| `gap` | `SpaceToken \| 'none'` | `'md'` |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch' \| 'baseline'` | — |
| `justify` | `'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly'` | — |
| `wrap` | `boolean` | `false` |
| `divider` | `ReactNode` | — |
| `as` | `ElementType` | `'div'` |

### Flex

```tsx
<Flex direction="row" align="center" justify="between" gap="md">
  <Text>Left</Text>
  <Text>Right</Text>
</Flex>
```

| Prop | Type | Default |
|------|------|---------|
| `direction` | `'row' \| 'row-reverse' \| 'col' \| 'col-reverse'` | `'row'` |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch' \| 'baseline'` | — |
| `justify` | `'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly'` | — |
| `gap` | `SpaceToken` | — |
| `wrap` | `boolean \| 'wrap' \| 'nowrap' \| 'wrap-reverse'` | — |
| `inline` | `boolean` | `false` |
| `as` | `ElementType` | `'div'` |

### Grid

```tsx
<Grid columns={3} gap="lg">
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
</Grid>

<Grid minChildWidth="250px" gap="md">
  {items.map(item => <Card key={item.id}>{item.name}</Card>)}
</Grid>
```

| Prop | Type | Default |
|------|------|---------|
| `columns` | `number \| string` | — |
| `minChildWidth` | `number \| string` | — |
| `gap` | `SpaceToken` | `'md'` |
| `rowGap` | `SpaceToken` | — |
| `columnGap` | `SpaceToken` | — |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch'` | — |
| `as` | `ElementType` | `'div'` |

### Container

```tsx
<Container size="lg" centered padding="md">
  <Stack gap="md">...</Stack>
</Container>
```

| Prop | Type | Default |
|------|------|---------|
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'lg'` |
| `centered` | `boolean` | `true` |
| `padding` | `SpaceToken \| boolean` | `'md'` |
| `as` | `ElementType` | `'div'` |

---

## 5. Theme

### ThemeProvider

| Prop | Type | Default |
|------|------|---------|
| `defaultTheme` | `'light' \| 'dark' \| 'system'` | `'light'` |
| `storageKey` | `string` | `'atelier-ui-theme'` |
| `attribute` | `string` | `'data-theme'` |
| `enableSystem` | `boolean` | `true` |

### useTheme

```tsx
import { useTheme } from 'atelier-ui';

function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Current: {resolvedTheme}</button>;
}
```

---

## 6. Design Tokens

Use these CSS variables in custom styles. Never use hardcoded values.

### Spacing (`--ui-space-*`, base 4px)

| Token | Value |
|-------|-------|
| `--ui-space-2xs` | 4px |
| `--ui-space-xs` | 8px |
| `--ui-space-sm` | 12px |
| `--ui-space-md` | 16px |
| `--ui-space-lg` | 24px |
| `--ui-space-xl` | 32px |
| `--ui-space-2xl` | 48px |
| `--ui-space-3xl` | 64px |

### Colors (`--ui-color-*`)

| Token | Light | Dark |
|-------|-------|------|
| `--ui-color-background` | `#fafaf9` | `#090a0b` |
| `--ui-color-surface` | `#ffffff` | `#121316` |
| `--ui-color-foreground` | `#1c1917` | `#f4f4f5` |
| `--ui-color-foreground-muted` | `#78716c` | `#a1a1aa` |
| `--ui-color-primary` | `#18181b` | `#f4f4f5` |
| `--ui-color-primary-fg` | `#ffffff` | `#090a0b` |
| `--ui-color-accent` | `#2563eb` | `#3b82f6` |
| `--ui-color-success` | `#16a34a` | `#22c55e` |
| `--ui-color-warning` | `#d97706` | `#f59e0b` |
| `--ui-color-danger` | `#dc2626` | `#ef4444` |
| `--ui-color-border` | `#e7e5e4` | `#23262b` |

### Border Radius (`--ui-radius-*`)

| Token | Value |
|-------|-------|
| `--ui-radius-sm` | 6px |
| `--ui-radius-md` | 10px |
| `--ui-radius-lg` | 14px |
| `--ui-radius-full` | 9999px |

### Shadows (`--ui-shadow-*`)

| Token | Usage |
|-------|-------|
| `--ui-shadow-xs` | Subtle lift |
| `--ui-shadow-sm` | Small elements |
| `--ui-shadow-md` | Standard elevation |
| `--ui-shadow-lg` | High elevation |

### Typography

| Token | Value |
|-------|-------|
| `--ui-font-sans` | Plus Jakarta Sans, system stack |
| `--ui-font-mono` | JetBrains Mono, monospace |
| `--ui-font-size-xs` | 0.75rem (12px) |
| `--ui-font-size-sm` | 0.875rem (14px) |
| `--ui-font-size-md` | 1rem (16px) |
| `--ui-font-size-lg` | 1.125rem (18px) |
| `--ui-font-size-xl` | 1.25rem (20px) |
| `--ui-font-size-2xl` | 1.5rem (24px) |

---

**Last updated:** September 2026
**Version:** 1.0.0

# Atelier UI

**Une fondation UI propre et opinionated pour React, construite avec des CSS variables.**

> Aucun framework CSS tiers (pas de Tailwind, pas de Bootstrap). Juste des composants React typés et des design tokens CSS.

## Installation

```bash
npm install atelier-ui-react
```

## Utilisation

```tsx
import React from 'react';
import 'atelier-ui-react/styles/globals.css';
import { Card, Button, ThemeProvider } from 'atelier-ui-react';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Card variant="outlined" padding="md">
        <Button variant="primary">Action</Button>
      </Card>
    </ThemeProvider>
  );
}
```

## Documentation

- **Guide complet** : `doc.md`
- **Documentation IA** : `skill.md`

## Features

- **Design tokens CSS purs** — `--ui-color-*`, `--ui-space-*`, `--ui-radius-*`, `--ui-shadow-*`
- **Thème clair/sombre** avec `ThemeProvider`
- **15+ composants** : Card, Button, Input, Select, Checkbox, Heading, Text, Stack, Flex, Grid, Container, Link, Divider, Icon
- **Accessibilité** — Designed with WCAG AA accessibility in mind
- **Aucune dépendance CSS tierce**
- **API déclarative** claire et prévisible

## Structure

```
src/
├── Button/, Card/, Input/, ...    Composants
├── layout/                         Stack, Flex, Grid, Container
├── theme/                          Tokens CSS, ThemeProvider, light/dark
├── styles/                         globals.css, reset.css
└── utils/                          cx(), getSpaceValue()
```

## Licence

MIT

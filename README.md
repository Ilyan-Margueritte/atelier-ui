# Atelier UI — Source Code

## Description
Ce dossier contient le code source du framework **Atelier UI**, un framework React + TypeScript minimaliste et accessible construit avec des variables CSS pures (design tokens).

## Structure du dossier

```
src/
├── components/     ← Composants UI (Card, Button, Input, Select, Checkbox, etc.)
├── layout/         ← Dispositions (Stack, Flex, Grid, Container)
├── theme/          ← Système de tokens CSS, ThemeProvider, light/dark modes
├── styles/         ← Fichiers de style de base (reset.css, globals.css)
└── utils/          ← Utilitaires (cx(), getSpaceValue())
```

## Utilisation du framework

### Installation dans un nouveau projet
```bash
npm install atelier-ui
# ou depuis le dossier local
npm install file:./framework
```

### Importation de base
```tsx
import React from 'react';
import { Card, Button, ThemeProvider } from 'atelier-ui';

function Exemple() {
  return (
    <ThemeProvider defaultTheme="light">
      <Card variant="outlined" padding="md">
        <Button variant="primary">Action</Button>
      </Card>
    </ThemeProvider>
  );
}
```

## Personnalisation

Les styles sont entièrement basés sur des variables CSS — pas de valeurs en dur :

```css
/* Dans votre projet global.css */
:root {
  --ui-color-primary: #ff0000;   /* Votre couleur */
  --ui-space-lg: 3rem;           /* Votre espacement */
}
@import 'atelier-ui/styles/globals.css';
```

## Personnalisation dynamique (sans recompilation)

Modifiez les variables CSS dans votre propre fichier CSS — les changements sont visibles instantanément :

```css
.my-app {
  --ui-color-primary: #eab308;
  --ui-radius-md: 14px;
  --ui-space-lg: 2rem;
}
```

## Composants disponibles

- **Foundation** : Text, Heading, Divider
- **Layout** : Stack, Flex, Grid, Container  
- **Actions** : Button (5 variants, 3 sizes)
- **Forms** : Input, Select, Checkbox
- **Conteneurs** : Card (3 variants)

## Développement

Pour modifier le framework :
```bash
# Compiler les types
npm run lint    # tsc --noEmit

# Build du package
npm run build:ui
```

## Publication npm

```bash
npm version patch    # 1.0.0 → 1.0.1
npm publish          # Publier sur npmjs.com
```

## Licence
MIT - Construit avec des variables CSS pures, pas de dépendances CSS tierces.
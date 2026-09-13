# Atelier UI

**Modern, accessible React + TypeScript UI framework built with pure CSS design tokens.**

> **Un framework UI minimaliste, accessible et beau par défaut.** Aucun framework CSS tiers (pas de Tailwind, pas de Bootstrap). Juste des variables CSS pures et des composants React typés.

## 📦 Installation

```bash
npm install atelier-ui
# ou depuis ce dépôt
cd .. && npm install
```

## 🚀 Utilisation de base

```tsx
import React from 'react';
import 'atelier-ui/styles/globals.css';
import { Card, Button, ThemeProvider } from 'atelier-ui';

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

## 📚 Documentation

- **Guide rapide** : Voir `doc.md`
- **Documentation IA** : Voir `skill.md`
- **API complète** : Tous les composants et tokens sont documentés dans ce dépôt

## 🛠️ Features

- **Design tokens CSS purs** — `--ui-color-*`, `--ui-space-*`, `--ui-radius-*`, `--ui-shadow-*`
- **Thème clair/sombre** complet avec `ThemeProvider`
- **15+ composants** prêts à l'emploi : Card, Button, Input, Select, Checkbox, Heading, Text, Stack, Flex, Grid, Container, Link, Divider, Icon, etc.
- **Accessibilité WCAG AA** garantie dans les deux modes
- **Aucune dépendance CSS tierce** — zéro compromis sur les performances
- **API déclarative** claire et prévisible
- **Support V1** : L'assemblage standard produit une interface sobre sans CSS custom

## 🏗️ Structure du dépôt

```
framework/     
├── package.json
├── tsconfig.json
├── skill.md        ← Documentation IA / détails techniques
├── doc.md          ← Documentation utilisateur détaillée
├── README.md       ← Présentation du framework
└── src/            ← Tout le code source
    ├── components/ ← Card, Button, Input, Select, Checkbox, etc.
    ├── layout/     ← Stack, Flex, Grid, Container
    ├── theme/      ← Tokens CSS, ThemeProvider, light/dark
    ├── styles/     ← globals.css, reset.css
    └── utils/      ← cx(), getSpaceValue()

## 🛠️ Installation

```bash
# Via npm (package publié)
npm install atelier-ui

# En développement local ce dépôt
cd ..
git clone https://github.com/Ilyan-Margueritte/atelier-ui.git

cd atelier-ui

npm install
```

## 📄 Licence

MIT — Construit avec des variables CSS pures, pas de dépendances CSS tierces.

---

**⚡ Atelier UI — Beau par défaut, construit avec des tokens CSS purs.**

---

## 🔧 Développement

```bash
# Compiler les types
npm run lint    # tsc --noEmit

# Build du package
npm run build:ui

# Lancer les tests
npm test
```
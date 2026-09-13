# Atelier UI — Documentation Détaillée

**Guide complet pour créer des interfaces utilisateur avec le framework Atelier UI.**

## 1. Premières étapes

### Installation

```bash
# Option A :Depuis npm
npm install atelier-ui

# Option B :Développement local
cd FrameworkUI/framework
npm install   # ou utilisez le dossier directement
```

### Configuration de base dans votre projet

```tsx
import React from 'react';
import 'atelier-ui-react/styles/globals.css';
import { ThemeProvider } from 'atelier-ui-react';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <MonApplication />
    </ThemeProvider>
  );
}
```

## 2. Critère V1 (La règle d'or)

Tout assemblage suivant doit produire une interface sobre et impeccable **sans CSS custom** :

```tsx
<Card>
  <Stack gap="md">
    <Heading>Mon Projet</Heading>
    <Text muted>Gérer mon projet.</Text>
    <Button>Ouvrir le projet</Button>
  </Stack>
</Card>
```

**Résultat attendu :** Une carte propre avec typographie, espacement et bouton qui respectent le design system — aucun style additionnel requis.

## 3. Créer votre première interface

### Étape 1 : Importer les composants de base

```tsx
import React from 'react';
import {
  Card,
  Stack,
  Heading,
  Text,
  Button,
  ThemeProvider,
  useTheme,
} from 'atelier-ui-react';
import 'atelier-ui-react/styles/globals.css';
```

### Étape 2 : Structurer avec Stack (disposition)

`Stack` est la primitive de disposition principale. Elle gère les espacements automatiquement.

```tsx
<Stack gap="md">
  <!-- gap="xs" | "sm" | "md" | "lg" | "xl" | "2xl" -->
  <Heading level={3} size="sm">Titre</Heading>
  <Text muted>Description subtile</Text>
  <Button variant="primary">Action</Button>
</Stack>
```

**Propriétés Stack :**
- `direction` : 'vertical' (par défaut) | 'horizontal'
- `gap` : Espacement entre enfants (xs→2xl, base 4px)
- `align` : 'start' | 'center' | 'end' | 'stretch' | 'baseline'
- `justify` : 'start' | 'center' | 'end' | 'between' | 'around'
- `divider` : Ajoute automatiquement des séparateurs

### Étape 3 : Ajouter du contenu

```tsx
<Stack gap="md">
  <Heading level={2} size="xl">Titre principal</Heading>
  <Text muted>Sous-titre ou description</Text>
  <Button variant="primary" size="md">
    Cliquer ici
  </Button>
</Stack>
```

### Étape 4 : Ajouter une carte (optionnel)

```tsx
<Card variant="outlined" padding="md">
  <Stack gap="md">
    <Heading level={3} size="sm">Card Title</Heading>
    <Text muted>Description de la carte</Text>
    <Button>Action depuis la carte</Button>
  </Stack>
</Card>
```

**Variantes Card :**
- `outlined` — Bordure 1px, zéro ombre (idéal dashboards)
- `elevated` — Élévation douce, moderne
- `flat` — Fond incrustation subtile, sans bordure

## 4. Système de design tokens (CSS Variables)

Toutes les valeurs sont des variables CSS — pas de valeurs en dur dans les composants.

### Couleurs (`--ui-color-*`)

| Variable | Usage | Exemple |
|----------|-------|---------|
| `--ui-color-surface` | Fond des composants | Fonds cartes, dossiers |
| `--ui-color-background` | Fond de page | `#f9fafb` |
| `--ui-color-primary` | Action principale | Boutons principaux |
| `--ui-color-accent` | Accent secondaire | Éléments de mise en avant |
| `--ui-color-success` | Succès | États positifs |
| `--ui-color-danger` | Danger | Erreurs, alerts |
| `--ui-color-foreground` | Texte principal | Texte lisible |
| `--ui-color-foreground-muted` | Texte secondaire | Labels, métadonnées |

### Espacement (`--ui-space-*`) — Base 4px

| Variable | Valeur | Usage |
|----------|--------|-------|
| `--ui-space-2xs` | 4px | Entre petits éléments |
| `--ui-space-xs` | 8px | Petit espacement |
| `--ui-space-sm` | 12px | Espacement standard |
| `--ui-space-md` | 16px | **Usage recommandé** |
| `--ui-space-lg` | 24px | Entre sections |
| `--ui-space-xl` | 32px | Marge sections |
| `--ui-space-2xl` | 48px | Gros espacement |
| `--ui-space-3xl` | 64px | Section header |

### Rayons (`--ui-radius-*`)

| Variable | Valeur | Usage |
|----------|--------|-------|
| `--ui-radius-sm` | 6px | Boutons sm, badges |
| `--ui-radius-md` | 10px | **Boutons standards, inputs** |
| `--ui-radius-lg` | 14px | Cartes, conteneurs |
| `--ui-radius-full` | 9999px | Avatars, pills |

### Ombres (`--ui-shadow-*`)

| Variable | Usage |
|----------|-------|
| `--ui-shadow-sm` | Petites élévations |
| `--ui-shadow-md` | **Élévation standard** |
| `--ui-shadow-lg` | Grandes élévations |

## 5. Formulaires

### Input avec label et helperText

```tsx
<Input
  label="Adresse email"
  placeholder="nom@exemple.com"
  helperText="Nous ne partagerons jamais votre email."
  fullWidth
/>
```

### Input avec état d'erreur

```tsx
<Input
  label="Identifiant"
  placeholder="Entrez votre identifiant"
  error="Cet identifiant est déjà utilisé"
  fullWidth
/>
```

### Sélecteur d'options

```tsx
<Select
  label="Région"
  options={[
    { label: 'Europe (Paris)', value: 'eu' },
    { label: 'US East (N. Virginia)', value: 'us' },
  ]}
  fullWidth
/>
```

### Case à cocher

```tsx
<Checkbox
  label="Accepter les conditions"
  description="Requis pour créer un compte."
/>
```

## 5. Personnalisation avancée

### Surcharge des tokens CSS

Dans votre fichier global.css (avant d'importer atelier-ui-react) :

```css
:root {
  --ui-color-primary: #eab308;      /* Votre couleur */
  --ui-space-lg: 3rem;              /* Votre espacement */
  --ui-radius-md: 16px;             /* Votre rayon */
}
@import 'atelier-ui-react/styles/globals.css';
```

### Thème dynamique

```tsx
import { useTheme, ThemeProvider } from 'atelier-ui-react';

function App() {
  const { resolvedTheme, toggleTheme } = useTheme();
  
  return (
    <ThemeProvider defaultTheme="light" onThemeToggle={toggleTheme}>
      {/* Bascule light/dark */}
      <button onClick={toggleTheme}>Basculer thème</button>
      <MonComposant />
    </ThemeProvider>
  );
}
```

## 6. Accessibilité (a11y)

Le framework assure automatiquement :

- **Liaison label/input** : Via `useId` / `htmlFor` automatiquement
- **Messages d'erreur** : Liés au champ via `aria-describedby`
- **État invalid** : `aria-invalid={true}` sur champs erreurs
- **Focus visible** : `:focus-visible` avec `--ui-color-accent`
- **Contraste WCAG AA** dans les modes clair/sombre
- **Navigation clavier** : Tous les éléments interactifs ont focus

## 5. Dépannage

### Problème : Les styles ne s'appliquent pas

**Solution :** Vérifiez d'avoir importé `atelier-ui-react/styles/globals.css` en **premier** dans votre fichier d'entrée (index.tsx ou App.tsx).

### Problème : Le thème ne change pas

**Solution :** Vérifiez que l'élément racine a l'attribut `[data-theme="dark"]` quand le thème est activé, ou que `toggleTheme` est bien appelé.

### Problème : Les composants ont l'air "cassés"

**Solution :** Vérifiez la version de React — le frameworkRequire `react ^18.0.0 || ^19.0.0`.

## 6. Contribution au framework

### Ajouter un nouveau composant

1. Créer `framework/src/components/NouveauComposant/NouveauComposant.tsx` avec `forwardRef`
2. Créer `framework/src/components/NouveauComposant/NouveauComposant.types.ts` avec les interfaces de props
3. Créer `framework/src/components/NouveauComposant/NouveauComposant.css` avec sélecteurs `.ui-nouveau-composant`
4. Exporter depuis `framework/src/components/NouveauComposant/index.ts`
5. Mettre à jour `framework/src/index.ts` avec `export * from './components/NouveauComposant'`
6. Passer `npm run lint` et `npm test`
7. Build : `npm run build:ui`

### Guidelines V1

- Toujours utiliser `cx()` pour la concaténation de classes
- Toujours préserver le `ref` via `forwardRef`
- Jamais de valeurs en dur — utiliser les tokens `--ui-*`
- Accessibilité WCAG AA dans les deux thèmes

## 7. Ressources supplémentaires

- `framework/skill.md` — Documentation IA / détails techniques
- `demo-app/` — Exemples d'utilisation complets
- `projetcomplet/` — Projet origine (développement local)
- npm package : `atelier-ui-react` sur npmjs.com

---

**Version :** 1.0.0  
**Dernière mise à jour :** Septembre 2026  
**Licence :** MIT  
** dépendances requises :** react ^18.0.0 || ^19.0.0, react-dom ^18.0.0 || ^19.0.0
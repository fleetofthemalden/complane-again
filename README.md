# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

# Complane

A simple step-by-step website to "complane" to Secretary Pete Buttigieg about bad experiences on US Airlines.

Hosted at [minnick.co/complane-again](https://www.minnick.co/complane-again)

## Implementation Task List
Using Markdown because JIRA would be overkill

#### App Structure, etc
- [ ] Logo and favicon
- [ ] Set up deployment to GH pages
- [ ] install tailwind
- [ ] add shadcn
  - [ ] install
  - [ ] add forms
- [ ] nav (v1.0.5)
  - [ ] start over
  - [ ] resume
  - [ ] prev
  - [ ] next
  - [ ] skip
- [ ] clean up starter code
- [ ] Footer (v1.0.6)
  - [ ] hire me info
  - [ ] paypal link


#### Landing Screen (v1.0)
- [ ] view + router
- [ ] blurb
- [ ] common complaints (v1.2)

#### Basic Flight Info Form (v1.0)
- [ ] view + router
- [ ] Airline Picker
  - [ ] Fix closing behavior (v1.2)
  - [ ] Add airline images (v1.2)
- [ ] Flight No input
- [ ] Date Picker
- [ ] Format page
- [ ] store
- [ ] Fix premature form validation (v1.1)
- [ ] Airport Code To/From (v1.2.5)

#### Check-in (v1.2)
- [ ] view + router
- [ ] yes/no
- [ ] text input
- [ ] store

#### Boarding (v1.2)
- [ ] view + router
- [ ] yes/no
- [ ] text input
- [ ] store

#### In-Flight (v1.0)
- [ ] view + router
- [ ] yes/no
- [ ] text input
- [ ] store
- [ ] unit tests

#### Arrival (v1.2)
- [ ] view + router
- [ ] yes/no
- [ ] text input
- [ ] store

#### Send to Pete (v1.0)
- [ ] view + router
- [ ] write letter
- [ ] format letter
- [ ] read from store
- [ ] email link 
  - [ ] v1.0 email link
  - [ ] encode email body (v1.1)
  - [ ] 1 click button (v1.1)
- [ ] copy to clipboard (v1.1)
- [ ] print preview (v1.1)
- [ ] edge cases (v1.1)
  - [ ] user has no issues with flight
- [ ] Tone toggle: Normal / Joe Lycett (v1.3)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

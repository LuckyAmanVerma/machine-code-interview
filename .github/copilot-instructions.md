# AI Coding Agent Instructions: Machine Code Interview

## Project Overview
React + TypeScript SPA built with Vite for practicing coding interviews. Uses React Router for navigation and CSS Modules for styling.

## Architecture & Key Patterns

### Module Organization
- **Path alias `@`** points to `src/` (configured in `vite.config.ts` and `tsconfig.json`)
- Use `@/features/Home` instead of relative imports
- **Features structure** in `src/features/`:
  - Each feature (Home, NotFound) is a folder with `index.tsx` component
  - Features export from `src/features/index.tsx` as a barrel export
  - CSS Modules colocated in `styles/` subfolder per feature

### Component Pattern
All React components follow this structure:
```typescript
import React from 'react';
import styles from './styles/ComponentName.module.css';

const ComponentName: React.FC = () => {
  return <div className={styles.container}>...</div>;
};

export default ComponentName;
```

### Routing Architecture
- **App.tsx** is root router using `react-router-dom` v6
- Routes defined as `<Route path="/" element={<Home />} />`
- Wildcard route `*` handles 404 with NotFound component
- Import routed components from `@/features`

## Development Workflows

### Build & Run Commands
```bash
npm run dev      # Start Vite dev server (http://localhost:3000 with auto-open)
npm run build    # TypeScript check + Vite build
npm run preview  # Preview production build locally
```

### TypeScript Setup
- Target: ESNext, strict mode enabled
- Lib: ES2020, DOM with iterables
- JSX: react-jsx (new JSX transform)
- Module resolution: bundler with path alias support

## Conventions & Important Details

### CSS Modules
- Use `.module.css` files only
- Always import as default: `import styles from './styles/Component.module.css'`
- Apply classes: `className={styles.propertyName}`
- Colocate styles with components in `styles/` subfolder

### File Naming
- Components: PascalCase (`Home.tsx`, `NotFound.tsx`)
- Features: PascalCase folders matching component names
- CSS Modules: `ComponentName.module.css`

### Exports Pattern
- Each feature exports component as `export default ComponentName`
- Barrel export in `src/features/index.tsx`: `export { Home, NotFound }`
- App imports from barrel: `import { Home, NotFound } from '@/features'`

## Common Tasks

### Add a New Feature/Page
1. Create `src/features/MyFeature/` folder
2. Create `src/features/MyFeature/index.tsx` with React component
3. Create `src/features/MyFeature/styles/MyFeature.module.css`
4. Export from `src/features/index.tsx`: `export { default as MyFeature } from './MyFeature'`
5. Add route in `App.tsx`

### Update Styles
- Modify `src/features/ComponentName/styles/ComponentName.module.css`
- CSS modules prevent global namespace pollution
- Reference properties as `styles.className` in JSX

### Add Dependencies
Run `npm install <package>` and update imports using path alias `@/` for internal modules.

# How to contribute next?

As a dev, I want to move the minimal boot entry files set in /app

I need to keep in mind that /tsconfig.app.json needs to include both

1. pathfile to
   a routes.ts
   b entry.client.tsx or root.tsx
   ii in their
   iii /app or better
   iii /src
2. good configured/structured @react-router
   a /dev &
   b /vite

As a first recheck,

1. another root.tsx file will be recreated in /app
   &
2. entry.client.tsx will be renamed in myentry.client.tsx
   &
3. tsconfig.app.json will be rechecked for good
   including
   a "src" or "app"
   b "routes.ts" & where?
   c "root.tsx" or "entry.client.tsx & where ?

## To do

### when?

before 5pm CET

### how?

first step: rewrite entry.client.tsx in /app

#### reread

##### what?

1. https://vite.dev/config
2. https://reactrouter.com/upgrading/component-routes#5-shuffle-stuff-around
3. any unitary not listed source

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
    extends: [
        // Remove ...tseslint.configs.recommended and replace with this
        ...tseslint.configs.recommendedTypeChecked,
        // Alternatively, use this for stricter rules
        ...tseslint.configs.strictTypeChecked,
        // Optionally, add this for stylistic rules
        ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
        // other options...
        parserOptions: {
            project: ["./tsconfig.node.json", "./tsconfig.app.json"],
            tsconfigRootDir: import.meta.dirname,
        },
    },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
    plugins: {
        // Add the react-x and react-dom plugins
        "react-x": reactX,
        "react-dom": reactDom,
    },
    rules: {
        // other rules...
        // Enable its recommended typescript rules
        ...reactX.configs["recommended-typescript"].rules,
        ...reactDom.configs.recommended.rules,
    },
});
```

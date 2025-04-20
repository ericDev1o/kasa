# release definition of done is a SPA home page

## as per

https://www.figma.com/design/2BZEoBhyxt5lwZgRn0wGsL/Kasa_FR?node-id=0-1&p=f&t=eGJdR3MRCpZpQwsQ-0

### if you don't release quick try the copy-pasted

https://www.figma.com/design/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?node-id=0-1&p=f&t=eGJdR3MRCpZpQwsQ-0

#### to continue

##### please keep in mind that you must find which special caracter is different

## Current technical improvements

### custom vite boot

#### test changing entry point of App

##### test adapting

###### App.tsx

###### vite.config.ts

try the satisfies keyword after defineConfig.

Robustness/stability concern: due to mutliple directory and file name changes,
please consider that restarting from scratch might be more stable on current Operating System.

### lighten react-dom/client

#### test

##### react lite

##### preact

#### minify with

##### terser

##### uglifyJS

#### compress with

##### gzip

##### brotli

### style as per above mentioned Figma

#### with sass

##### each component

###### Banner

As an alternative to overlay please keep in mind to test:

1. shading
   in #banner itself

2. use of a utility style class

-   display: flex;
-   custom margin & object-fit

### route

#### simple component route

##### from technical /src

###### instead from a user featured component

#### prepare for router provider

##### in the same feature

##### or else in another feature for SPA home build

## vite used open source architecture is React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

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

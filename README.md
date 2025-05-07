# Kasa
Release definition of done is a home page.

## as per designed

https://www.figma.com/design/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?node-id=0-1&p=f&t=eGJdR3MRCpZpQwsQ-0

### current visual feature improvements

#### home page

##### banner

1. shorten assets names please
2. process them in a .env variable please

###### responsive mobile-first
left align h1

##### cards gallery
1. fill with demo image

###### responsive

1) desktop

you may grid them as previewed

2) mobile

flex them as per Figma design
1. display: flex
2. flex-direction: column

##### card

0. size it
1. "overlay" "text" to it as previewed or if you can't think about trying below to relase ealier

1) try
-   pseudo-element solution with ::before or ::after
-   shading in #banner
    &
-   custom
    display: flex;
    & maybe
    margin & object-fit

### current technical improvements

#### assets

##### try a config or "process.env" image file system for one-place one-shot image source change ease

0. create a config file including key-values

-   image feature name: image short name

1. create a file that given a feature name finds a

-   file name
    &
-   extension

#### lighten react-dom/client

No, this is not scheduled.

1. use it first before test please.

##### test

No Companion 
0. use it as documented please
1. react lite
2. preact

#### minify files

No Companion, 
0. fall back to p4 OhMyFood CLI minification please.
Then eventually try below third-party tools.
1. terser
2. uglifyJS

##### compress with

No, this is out of schedule. 

0. use { StrictMode } from "react" for example and all applicable light imports to achieve it. Then eventually use a compression tool
1. gzip
2) brotli

### vite used open source architecture is React + TypeScript + Vite

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

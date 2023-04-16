# Webpack + TypeScript + React + PostCSS + ESLint + Prettier + Jest + Cypress

WebpackとTypeScriptとReact、その他開発環境を組み合わせた場合のテンプレートになります。

## 依存関係

package.jsonにある通りです。

```terminal
npm init -y

# Webpack
npm install --save-dev webpack webpack-cli webpack-merge

# Development server
npm install --save-dev webpack-dev-server

# TypeScript
npm install --save-dev typescript ts-loader

# React
npm install --save-dev react react-dom
npm install --save-dev @types/react @types/react-dom

# CSS
npm install --save-dev style-loader css-loader

# PostCSS
npm install --save-dev postcss-loader postcss
npm install --save-dev autoprefixer # install whatever you want.

# ESLint
npm install --save-dev eslint eslint-loader
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
npm install --save-dev eslint-plugin-import eslint-plugin-jest
npm install --save-dev eslint-plugin-cypress

# Prettier
npm install --save-dev prettier
npm install --save-dev eslint-config-prettier eslint-plugin-prettier

# Jest
npm install --save-dev jest
npm install --save-dev ts-jest @types/jest
npm install --save-dev @testing-library/jest-dom @testing-library/react
npm install --save-dev @types/testing-library__jest-dom
npm install --save-dev jest-environment-jsdom

# Cypress
npm install --save-dev cypress
npm install --save-dev @types/cypress
npm install --save-dev @types/node
```

## ディレクトリ構成

```txt
develop-root/
  ├ src/
  │   ├ components/
  │   ├ App.tsx
  │   └ index.tsx
  ├ tests/
  │   ├ e2e/
  |   |   ├ plugins/
  |   |   ├ specs/
  |   |   └ support/
  │   └ unit/ 
  ├ public/
  │   └ index.html
  ├ .editorconfig
  ├ .eslintrc.js
  ├ .prettierrc
  ├ cypress.json
  ├ jest.config.js
  ├ tsconfig.json
  ├ postcss.config.js
  ├ webpack.common.js
  ├ webpack.dev.js
  └ webpack.prod.js
```

## 使い方

```terminal
# Development Builds
npm run build:dev

# Start-up of development servers
npm run serve

# Production Builds
npm run build

# Running Lint
npm run lint

# Running Lint for Tests
npm run lint:tests

# Running Formatter
npm run fmt

# Running Formatter for Tests
npm run fmt:tests

# Unit Test
npm run test:unit

# E2E Test
npm run test:e2e
```

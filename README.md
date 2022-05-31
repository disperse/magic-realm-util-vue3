# magic-realm-utils

## Number of ways 5 points can be divided among 5 groups

```
There are 6 possible values for 5 positions which 
gives us 6^5 = 7,776 possible combinations but many of those
are invalid.

Valid combinations are:
|*|*|*|*|*|
|**|*|*|*||
|***|*|*|||
|****|*||||
|*****|||||
etc.

To reframe: which of the 9 possible positions do we put the 5 *'s in?
or 9C5
```

```
x = points, y = categories
(x+y-1) C (x)
(5+5-1) C (5)
C(9,5)
9! / (5! X 4!) 
362,880 / 120 X 24
362,880 / 2880 = 126
```

## Notes

I couldn't get ag-grid working reactively with Vue 3, but PrimeVue's DataTable component was easy to get working.
Vuetify is not yet ready for Vue 3 development but the estimated launch date is "May 2022".

This template should help get you started developing with Vue 3 in Vite.

npm run dev loads in 165ms

```
Static assets:
   dist/assets/magic-realm-cover.252765fc.jpeg                     187.60 KiB
   dist/assets/MR-31-Complete.dfe083d9.pdf                         1756.38 KiB

Material design theme related 622.61 KiB: 
   Icons 460.84 KiB: 
   dist/assets/primeicons.c9eaf535.eot                             65.25 KiB
   dist/assets/primeicons.788dba0a.ttf                             65.08 KiB
   dist/assets/primeicons.feb68bf6.woff                            65.16 KiB
   dist/assets/primeicons.2ab98f70.svg                             265.35 KiB

   Fonts and color pallet 161.77 KiB:
   dist/assets/roboto-v20-latin-ext_latin-700.8d9364a0.woff2       22.19 KiB
   dist/assets/roboto-v20-latin-ext_latin-500.fa074f87.woff2       22.20 KiB
   dist/assets/roboto-v20-latin-ext_latin-regular.b86b128b.woff2   22.11 KiB
   dist/assets/roboto-v20-latin-ext_latin-regular.e70a908b.woff    28.36 KiB
   dist/assets/roboto-v20-latin-ext_latin-500.d092ad8e.woff        28.39 KiB
   dist/assets/roboto-v20-latin-ext_latin-700.e24c2752.woff        28.41 KiB
   dist/assets/color.473bc8ca.png                                  10.11 KiB
   
Code (with code splitting) 500.54 KiB (105.1 KiB gzip):
   Index 319.23 KiB (64.89 KiB gzip):
   dist/index.html                                                 0.42 KiB
   dist/assets/index.767607bf.js                                   104.34 KiB / gzip: 39.91 KiB
   dist/assets/index.65737da3.css                                  214.47 KiB / gzip: 24.56 KiB
   
   RulesView 0.53KiB (0.41 KiB gzip):
   dist/assets/RulesView.32faf62c.js                               0.48 KiB / gzip: 0.34 KiB
   dist/assets/RulesView.0a397d28.css                              0.05 KiB / gzip: 0.07 KiB
   
   ScoreView 180.78 KiB (39.8 KiB gzip):
   dist/assets/ScoreView.50dd354e.css                              0.16 KiB / gzip: 0.13 KiB
   dist/assets/ScoreView.8eb6a5c5.js                               180.62 KiB / gzip: 39.67 KiB
```

```
Normal use results:
  0.0 - 8.7% CPU
  170 - 206MB Memory
   
Torture test results:
   12.1 - 27.6% CPU
   199 - 252 MB Memory
   
Torture test results with auto-sorting:
   43.3 - 89.1% CPU
   683 - 1,607 MB Memory
```

```
Switching to a lighter-weight component library and writing things more funcationally helped
a lot with the CPU but not memory:

Torture test results:
  22.8 - 25.9%

```


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

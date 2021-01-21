# Test case for using Jest with ESM

This repo provides a test case for using Jest tests with Angular, using Jest ESM support, and jest-preset-angular ESM support.

This repository was created from https://github.com/johncrim/ng-jest-starter .

This starter project contains a single library (`ui-lib`) with submodules, and no angular apps. It contains both Karma tests (`*.karma-spec.ts`) and Jest tests (`*.spec.ts`), but no
Protractor or other e2e tests.

## Problem: Imports should be loaded from ESM modules, not from UMD modules

By default, Jest loads imports from UMD (which is correct before ESM was supported). Now, loading imports via UMD creates issues, b/c UMD packages are
ES5 and don't have all the ES2015+ features. When using ESM, imports from angular package format should be loaded from ESM files.

This repo demonstrates one of the problems with UMD/ES5, which occurs when importing from UMD files: Accessing subclass properties works in ES2015+, but is not supported in ES5 (https://github.com/microsoft/TypeScript/issues/338).

To see this:

```
git clone git@github.com:johncrim/repro-ivy-jest-preset-angular.git
git checkout bug/esm-jest

yarn
yarn build
yarn test
```

Note that the identical karma test succeeds (b/c it doesn't use UMD):
```
yarn build # if not already run
yarn karma:single
```

### Workaround

A workaround for this issue is to change the `moduleNameMapper` in `jest.config.js` to explicitly load non-UMD files. Comment this line out:

```
  '^@this/(.*)$': '<rootDir>/dist/$1'
```

And uncomment these 2 lines:

```
  // '^@this/([a-z\\-]+)/([a-z\\-]+)$': '<rootDir>/dist/$1/fesm2015/this-$1-$2.js',
  // '^@this/([a-z\\-]+)': '<rootDir>/dist/$1/fesm2015/this-$1.js'
```

then:

```
yarn test
```

I don't know if this is an issue when importing files from angular libs in `node_modules`. It would be nice if I could avoid using `moduleNameMapper` for the jest config.

## Debug a test

1. In VS Code, set breakpoints in a test file or in Angular code.
2. Type `Ctrl+Shift+D` to view the Debug pane, then ensure that "Jest All" or "Jest Current File" is selected in the launch configuration.
3. Hit the F5 key to start debugging.
4. Wait for your breakpoint(s) to be hit.

# Angular Jest starter project

This is an Angular starter project using Jest, with support for debugging Jest tests in 2 javascript debuggers: Visual Studio Code and Chrome Developer Tools.

This project was created using `ng new ng-jest`, then changes were made to use `[jest-preset-angular](https://github.com/thymikee/jest-preset-angular)`; and changes were made to enable VS Code debugging and Chrome debugging.

## Debugging Jest tests in Visual Studio Code

1. In VS Code, set breakpoints in a test file or in Angular code - for example, you can add a breakpoint in `app.component.spec.ts` and/or `app.component.ts`.
2. Type `Ctrl+Shift+D` to view the Debug pane, then ensure that "Debug Jest Tests" is selected in the launch configuration.
3. Hit the F5 key to start debugging.
4. Wait for your breakpoint(s) to be hit.

## Debugging Jest tests in Chrome


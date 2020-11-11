# Angular Jest Starter Project

This is an Angular starter project using Jest, with support for debugging Jest tests in 2 javascript debuggers: Visual Studio Code and Chrome Developer Tools.

This starter project contains a single library (`ui-lib`), and no angular apps. It contains both Karma tests (`*.karma-spec.ts`) and Jest tests (`*.spec.ts`), but no
Protractor or other e2e tests.

This project was created using `ng new ng-jest`, then changes were made to use [`jest-preset-angular`](https://github.com/thymikee/jest-preset-angular); and changes were made to enable VS Code debugging and Chrome debugging. The git history for this project should show a minimal set of changes for adding this developer utility.

## Debugging Jest tests in Visual Studio Code

1. In VS Code, set breakpoints in a test file or in Angular code - for example, you can add a breakpoint in `app.component.spec.ts` and/or `app.component.ts`.
2. Type `Ctrl+Shift+D` to view the Debug pane, then ensure that "Debug Jest Tests" is selected in the launch configuration.
3. Hit the F5 key to start debugging.
4. Wait for your breakpoint(s) to be hit.

## Debugging Jest tests in Chrome

1. Run `yarn test:debug` - this runs node in debug mode, waiting for a Javascript debugger to be attached before continuing.
2. Open a Chrome tab. Enter `chrome://inspect` in the URL bar.
3. Click the "Open dedicated DevTools for Node" link to attach the debugger.
4. After the debugger window opens, switch to the "Sources" tab and click "Add folder to workspace", then add your project folder. Chrome Dev Tools will ask for permissions to access the folder, which you'll need to grant - click the "Allow" button.
5. Browse to the typescript files for the test or Angular code that you want to debug, open the file(s), and add one or more breakpoints.
6. Hit the F8 key to tell the debugger to continue running.

In Chrome there can be a mismatch between the javascript files being debugged and the ts source files, due to what appears to be some sourcemap processing issues. I see breakpoints moving between when they're initially set and when the breakpoint is hit. Try typing `Ctrl+P` to list the files that are open in the javascript debugger - then try inspecting your breakpoints and adjust them as necessary.


## Troubleshooting Jest Debugging

Jest caches things aggressively, and while there seems to be some automatic cache invalidation it doesn't work in all cases - particularly changes to libraries or Jest configuration. Therefore, if changes don't seem to be picked up, run `yarn test --clearCache` to clear the Jest cache.

The other [Jest CLI parameters](https://jestjs.io/docs/en/cli.html) can be used when running `yarn test` - they are passed directly to jest. For example, you can use `yarn test --debug` to display information about your Jest configuration.

If your breakpoints aren't being hit, try adding a `debugger;` statement in the ts file where you want the debugger to break. This will trigger the debugger even if sourcemaps aren't working properly.

For other ideas, see [Jest's Troubleshooting page](https://jestjs.io/docs/en/22.0/troubleshooting).

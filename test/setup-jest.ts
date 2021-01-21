// Global entrypoint for Jest setup

import 'jest-preset-angular/setup-jest';
import './jestGlobalMocks';

// Fix: ReferenceError: exports is not defined
export { };

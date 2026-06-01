# Contributing to Obsidian Download Stats

Thank you for your interest in contributing to the Obsidian Download Stats component! To maintain high code quality and consistency with the Datacore ecosystem, please adhere to the following rules when developing new features or refactoring code.

## Guidelines

### 1. Arrow Functions Prohibition
*   **Do not use arrow functions (`() => {}`)** inside the React component and logic files. All functions must use standard function syntax:
    ```javascript
    function handleSomething() {
        // ...
    }
    ```
*   This applies to React event callbacks, hook dependencies, D3 data mappings, timers, and fetch promises.

### 2. Styling Standards
*   Styles must align with host themes, using host HSL color tokens to feel native.
*   The D3 canvas container must scale fluidly via debounced ResizeObservers.

# Contribution Guidelines — ObsidianDownloadStats

Welcome! This component is part of the BetoOS Datacore library. Please adhere to the following architectural standards.

## Codebase Architecture

The module utilizes a split-file structure to guarantee legibility, testability, and isolated execution scopes:

```text
ObsidianDownloadStats/
├── OBSIDIAN DOWNLOAD STATS.md # Obsidian entry point
├── METADATA.md            # Component manifest
├── README.md              # Documentation
├── CONTRIBUTION.md        # This file
├── LICENSE.md             # MIT license
├── data/
│   └── mcp_commands.json  # External watch/reload trigger
├── assets/
│   ├── image/
│   │   └── preview_1.webp # Static preview image
│   └── videos/
│   │   └── preview.gif    # Interactive walkthrough GIF
└── src/
    ├── index.jsx          # Event-driven code watch & reload daemon
    ├── App.jsx            # Coordinator component
    ├── components/
    │   └── MainComponent.jsx # Core D3 visualizer rendering charts and parsing APIs
    ├── styles/
    │   └── styles.jsx     # Scoped Javascript design token sheet
    └── utils/
        └── LoadScriptUpgrade.js # Vault-caching script loader utility
```

## Developer Standards

1. **Strict Zero Emojis**: All UI elements, buttons, headers, and control indicators must use Lucide vector icons (`<dc.Icon>`) or plain text. Emojis are reserved strictly for documentation.
2. **Path Safety**: Do not hardcode absolute path strings (e.g. `/Volumes/` or `file:///`). Always resolve vault directories dynamically.
3. **No-Polling Code Watcher**: The index bootstrapper registers an event listener with `app.vault.on("modify")` targeting files under `ObsidianDownloadStats/src/`. This triggers an instant reload of the component's React view when source code modifications are saved, bypassing background CPU polling entirely.
4. **HMR Command System**: To force a code reload or command watch directory path change remotely via MCP agents, write the reload payload to `data/mcp_commands.json`.
5. **Arrow Functions Prohibition**: Do not use arrow functions (`() => {}`) inside the React component and logic files. All functions must use standard function syntax. This applies to React event callbacks, hook dependencies, D3 data mappings, timers, and fetch promises.
6. **Styling Standards**: Styles must align with host themes, using host HSL color tokens to feel native. The D3 canvas container must scale fluidly via debounced ResizeObservers.

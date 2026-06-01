---
cssclasses:
  - bfv-container
---

```datacorejsx
const activeFile = dc.resolvePath("_RESOURCES/DATACORE/_DONE/OBSIDIAN DOWNLOAD STATS/src/index.jsx");
const folderPath = activeFile.substring(0, activeFile.lastIndexOf('/src'));
console.log("[ObsidianDownloadStats] Component folderPath absolute resolved as:", folderPath);

const { View } = await dc.require(activeFile);
return await View({ folderPath, dc });
```

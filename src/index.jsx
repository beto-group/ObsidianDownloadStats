async function View(props) {
    const { folderPath, dc } = props;
    const { useState, useEffect } = dc;

    try {
        // 1. Load Utilities & Scripts (Required for Three.js / D3 loading)
        const loadScriptModule = await dc.require(folderPath + '/src/utils/LoadScriptUpgrade.js');
        const loadScript = loadScriptModule.loadScript;

        // 2. Load Component Files
        const { styles } = await dc.require(folderPath + '/src/styles/styles.jsx');
        const { MainComponent } = await dc.require(folderPath + '/src/components/MainComponent.jsx');

        // 3. Wrapper Component
        function ViewComponent() {
            const [isFullTab, setIsFullTab] = useState(true); // default to full tab

            useEffect(function() {
                const statusBar = document.querySelector('.app-container .status-bar');
                if (isFullTab && statusBar) {
                    statusBar.style.display = 'none';
                } else if (statusBar) {
                    statusBar.style.display = '';
                }
                return function() {
                    if (statusBar) statusBar.style.display = '';
                };
            }, [isFullTab]);

            // Polling watch daemon linked to data/mcp_commands.json
            useEffect(function() {
                let active = true;
                async function pollCommands() {
                    try {
                        const commandPath = folderPath + '/data/mcp_commands.json';
                        const content = await dc.ops.read(commandPath);
                        if (!active) return;
                        if (content) {
                            const parsed = JSON.parse(content);
                            if (parsed && parsed.action === 'reload' && !parsed.executed) {
                                // Mark executed
                                parsed.executed = true;
                                parsed.timestamp = Date.now();
                                await dc.ops.write(commandPath, JSON.stringify(parsed, null, 2));
                                // Reload component
                                window.location.reload();
                            }
                        }
                    } catch (e) {
                        // Silently ignore or log command polling errors
                    }
                    if (active) {
                        setTimeout(pollCommands, 2000);
                    }
                }
                pollCommands();
                return function() {
                    active = false;
                };
            }, []);

            return (
                <MainComponent
                    dc={dc}
                    loadScript={loadScript}
                    isFullTab={isFullTab}
                    onToggleFullTab={function() { setIsFullTab(!isFullTab); }}
                    styles={styles}
                />
            );
        }

        return <ViewComponent />;
    } catch (e) {
        console.error('[Obsidian Download Stats] Critical Factory Error:', e);
        return (
            <div style={{ padding: '20px', backgroundColor: '#200', color: '#f88', border: '1px solid red', borderRadius: '8px' }}>
                <h3>Critical Initialization Error</h3>
                <p>{e.message}</p>
                <pre style={{ fontSize: '10px', opacity: 0.7 }}>{e.stack}</pre>
            </div>
        );
    }
}

return { View };

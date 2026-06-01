const styles = {
    fullTabWrapper: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        inset: '0',
        backgroundColor: 'var(--background-primary)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'monospace',
    },
    canvas: {
        width: '100%',
        height: '100%',
        display: 'block',
        flex: 1,
        position: 'relative'
    },
    header: {
        padding: "20px 30px",
        borderBottom: "1px solid var(--background-modifier-border)",
        backgroundColor: "var(--background-secondary-alt)",
        backdropFilter: "blur(10px)",
        zIndex: 10
    },
    title: {
        margin: 0,
        fontSize: "1.8rem",
        fontWeight: "300",
        letterSpacing: "4px",
        textTransform: "uppercase",
        color: "var(--text-normal)",
        textShadow: "0 0 15px var(--interactive-accent)"
    },
    subtitle: {
        margin: "8px 0 0 0",
        fontSize: "0.8rem",
        color: "var(--text-accent)",
        letterSpacing: "2px"
    },
    tooltip: {
        position: "absolute",
        textAlign: "center",
        width: "auto",
        minWidth: "120px",
        padding: "8px",
        font: "12px monospace",
        background: "var(--background-secondary)",
        border: "1px solid var(--background-modifier-border)",
        borderRadius: "4px",
        pointerEvents: "none",
        color: "var(--text-normal)",
        zIndex: 100,
        opacity: 0,
        backgroundColor: 'var(--background-secondary)',
        borderRadius: '5px',
        padding: '10px',
        fontFamily: 'monospace',
        fontSize: '12px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(4px)',
        zIndex: 10000 // Added very high z-index to ensure visibility
    },
    button: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 20,
        background: 'var(--background-modifier-form-field)',
        border: '1px solid var(--background-modifier-border)',
        borderRadius: '8px',
        padding: '8px',
        cursor: 'pointer',
        backdropFilter: 'blur(10px)',
        color: 'var(--text-normal)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: "all 0.2s"
    },
    scrollablePanel: `
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: var(--background-secondary);
        }
        ::-webkit-scrollbar-thumb {
            background: var(--background-modifier-border);
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: var(--text-muted);
        }
    `
};

return { styles };

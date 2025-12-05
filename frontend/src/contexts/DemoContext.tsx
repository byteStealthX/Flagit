import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface DemoContextType {
    isDemoMode: boolean;
    toggleDemoMode: () => void;
    setDemoMode: (enabled: boolean) => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export function DemoProvider({ children }: { children: ReactNode }) {
    // Check localStorage for saved preference, default to true for first-time visitors
    const [isDemoMode, setIsDemoMode] = useState<boolean>(() => {
        const saved = localStorage.getItem('trutrace-demo-mode');
        return saved !== null ? saved === 'true' : true; // Default to true
    });

    // Persist demo mode preference
    useEffect(() => {
        localStorage.setItem('trutrace-demo-mode', String(isDemoMode));
    }, [isDemoMode]);

    const toggleDemoMode = () => {
        setIsDemoMode(prev => !prev);
    };

    const setDemoMode = (enabled: boolean) => {
        setIsDemoMode(enabled);
    };

    return (
        <DemoContext.Provider value={{ isDemoMode, toggleDemoMode, setDemoMode }}>
            {children}
        </DemoContext.Provider>
    );
}

export function useDemoMode() {
    const context = useContext(DemoContext);
    if (context === undefined) {
        throw new Error('useDemoMode must be used within a DemoProvider');
    }
    return context;
}

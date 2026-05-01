import React, { createContext, useContext, useState, useCallback } from 'react';

export interface DesktopSettings {
    wallpaper: string | null; // URL or null for solid color
    wallpaperName: string;
    wallpaperMode: 'tile' | 'center' | 'stretch';
    backgroundColor: string;
    screenSaver: string;
    screenSaverTimeout: number;
    colorScheme: string;
    resolution: string;
}

const DEFAULT_SETTINGS: DesktopSettings = {
    wallpaper: null,
    wallpaperName: '(None)',
    wallpaperMode: 'center',
    backgroundColor: '#008080',
    screenSaver: '(None)',
    screenSaverTimeout: 1,
    colorScheme: 'Windows Standard',
    resolution: '1024 by 768',
};

interface DesktopSettingsContextType {
    settings: DesktopSettings;
    applySettings: (newSettings: Partial<DesktopSettings>) => void;
}

const DesktopSettingsContext = createContext<DesktopSettingsContextType>({
    settings: DEFAULT_SETTINGS,
    applySettings: () => {},
});

export const useDesktopSettings = () => useContext(DesktopSettingsContext);

export const DesktopSettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [settings, setSettings] = useState<DesktopSettings>(DEFAULT_SETTINGS);

    const applySettings = useCallback((newSettings: Partial<DesktopSettings>) => {
        setSettings(prev => ({ ...prev, ...newSettings }));
    }, []);

    return (
        <DesktopSettingsContext.Provider value={{ settings, applySettings }}>
            {children}
        </DesktopSettingsContext.Provider>
    );
};

export default DesktopSettingsContext;

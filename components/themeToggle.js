import * as React from 'react';
import { useState, useEffect } from "react";

import Switch from '@mui/material/Switch';


export default function ThemeToggle() {
    const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);
    const inactiveTheme = activeTheme === "light" ? "dark" : "light";

    // Switch Toggle Handler
    const handleSwitchToggle = () => {
        const isDarkModeEnabled = !darkModeEnabled;
        localStorage.setItem('darkModeEnabled', isDarkModeEnabled);
        setDarkModeEnabled(isDarkModeEnabled);
    };
    
    // Switch Toggle Storage
    useEffect(() => {
        const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
        setDarkModeEnabled(isDarkModeEnabled);
    }, []);
      
    //Dark/Light Theme Data Storage
    useEffect(() => {
        const savedTheme = window.localStorage.getItem("theme");
        savedTheme && setActiveTheme(savedTheme);
    }, []);
    
    useEffect(() => {
        document.body.dataset.theme = activeTheme;
        window.localStorage.setItem("theme", activeTheme);
    }, [activeTheme]);

    // Set Dark/Light Theme
    useEffect(() => {
        document.body.dataset.theme = activeTheme;
    }, [activeTheme]);

    return (
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
            <span style={{ marginRight: '8px' }}>Light</span>
            <Switch
                inputProps={{ 'aria-label': 'Change to Dark mode' }}
                onClick={() => setActiveTheme(inactiveTheme)}
                checked={darkModeEnabled}
                onChange={handleSwitchToggle}
            />
            <span style={{ marginLeft: '8px' }}>Dark</span>
        </div>
    )
}
import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import ResponsiveDrawer from "./drawer";
import Toolbar from '@mui/material/Toolbar';
import { Fancybox } from '@fancyapps/ui';

export default function Layout({ children, mode, toggleMode }) {
    
    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {
            // Fancybox options can be placed here
        });
    }, []); // Empty dependency array to ensure the effect runs only once

    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center'
      }}>
        <CssBaseline />

        {/* Responsive Drawer */}
        <ResponsiveDrawer />

        <Box
        sx={{
          width: '100%'
        }}
        >
            <Toolbar />
            {children}
        </Box>
      </Box>
    )
  }
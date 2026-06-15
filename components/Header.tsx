"use client";
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1F2D3D', py: 1 }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
            Tongston Technology Support Dashboard
          </Typography>
          <Typography variant="subtitle2" sx={{ color: '#F5C200', mt: 0.5 }}>
            Support requests and T-World delivery snapshot
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

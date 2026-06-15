"use client";
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1F2D3D' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
            Tongston Technology Support Dashboard
          </Typography>
          <Typography variant="caption" sx={{ color: '#F5C200' }}>
            Support requests and T-World delivery snapshot
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

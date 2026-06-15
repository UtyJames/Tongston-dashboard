"use client";
import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import Link from 'next/link';

interface TabsNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabsNav({ activeTab, onTabChange }: TabsNavProps) {
  const tabs = [
    { label: 'Support Requests', value: 'support' },
    { label: 'T-World Delivery Snapshot', value: 'tworld' },
  ];

  return (
    <Box
      sx={{
        borderBottom: '1px solid #e5e7eb',
        backgroundColor: '#ffffff',
        mt: 0,
      }}
    >
      <Tabs
        value={activeTab}
        onChange={(e, value) => onTabChange(value)}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={{
          '& .MuiTab-root': {
            textTransform: 'none',
            fontSize: '0.95rem',
            fontWeight: 600,
            color: '#6B7280',
            '&.Mui-selected': {
              color: '#1F2D3D',
            },
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#1F2D3D',
            height: 3,
          },
        }}
      >
        {tabs.map((tab) => (
          <Tab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </Tabs>
    </Box>
  );
}

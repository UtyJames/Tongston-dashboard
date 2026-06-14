"use client";
import React from 'react';
import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Paper,
} from '@mui/material';

interface FilterBarProps {
    selectedCategory: string;
    selectedPriority: string;
    selectedStatus: string;
    onCategoryChange: (category: string) => void;
    onPriorityChange: (priority: string) => void;
    onStatusChange: (status: string) => void;
}

const categories = [
    'All Categories',
    'Onboarding',
    'Offboarding',
    'Security',
    'GitHub Access',
    'Subscription',
    'Website Update',
    'Website Issue',
    'Hardware',
    'Support Ticket',
    'T-World Delivery',
];

const priorities = ['All Priorities', 'High', 'Medium', 'Low'];
const statuses = ['All Statuses', 'To Do', 'In Progress', 'Done', 'Pending Approval', 'At Risk'];

export default function FilterBar({
    selectedCategory,
    selectedPriority,
    selectedStatus,
    onCategoryChange,
    onPriorityChange,
    onStatusChange,
}: FilterBarProps) {
    return (
        <Paper
            sx={{
                padding: '16px 24px',
                marginTop: '24px',
                borderRadius: 2,
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: 2,
            }}
        >
            <FormControl fullWidth>
                <InputLabel sx={{ color: '#374151' }}>Category</InputLabel>
                <Select
                    value={selectedCategory}
                    label="Category"
                    onChange={(e) => onCategoryChange(e.target.value)}
                    sx={{
                        backgroundColor: '#ffffff',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#d1d5db',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#9ca3af',
                        },
                    }}
                >
                    {categories.map((cat) => (
                        <MenuItem key={cat} value={cat}>
                            {cat}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel sx={{ color: '#374151' }}>Priority</InputLabel>
                <Select
                    value={selectedPriority}
                    label="Priority"
                    onChange={(e) => onPriorityChange(e.target.value)}
                    sx={{
                        backgroundColor: '#ffffff',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#d1d5db',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#9ca3af',
                        },
                    }}
                >
                    {priorities.map((pri) => (
                        <MenuItem key={pri} value={pri}>
                            {pri}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel sx={{ color: '#374151' }}>Status</InputLabel>
                <Select
                    value={selectedStatus}
                    label="Status"
                    onChange={(e) => onStatusChange(e.target.value)}
                    sx={{
                        backgroundColor: '#ffffff',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#d1d5db',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#9ca3af',
                        },
                    }}
                >
                    {statuses.map((sta) => (
                        <MenuItem key={sta} value={sta}>
                            {sta}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Paper>
    );
}

"use client";
import React from 'react';
import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Paper,
    Button,
} from '@mui/material';

interface FilterBarProps {
    selectedCategory: string;
    selectedPriority: string;
    selectedStatus: string;
    onCategoryChange: (category: string) => void;
    onPriorityChange: (priority: string) => void;
    onStatusChange: (status: string) => void;
    onClearFilters: () => void;
    onCreateNew?: () => void;
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
    onClearFilters,
    onCreateNew,
}: FilterBarProps) {
    return (
        <Paper
            sx={{
                padding: '16px 24px',
                marginTop: '24px',
                borderRadius: 2,
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
            }}
        >
            {/* Filters on the left */}
            <Box sx={{ display: 'flex', gap: 1.5, flex: 1 }}>
                <FormControl sx={{ minWidth: 180 }}>
                    <InputLabel sx={{ color: '#374151', fontSize: '0.875rem' }}>Category</InputLabel>
                    <Select
                        value={selectedCategory}
                        label="Category"
                        onChange={(e) => onCategoryChange(e.target.value)}
                        size="small"
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

                <FormControl sx={{ minWidth: 160 }}>
                    <InputLabel sx={{ color: '#374151', fontSize: '0.875rem' }}>Priority</InputLabel>
                    <Select
                        value={selectedPriority}
                        label="Priority"
                        onChange={(e) => onPriorityChange(e.target.value)}
                        size="small"
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

                <FormControl sx={{ minWidth: 160 }}>
                    <InputLabel sx={{ color: '#374151', fontSize: '0.875rem' }}>Status</InputLabel>
                    <Select
                        value={selectedStatus}
                        label="Status"
                        onChange={(e) => onStatusChange(e.target.value)}
                        size="small"
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
            </Box>

            {/* Action buttons on the right */}
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                    variant="outlined"
                    onClick={onClearFilters}
                    sx={{
                        color: '#6B7280',
                        borderColor: '#d1d5db',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        textTransform: 'none',
                        '&:hover': {
                            borderColor: '#9ca3af',
                            backgroundColor: '#f9fafb',
                        },
                    }}
                >
                    Clear Filters
                </Button>
                {onCreateNew && (
                    <Button
                        variant="contained"
                        onClick={onCreateNew}
                        sx={{
                            backgroundColor: '#1F2D3D',
                            color: 'white',
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: '#0f1720',
                            },
                        }}
                    >
                        Create New
                    </Button>
                )}
            </Box>
        </Paper>
    );
}

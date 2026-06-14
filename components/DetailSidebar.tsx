"use client";
import React, { useState } from 'react';
import {
    Drawer,
    Box,
    Typography,
    Chip,
    Divider,
    Button,
    Select,
    MenuItem,
    FormControl,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Request } from './RequestTable';

interface DetailSidebarProps {
    request: Request | null;
    isOpen: boolean;
    onClose: () => void;
    onStatusChange: (requestId: string, newStatus: string) => void;
}

const statusOptions = ['To Do', 'In Progress', 'Done', 'Pending Approval', 'At Risk'];

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Done':
            return '#10B981';
        case 'In Progress':
            return '#F59E0B';
        case 'To Do':
            return '#6B7280';
        case 'Pending Approval':
            return '#8B5CF6';
        case 'At Risk':
            return '#EF4444';
        default:
            return '#6B7280';
    }
};

const getRiskColor = (risk: string) => {
    switch (risk) {
        case 'High':
            return '#EF4444';
        case 'Medium':
            return '#F97316';
        case 'Low':
            return '#10B981';
        default:
            return '#6B7280';
    }
};

const getPriorityColor = (priority: string) => {
    switch (priority) {
        case 'High':
            return '#EF4444';
        case 'Medium':
            return '#F97316';
        case 'Low':
            return '#3B82F6';
        default:
            return '#6B7280';
    }
};

export default function DetailSidebar({ request, isOpen, onClose, onStatusChange }: DetailSidebarProps) {
    const [newStatus, setNewStatus] = useState(request?.status || '');

    if (!request) return null;

    const handleStatusChange = () => {
        onStatusChange(request.id, newStatus);
    };

    return (
        <Drawer
            anchor="right"
            open={isOpen}
            onClose={onClose}
            PaperProps={{
                sx: {
                    width: { xs: '100%', sm: 400 },
                    backgroundColor: '#ffffff',
                    borderLeft: '1px solid #e5e7eb',
                },
            }}
        >
            {request && (
                <Box sx={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Header */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#111827' }}>
                            {request.id}
                        </Typography>
                        <button
                            onClick={onClose}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '4px',
                                color: '#6B7280',
                            }}
                        >
                            <CloseIcon />
                        </button>
                    </Box>

                    {/* Title */}
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
                        {request.title}
                    </Typography>


                    {/* Description */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="body2" sx={{ color: '#6B7280', fontWeight: 600, mb: 1 }}>
                            DESCRIPTION
                        </Typography>
                        <Typography sx={{ color: '#374151', fontSize: '0.875rem', lineHeight: 1.6 }}>
                            {request.description}
                        </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />

                    {/* Key Info */}
                    <Box sx={{ mb: 3, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                            <Typography variant="body2" sx={{ color: '#6B7280', fontWeight: 600, fontSize: '0.75rem' }}>
                                CATEGORY
                            </Typography>
                            <Typography sx={{ color: '#374151', fontSize: '0.875rem' }}>{request.category}</Typography>
                        </Box>

                        <Divider orientation="vertical" sx={{ borderColor: '#e5e7eb' }} />

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                            <Typography variant="body2" sx={{ color: '#6B7280', fontWeight: 600, fontSize: '0.75rem' }}>
                                PRIORITY
                            </Typography>
                            <Chip
                                label={request.priority}
                                size="small"
                                sx={{
                                    backgroundColor: getPriorityColor(request.priority),
                                    color: 'white',
                                    fontWeight: 600,
                                    width: 'fit-content',
                                }}
                            />
                        </Box>

                        <Divider orientation="vertical" sx={{ borderColor: '#e5e7eb' }} />

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                            <Typography variant="body2" sx={{ color: '#6B7280', fontWeight: 600, fontSize: '0.75rem' }}>
                                RISK LEVEL
                            </Typography>
                            <Chip
                                label={request.riskLevel}
                                size="small"
                                sx={{
                                    backgroundColor: getRiskColor(request.riskLevel),
                                    color: 'white',
                                    fontWeight: 600,
                                    width: 'fit-content',
                                }}
                            />
                        </Box>

                        <Divider orientation="vertical" sx={{ borderColor: '#e5e7eb' }} />

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                            <Typography variant="body2" sx={{ color: '#6B7280', fontWeight: 600, fontSize: '0.75rem' }}>
                                OWNER
                            </Typography>
                            <Typography sx={{ color: '#374151', fontSize: '0.875rem' }}>{request.owner}</Typography>
                        </Box>

                        <Divider orientation="vertical" sx={{ borderColor: '#e5e7eb' }} />

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                            <Typography variant="body2" sx={{ color: '#6B7280', fontWeight: 600, fontSize: '0.75rem' }}>
                                DUE DATE
                            </Typography>
                            <Typography sx={{ color: '#374151', fontSize: '0.875rem' }}>{request.dueDate}</Typography>
                        </Box>
                    </Box>

                    <Divider sx={{ my: 2 }} />



                    <Divider sx={{ my: 2 }} />

                    {/* Approval Needed */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="body2" sx={{ color: '#6B7280', fontWeight: 600, mb: 1 }}>
                            APPROVAL NEEDED
                        </Typography>
                        <Typography sx={{ color: '#374151', fontSize: '0.875rem' }}>
                            {request.approvalNeeded}
                        </Typography>
                    </Box>

                    {/* Evidence Required */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="body2" sx={{ color: '#6B7280', fontWeight: 600, mb: 1 }}>
                            EVIDENCE REQUIRED
                        </Typography>
                        <Typography sx={{ color: '#374151', fontSize: '0.875rem' }}>
                            {request.evidenceRequired}
                        </Typography>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    {/* Status Change Section */}
                    <Box sx={{ flexGrow: 1 }} />
                    <Box>
                        <Typography variant="body2" sx={{ color: '#6B7280', fontWeight: 600, mb: 1 }}>
                            CHANGE STATUS
                        </Typography>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <Select
                                value={newStatus || request.status}
                                onChange={(e) => setNewStatus(e.target.value)}
                                sx={{
                                    backgroundColor: '#ffffff',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#d1d5db',
                                    },
                                }}
                            >
                                {statusOptions.map((status) => (
                                    <MenuItem key={status} value={status}>
                                        {status}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={handleStatusChange}
                            sx={{
                                backgroundColor: '#1F2D3D',
                                color: 'white',
                                fontWeight: 600,
                                '&:hover': {
                                    backgroundColor: '#162038',
                                },
                            }}
                        >
                            Update Status
                        </Button>
                    </Box>
                </Box>
            )}
        </Drawer>
    );
}

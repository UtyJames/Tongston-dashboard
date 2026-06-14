"use client";
import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    IconButton,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export type Request = {
    id: string;
    title: string;
    category: string;
    priority: string;
    status: string;
    owner: string;
    dueDate: string;
    riskLevel: string;
    description: string;
    approvalNeeded: string;
    evidenceRequired: string;
};

interface RequestTableProps {
    requests: Request[];
    filteredRequests: Request[];
    onSelectRequest: (request: Request) => void;
}

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

export default function RequestTable({ requests, filteredRequests, onSelectRequest }: RequestTableProps) {
    const displayRequests = filteredRequests.length > 0 ? filteredRequests : requests;

    return (
        <TableContainer component={Paper} sx={{ mt: 4, borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
            <Table sx={{ backgroundColor: '#ffffff' }}>
                <TableHead>
                    <TableRow sx={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                        <TableCell sx={{ fontWeight: 600, color: '#374151' }}>ID</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Title</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Category</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Priority</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Status</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Owner</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Due Date</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Risk</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#374151' }}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {displayRequests.map((request) => (
                        <TableRow
                            key={request.id}
                            sx={{
                                borderBottom: '1px solid #e5e7eb',
                                '&:hover': {
                                    backgroundColor: '#f3f4f6',
                                },
                            }}
                        >
                            <TableCell sx={{ fontWeight: 600, color: '#111827' }}>{request.id}</TableCell>
                            <TableCell sx={{ color: '#374151', maxWidth: 200 }}>
                                <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {request.title}
                                </div>
                            </TableCell>
                            <TableCell sx={{ color: '#374151' }}>{request.category}</TableCell>
                            <TableCell>
                                <Chip
                                    label={request.priority}
                                    size="small"
                                    sx={{
                                        backgroundColor: getPriorityColor(request.priority),
                                        color: 'white',
                                        fontWeight: 600,
                                        fontSize: '0.75rem',
                                    }}
                                />
                            </TableCell>
                            <TableCell>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Chip
                                        label={request.status}
                                        size="small"
                                        onClick={() => onSelectRequest(request)}
                                        sx={{
                                            backgroundColor: getStatusColor(request.status),
                                            color: 'white',
                                            fontWeight: 600,
                                            fontSize: '0.75rem',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                opacity: 0.8,
                                            },
                                        }}
                                    />
                                </div>
                            </TableCell>
                            <TableCell sx={{ color: '#374151', fontSize: '0.875rem' }}>{request.owner}</TableCell>
                            <TableCell sx={{ color: '#374151', fontSize: '0.875rem' }}>{request.dueDate}</TableCell>
                            <TableCell>
                                <Chip
                                    label={request.riskLevel}
                                    size="small"
                                    sx={{
                                        backgroundColor: getRiskColor(request.riskLevel),
                                        color: 'white',
                                        fontWeight: 600,
                                        fontSize: '0.75rem',
                                    }}
                                />
                            </TableCell>
                            <TableCell>
                                <IconButton
                                    size="small"
                                    onClick={() => onSelectRequest(request)}
                                    sx={{ color: '#1F2D3D' }}
                                >
                                    <ChevronRightIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

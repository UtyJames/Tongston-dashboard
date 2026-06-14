"use client";
import React from 'react';
import { Box, Typography, Chip, Paper, Grid } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

interface TWorldItem {
    id: string;
    title: string;
    status: string;
    isBlocking: boolean;
    linkedItem?: string;
    checks?: { passed: number; failed: number };
}

const TWorldSection = () => {
    const issues: TWorldItem[] = [
        {
            id: '#112',
            title: 'Files & Docs approved-file filter',
            status: 'In Progress',
            isBlocking: false,
            linkedItem: 'PR #118',
        },
        {
            id: '#113',
            title: 'Asset picker frontend connection',
            status: 'To Do',
            isBlocking: true,
            linkedItem: undefined,
        },
        {
            id: '#116',
            title: 'QA checklist',
            status: 'To Do',
            isBlocking: true,
            linkedItem: undefined,
        },
        {
            id: '#117',
            title: 'Release note and handover note',
            status: 'To Do',
            isBlocking: true,
            linkedItem: undefined,
        },
    ];

    const prs: TWorldItem[] = [
        {
            id: 'PR #118',
            title: 'Backend file filtering endpoint',
            status: 'Open',
            isBlocking: false,
            checks: { passed: 2, failed: 1 },
        },
        {
            id: 'PR #119',
            title: 'Asset picker UI connection',
            status: 'Draft',
            isBlocking: true,
            checks: { passed: 0, failed: 0 },
        },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'In Progress':
                return '#F59E0B';
            case 'To Do':
                return '#6B7280';
            case 'Open':
                return '#10B981';
            case 'Draft':
                return '#8B5CF6';
            default:
                return '#6B7280';
        }
    };

    return (
        <Box sx={{ mt: 6 }}>
            {/* Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827' }}>
                    T-World Release Snapshot
                </Typography>
                <Chip
                    icon={<WarningIcon />}
                    label="4 Blocking Items"
                    sx={{
                        backgroundColor: '#FEE2E2',
                        color: '#DC2626',
                        fontWeight: 600,
                    }}
                />
            </Box>

            <Grid container spacing={3}>
                {/* Issues Section */}
                <Grid item xs={12} md={6}>
                    <Paper
                        sx={{
                            padding: '24px',
                            borderRadius: 2,
                            boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                        }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
                            Issues
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {issues.map((issue) => (
                                <Box
                                    key={issue.id}
                                    sx={{
                                        padding: '12px',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: 1,
                                        backgroundColor: issue.isBlocking ? '#FEF2F2' : '#ffffff',
                                    }}
                                >
                                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start', mb: 1 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 700, color: '#1F2D3D' }}>
                                            {issue.id}
                                        </Typography>
                                        {issue.isBlocking && (
                                            <WarningIcon sx={{ width: 16, height: 16, color: '#EF4444' }} />
                                        )}
                                    </Box>
                                    <Typography sx={{ color: '#374151', fontSize: '0.875rem', mb: 1 }}>
                                        {issue.title}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
                                        <Chip
                                            label={issue.status}
                                            size="small"
                                            sx={{
                                                backgroundColor: getStatusColor(issue.status),
                                                color: 'white',
                                                fontWeight: 600,
                                                fontSize: '0.75rem',
                                            }}
                                        />
                                        {issue.linkedItem && (
                                            <Chip
                                                label={issue.linkedItem}
                                                size="small"
                                                variant="outlined"
                                                sx={{
                                                    borderColor: '#D1D5DB',
                                                    color: '#374151',
                                                    fontSize: '0.75rem',
                                                }}
                                            />
                                        )}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Paper>
                </Grid>

                {/* PRs Section */}
                <Grid item xs={12} md={6}>
                    <Paper
                        sx={{
                            padding: '24px',
                            borderRadius: 2,
                            boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                        }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#111827', mb: 2 }}>
                            Pull Requests
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {prs.map((pr) => (
                                <Box
                                    key={pr.id}
                                    sx={{
                                        padding: '12px',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: 1,
                                        backgroundColor: pr.isBlocking ? '#F5F3FF' : '#ffffff',
                                    }}
                                >
                                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start', mb: 1 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 700, color: '#1F2D3D' }}>
                                            {pr.id}
                                        </Typography>
                                        {pr.isBlocking && (
                                            <WarningIcon sx={{ width: 16, height: 16, color: '#8B5CF6' }} />
                                        )}
                                    </Box>
                                    <Typography sx={{ color: '#374151', fontSize: '0.875rem', mb: 1 }}>
                                        {pr.title}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
                                        <Chip
                                            label={pr.status}
                                            size="small"
                                            sx={{
                                                backgroundColor: getStatusColor(pr.status),
                                                color: 'white',
                                                fontWeight: 600,
                                                fontSize: '0.75rem',
                                            }}
                                        />
                                        {pr.checks && (
                                            <Typography sx={{ color: '#6B7280', fontSize: '0.75rem', fontWeight: 600 }}>
                                                ✓ {pr.checks.passed} {pr.checks.failed > 0 && `✗ ${pr.checks.failed}`}
                                            </Typography>
                                        )}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TWorldSection;

"use client";
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from '@mui/material';
import { Request } from './RequestTable';

interface CreateRequestModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: (request: Request) => void;
}

const categories = [
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

const priorities = ['High', 'Medium', 'Low'];
const riskLevels = ['High', 'Medium', 'Low'];

export default function CreateRequestModal({ open, onClose, onCreate }: CreateRequestModalProps) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [priority, setPriority] = useState('Medium');
  const [owner, setOwner] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [riskLevel, setRiskLevel] = useState('Medium');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRequest: Request = {
      id: `REQ-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
      title,
      category,
      priority,
      status: 'To Do',
      owner,
      dueDate,
      riskLevel,
      description,
      approvalNeeded: '',
      evidenceRequired: '',
    };
    onCreate(newRequest);
    
    // Reset form
    setTitle('');
    setCategory(categories[0]);
    setPriority('Medium');
    setOwner('');
    setDueDate('');
    setRiskLevel('Medium');
    setDescription('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle sx={{ fontWeight: 'bold' }}>Create New Support Request</DialogTitle>
        <DialogContent dividers>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
            <TextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              fullWidth
              size="small"
            />
            
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
              <FormControl size="small" fullWidth>
                <InputLabel>Category</InputLabel>
                <Select value={category} label="Category" onChange={(e) => setCategory(e.target.value as string)}>
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl size="small" fullWidth>
                <InputLabel>Priority</InputLabel>
                <Select value={priority} label="Priority" onChange={(e) => setPriority(e.target.value as string)}>
                  {priorities.map((pri) => (
                    <MenuItem key={pri} value={pri}>{pri}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
              <TextField
                label="Owner"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                required
                fullWidth
                size="small"
              />
              <TextField
                label="Due Date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
                fullWidth
                size="small"
                placeholder="e.g., 24 hours, Today"
              />
            </Box>

            <FormControl size="small" fullWidth>
              <InputLabel>Risk Level</InputLabel>
              <Select value={riskLevel} label="Risk Level" onChange={(e) => setRiskLevel(e.target.value as string)}>
                {riskLevels.map((risk) => (
                  <MenuItem key={risk} value={risk}>{risk}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              multiline
              rows={4}
              fullWidth
              size="small"
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={onClose} color="inherit">Cancel</Button>
          <Button type="submit" variant="contained" sx={{ backgroundColor: '#1F2D3D', '&:hover': { backgroundColor: '#0f1720' } }}>
            Create Request
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

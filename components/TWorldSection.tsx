"use client";
import React from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import LinkIcon from '@mui/icons-material/Link';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const TWorldSection = () => {
  return (
    <div className="p-8 w-full font-sans relative pb-24 bg-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-1">Delivery Snapshot</h1>
          <p className="text-gray-500 text-sm">Live overview of active engineering workstream.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors bg-white shadow-sm">
            <FilterListIcon className="w-4 h-4" /> Filter View
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md text-sm font-semibold hover:bg-gray-800 transition-colors shadow-sm">
            <AddIcon className="w-4 h-4" /> New Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Active Issues Column */}
        <div className="border border-gray-300 bg-white rounded-sm shadow-sm">
          {/* Column Header */}
          <div className="flex justify-between items-center p-4 pb-3 border-b border-gray-300">
            <div className="flex items-center gap-2 text-gray-900">
              <BugReportOutlinedIcon className="w-6 h-6" />
              <h2 className="font-bold text-lg">Active Issues</h2>
            </div>
            <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2.5 py-1 rounded">4 TOTAL</span>
          </div>

          {/* Cards Container */}
          <div className="p-4 flex flex-col gap-4">
            {/* Card 1 */}
            <div className="border border-gray-300 rounded-sm p-4 bg-white shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-xs font-bold">#112</span>
                  <span className="bg-gray-200 text-gray-700 text-[10px] uppercase font-bold px-1.5 py-0.5 rounded">FOLLOW-UP</span>
                </div>
                <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-0.5 rounded">In Progress</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-[15px]">Files & Docs approved-file filter</h3>
              <div className="flex items-center gap-4 text-[13px] text-gray-500 font-medium">
                <div className="flex items-center gap-1">
                  <LinkIcon sx={{ fontSize: 16 }} /> Linked to PR #118
                </div>
                <div className="flex items-center gap-1">
                  <AccessTimeIcon sx={{ fontSize: 16 }} /> Updated 2h ago
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-red-300 rounded-sm p-4 bg-white shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-xs font-bold">#113</span>
                  <span className="bg-red-700 text-white text-[10px] uppercase font-bold px-1.5 py-0.5 rounded flex items-center gap-1 tracking-wide">
                    <CancelIcon sx={{ fontSize: 12 }} className="text-white" /> RELEASE BLOCKING
                  </span>
                </div>
                <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2 py-0.5 rounded">To Do</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-[15px]">Asset picker frontend connection</h3>
              <div className="flex items-center gap-1 text-[13px] text-gray-500 font-medium">
                <LinkOffIcon sx={{ fontSize: 16 }} /> No linked PR
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-300 rounded-sm p-4 bg-white shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-xs font-bold">#116</span>
                </div>
                <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2 py-0.5 rounded">To Do</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-[15px]">QA checklist</h3>
              <div className="flex items-center gap-1 text-[13px] text-gray-500 font-medium">
                <ArticleOutlinedIcon sx={{ fontSize: 16 }} /> Documentation Task
              </div>
            </div>

            {/* Card 4 */}
            <div className="border border-gray-300 rounded-sm p-4 bg-white shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-xs font-bold">#117</span>
                </div>
                <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2 py-0.5 rounded">To Do</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-[15px]">Release note and handover note</h3>
              <div className="flex items-center gap-1 text-[13px] text-gray-500 font-medium">
                <ArticleOutlinedIcon sx={{ fontSize: 16 }} /> Internal Release
              </div>
            </div>
          </div>
        </div>

        {/* Right Columns */}
        <div className="flex flex-col gap-6">
          {/* Pull Requests Section */}
          <div className="border border-gray-300 bg-white rounded-sm shadow-sm">
            <div className="flex justify-between items-center p-4 pb-3 border-b border-gray-300">
              <div className="flex items-center gap-2 text-gray-900">
                <CallSplitIcon className="w-5 h-5" />
                <h2 className="font-bold text-lg">Pull Requests</h2>
              </div>
              <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2.5 py-1 rounded">2 OPEN</span>
            </div>

            <div className="p-4 flex flex-col gap-4">
              {/* PR Card 1 */}
              <div className="border border-red-300 rounded-sm p-4 bg-white shadow-sm relative">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-xs font-bold">#118</span>
                    <span className="bg-red-700 text-white text-[10px] uppercase font-bold px-1.5 py-0.5 rounded tracking-wide">RELEASE BLOCKING</span>
                  </div>
                  <span className="text-emerald-600 text-[11px] font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Open
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-[15px]">Backend file filtering endpoint</h3>
                
                <div className="bg-[#f8f9fa] border border-dashed border-gray-300 rounded-sm p-2.5 flex justify-between items-center mb-4">
                  <div className="flex items-center gap-5 text-xs font-bold">
                    <span className="flex items-center gap-1.5 text-red-700"><CancelIcon sx={{ fontSize: 14 }} className="text-red-600"/> 1 FAILED</span>
                    <span className="flex items-center gap-1.5 text-emerald-700"><CheckCircleIcon sx={{ fontSize: 14 }} className="text-emerald-500"/> 2 PASSED</span>
                  </div>
                  <span className="text-xs font-bold text-gray-700 cursor-pointer hover:underline">Details</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <AvatarGroup max={3} sx={{ '& .MuiAvatar-root': { width: 24, height: 24, fontSize: '0.75rem', border: '1px solid white' } }}>
                    <Avatar alt="User 1" sx={{ width: 24, height: 24, bgcolor: '#1e293b' }} />
                    <Avatar alt="User 2" sx={{ width: 24, height: 24, bgcolor: '#334155' }} />
                  </AvatarGroup>
                  <span className="text-[13px] text-gray-500 font-medium">Waiting on reviews</span>
                </div>
              </div>

              {/* PR Card 2 */}
              <div className="border border-gray-300 rounded-sm p-4 bg-white shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-xs font-bold">#119</span>
                    <span className="bg-gray-200 text-gray-700 text-[10px] uppercase font-bold px-1.5 py-0.5 rounded">DRAFT</span>
                  </div>
                  <span className="text-gray-500 text-[11px] font-bold">In Review</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-[15px]">Asset picker UI connection</h3>
                
                <div className="bg-[#fffbeb] border border-yellow-300 rounded-sm p-3 flex gap-2">
                  <InfoOutlinedIcon sx={{ fontSize: 18 }} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className="text-[13px] text-yellow-800 font-medium leading-relaxed">
                    Note: Still using mock data. Needs real API integration from PR #118.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pipeline Velocity Section */}
          <div className="border border-gray-300 bg-white rounded-sm shadow-sm p-5">
            <h2 className="font-bold text-gray-900 mb-5 text-[15px]">Pipeline Velocity</h2>
            
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-[13px] font-bold mb-2">
                  <span className="text-gray-700">Stability Score</span>
                  <span className="text-gray-900">82%</span>
                </div>
                <div className="w-full bg-gray-200 h-1.5">
                  <div className="bg-emerald-500 h-1.5" style={{ width: '82%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[13px] font-bold mb-2">
                  <span className="text-gray-700">Build Coverage</span>
                  <span className="text-gray-900">94%</span>
                </div>
                <div className="w-full bg-gray-200 h-1.5">
                  <div className="bg-emerald-500 h-1.5" style={{ width: '94%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-black text-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
        <AddIcon />
      </button>
    </div>
  );
};

export default TWorldSection;

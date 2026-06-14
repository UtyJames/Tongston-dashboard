"use client";
import React, { useEffect, useState } from 'react';

type Request = {
    id: string;
    category: string;
    priority: string;
    status: string;
    riskLevel?: string;
    title?: string;
};

function StatCard({ title, value, accent }: { title: string; value: number | string; accent?: string }) {
    const accentColor = accent === '#F5C200' ? 'from-yellow-400 to-yellow-500' :
        accent === '#EF4444' ? 'from-red-400 to-red-500' :
            accent === '#F97316' ? 'from-orange-400 to-orange-500' :
                'from-blue-400 to-blue-500';

    return (
        <div className="bg-white rounded-lg border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-200">
            <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                    <div className={`w-1 h-12 rounded-full bg-gradient-to-b ${accentColor}`}></div>
                </div>
                <h3 className="text-4xl font-bold tracking-tight" style={{ color: accent ?? '#111827' }}>
                    {value}
                </h3>
                <p className="text-xs text-gray-400 mt-2">Last 7 days</p>
            </div>
        </div>
    );
}

export default function SummaryCards() {
    const [data, setData] = useState<Request[]>([]);

    useEffect(() => {
        let mounted = true;
        fetch('/api/requests')
            .then((r) => r.json())
            .then((json) => {
                if (mounted) setData(json);
            })
            .catch(() => { });
        return () => {
            mounted = false;
        };
    }, []);

    const totalOpen = data.filter((d) => d.status && d.status.toLowerCase() !== 'done').length;
    const highPriority = data.filter((d) => d.priority === 'High').length;
    const securityRisks = data.filter((d) =>
        (d.category && d.category.toLowerCase().includes('security')) ||
        (d.category && d.category.toLowerCase().includes('access')) ||
        (d.riskLevel && d.riskLevel.toLowerCase() === 'high')
    ).length;
    const tworldBlockers = data.filter((d) => (d.category && d.category === 'T-World Delivery') || (d.title && d.title.includes('T-World'))).length;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <StatCard title="Total Open Requests" value={totalOpen} accent="#F5C200" />
            <StatCard title="High Priority Items" value={highPriority} accent="#EF4444" />
            <StatCard title="Security / Access Risks" value={securityRisks} accent="#F97316" />
            <StatCard title="T-World Release Blockers" value={tworldBlockers} accent="#60A5FA" />
        </div>
    );
}

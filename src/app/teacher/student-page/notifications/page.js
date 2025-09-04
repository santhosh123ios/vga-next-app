'use client';

import { useSearchParams } from 'next/navigation';

export default function NotificationsPage() {
    const searchParams = useSearchParams();
    const studentId = searchParams.get('studentId');

    const activities = [
        { status: 'On Hold', date: '12/28/2025', activity: 'Complete Mission 1', type: 'POD TIME', subject: 'English', sub: 'Spoken Words', dueDate: '5/1/2026', statusColor: 'bg-orange-400' },
        { status: 'On Hold', date: '12/28/2025', activity: 'Complete Mission 1', type: 'META LABS', subject: 'English', sub: 'Spoken Words', dueDate: '5/1/2026', statusColor: 'bg-red-400' },
        { status: 'On Hold', date: '12/28/2025', activity: 'Complete Mission 1', type: 'FUNDEMENTALS', subject: 'English', sub: 'Spoken Words', dueDate: '5/1/2026', statusColor: 'bg-orange-400' },
        { status: 'On Hold', date: '12/28/2025', activity: 'Complete Mission 1', type: 'POD TIME', subject: 'English', sub: 'Spoken Words', dueDate: '5/1/2026', statusColor: 'bg-red-400' },
        { status: 'On Hold', date: '12/28/2025', activity: 'Complete Mission 1', type: 'META LABS', subject: 'English', sub: 'Spoken Words', dueDate: '5/1/2026', statusColor: 'bg-orange-400' },
        { status: 'On Hold', date: '12/28/2025', activity: 'Complete Mission 1', type: 'FUNDEMENTALS', subject: 'English', sub: 'Spoken Words', dueDate: '5/1/2026', statusColor: 'bg-red-400' },
        { status: 'On Hold', date: '12/28/2025', activity: 'Complete Mission 1', type: 'POD TIME', subject: 'English', sub: 'Spoken Words', dueDate: '5/1/2026', statusColor: 'bg-orange-400' },
        { status: 'On Hold', date: '12/28/2025', activity: 'Complete Mission 1', type: 'META LABS', subject: 'English', sub: 'Spoken Words', dueDate: '5/1/2026', statusColor: 'bg-red-400' }
    ];

    const getTypeColor = (type) => {
        switch (type) {
            case 'POD TIME': return 'bg-blue-100 text-blue-800';
            case 'META LABS': return 'bg-purple-100 text-purple-800';
            case 'FUNDEMENTALS': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="flex-1 flex flex-col">
            {/* Top Header - Statistics */}
            <div className=" shadow-sm border-b border-gray-200 p-6 bg-[#6C85FF] m-6 mb-0 rounded-lg shadow-sm ">
                <div className="flex justify-between items-center">
                    <div className="grid grid-cols-6 gap-4 w-full">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">32</div>
                            <div className="text-sm text-white/80">Hours Logged</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">0</div>
                            <div className="text-sm text-white/80">Days Missed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">12/30</div>
                            <div className="text-sm text-white/80">Tasks Completed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">10</div>
                            <div className="text-sm text-white/80">Trophies</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">320</div>
                            <div className="text-sm text-white/80">Points</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">40</div>
                            <div className="text-sm text-white/80">Alpha Coins</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content - Activity Table */}
            <div className="flex-1 p-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    {/* Table Header */}
                    <div className="bg-[#6C85FF] text-white px-6 py-4">
                        <div className="grid grid-cols-7 gap-4 text-sm font-medium">
                            <div>Status</div>
                            <div>Date</div>
                            <div>Activity</div>
                            <div>Type</div>
                            <div>Subject</div>
                            <div>Sub</div>
                            <div>Due Date</div>
                        </div>
                    </div>

                    {/* Table Body */}
                    <div className="divide-y divide-gray-200">
                        {activities.map((activity, index) => (
                            <div key={index} className="px-6 py-4 hover:bg-gray-50">
                                <div className="grid grid-cols-7 gap-4 text-sm">
                                    <div className="flex items-center space-x-2">
                                        <div className={`w-3 h-3 rounded-full ${activity.statusColor}`}></div>
                                        <span className="text-gray-700">{activity.status}</span>
                                    </div>
                                    <div className="text-gray-700">{activity.date}</div>
                                    <div className="text-gray-700">{activity.activity}</div>
                                    <div>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(activity.type)}`}>
                                            {activity.type}
                                        </span>
                                    </div>
                                    <div className="text-gray-700">{activity.subject}</div>
                                    <div className="text-gray-700">{activity.sub}</div>
                                    <div className="text-gray-700">{activity.dueDate}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
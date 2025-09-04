'use client';

import { useState } from 'react';

export default function JobPage() {
    const [jobs, setJobs] = useState([
        {
            id: 1,
            description: 'Job Description text area',
            price: 2,
            days: {
                F: true,
                S: true,
                S2: false,
                M: false,
                T: true,
                W: false,
                T2: false
            },
            total: 6
        },
        {
            id: 2,
            description: 'Job Description text area',
            price: 2,
            days: {
                F: true,
                S: true,
                S2: false,
                M: false,
                T: true,
                W: false,
                T2: false
            },
            total: 6
        },
        {
            id: 3,
            description: 'Job Description text area',
            price: 2,
            days: {
                F: true,
                S: true,
                S2: false,
                M: false,
                T: true,
                W: false,
                T2: false
            },
            total: 6
        },
        {
            id: 4,
            description: 'Job Description text area',
            price: 2,
            days: {
                F: true,
                S: true,
                S2: false,
                M: false,
                T: true,
                W: false,
                T2: false
            },
            total: 6
        },
        {
            id: 5,
            description: 'Job Description text area',
            price: 2,
            days: {
                F: true,
                S: true,
                S2: false,
                M: false,
                T: true,
                W: false,
                T2: false
            },
            total: 6
        },
        {
            id: 6,
            description: 'Job Description text area',
            price: 2,
            days: {
                F: true,
                S: true,
                S2: false,
                M: false,
                T: true,
                W: false,
                T2: false
            },
            total: 6
        },
        {
            id: 7,
            description: 'Job Description text area',
            price: 2,
            days: {
                F: true,
                S: true,
                S2: false,
                M: false,
                T: true,
                W: false,
                T2: false
            },
            total: 6
        },
        {
            id: 8,
            description: 'Job Description text area',
            price: 2,
            days: {
                F: true,
                S: true,
                S2: false,
                M: false,
                T: true,
                W: false,
                T2: false
            },
            total: 6
        },
        {
            id: 9,
            description: 'Job Description text area',
            price: 2,
            days: {
                F: true,
                S: true,
                S2: false,
                M: false,
                T: true,
                W: false,
                T2: false
            },
            total: 6
        },
        {
            id: 10,
            description: 'Job Description text area',
            price: 2,
            days: {
                F: true,
                S: true,
                S2: false,
                M: false,
                T: true,
                W: false,
                T2: false
            },
            total: 6
        },
        {
            id: 11,
            description: 'Job Description text area',
            price: 2,
            days: {
                F: true,
                S: true,
                S2: false,
                M: false,
                T: true,
                W: false,
                T2: false
            },
            total: 6
        },
        {
            id: 12,
            description: 'Job Description text area',
            price: 2,
            days: {
                F: true,
                S: true,
                S2: false,
                M: false,
                T: true,
                W: false,
                T2: false
            },
            total: 6
        },
        {
            id: 13,
            description: 'Job Description text area',
            price: 2,
            days: {
                F: true,
                S: true,
                S2: false,
                M: false,
                T: true,
                W: false,
                T2: false
            },
            total: 6
        },
        {
            id: 14,
            description: 'Job Description text area',
            price: 2,
            days: {
                F: true,
                S: true,
                S2: false,
                M: false,
                T: true,
                W: false,
                T2: false
            },
            total: 6
        },
        {
            id: 15,
            description: 'Job Description text area',
            price: 2,
            days: {
                F: true,
                S: true,
                S2: false,
                M: false,
                T: true,
                W: false,
                T2: false
            },
            total: 6
        }
    ]);

    const [newJob, setNewJob] = useState({
        description: 'Job discription text input here',
        price: 2
    });

    const dayLabels = ['F', 'S', 'S', 'M', 'T', 'W', 'T'];
    const dayKeys = ['F', 'S', 'S2', 'M', 'T', 'W', 'T2'];

    const calculateTotal = (job) => {
        const selectedDays = Object.values(job.days).filter(day => day).length;
        return selectedDays * job.price;
    };

    const updateJobDays = (jobId, dayKey, value) => {
        setJobs(jobs.map(job => {
            if (job.id === jobId) {
                const updatedDays = { ...job.days, [dayKey]: value };
                const newTotal = calculateTotal({ ...job, days: updatedDays });
                return { ...job, days: updatedDays, total: newTotal };
            }
            return job;
        }));
    };

    const addNewJob = () => {
        const newJobEntry = {
            id: jobs.length + 1,
            description: newJob.description,
            price: newJob.price,
            days: {
                F: false,
                S: false,
                S2: false,
                M: false,
                T: false,
                W: false,
                T2: false
            },
            total: 0
        };
        setJobs([...jobs, newJobEntry]);
        setNewJob({ description: 'Job discription text input here', price: 2 });
    };

    const overallTotal = jobs.reduce((sum, job) => sum + job.total, 0);

    return (
        <div className="p-6 bg-gray-50 h-[100%] flex flex-col">
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;  /* Internet Explorer 10+ */
                    scrollbar-width: none;  /* Firefox */
                }
                .scrollbar-hide::-webkit-scrollbar { 
                    display: none;  /* Safari and Chrome */
                }
            `}</style>
            {/* Header */}
            {/* <div className="bg-blue-800 text-white text-center py-4 rounded-t-lg mb-6">
                <h1 className="text-2xl font-bold">JOBS</h1>
            </div> */}

            {/* Main Job Tracking Grid */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-3 flex-1">
                <div className="overflow-x-auto h-full overflow-y-auto scrollbar-hide">
                    <table className="w-full">
                        <thead className="sticky top-0 z-10">
                            <tr className="bg-blue-100">
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 bg-blue-200">
                                    Job
                                </th>
                                <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 bg-blue-200">
                                    Price
                                </th>
                                {dayLabels.map((day, index) => (
                                    <th key={index} className="px-2 py-3 text-center text-sm font-medium text-gray-700 bg-blue-200 w-12">
                                        {day}
                                    </th>
                                ))}
                                <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 bg-blue-200">
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job) => (
                                <tr key={job.id} className="border-b border-gray-200">
                                    <td className="px-4 py-3">
                                        <div className="bg-blue-100 rounded px-3 py-2 text-sm text-gray-700">
                                            {job.description}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <div className="border border-blue-300 rounded px-3 py-1 text-sm text-gray-700 bg-white">
                                            {job.price}
                                        </div>
                                    </td>
                                    {dayKeys.map((dayKey, index) => (
                                        <td key={index} className="px-2 py-3 text-center">
                                            <div className="w-8 h-8 border border-blue-300 rounded bg-white flex items-center justify-center mx-auto">
                                                {job.days[dayKey] && (
                                                    <span className="text-black text-sm">☑</span>
                                                )}
                                            </div>
                                        </td>
                                    ))}
                                    <td className="px-4 py-3 text-center">
                                        <div className="bg-blue-100 rounded px-3 py-2 text-sm text-gray-700">
                                            {job.total}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer / Action Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 h-42">
                <div className="flex justify-between items-center mb-6">
                    {/* Payday Information */}
                    <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600">PAYDAY IS EVERY</span>
                        <div className="bg-blue-100 rounded-lg px-4 py-2">
                            <span className="text-lg font-bold italic text-gray-800">Thursday</span>
                        </div>
                    </div>

                    {/* Overall Total */}
                    <div className="bg-blue-800 text-white rounded-lg px-6 py-3">
                        <span className="text-2xl font-bold">{overallTotal}</span>
                    </div>
                </div>

                {/* Add New Job Controls */}
                <div className="flex items-center space-x-4">
                    <div className="flex-1">
                        <input
                            type="text"
                            value={newJob.description}
                            onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                            className="w-full border border-blue-300 rounded px-3 py-2 text-sm text-gray-700 bg-white"
                            placeholder="Job discription text input here"
                        />
                    </div>
                    <div className="w-20">
                        <input
                            type="number"
                            value={newJob.price}
                            onChange={(e) => setNewJob({ ...newJob, price: parseInt(e.target.value) || 0 })}
                            className="w-full border border-blue-300 rounded px-3 py-2 text-sm text-gray-700 bg-white text-center"
                        />
                    </div>
                    <button
                        onClick={addNewJob}
                        className="bg-blue-800 text-white rounded-lg px-4 py-2 flex flex-col items-center space-y-1 hover:bg-blue-700 transition-colors"
                    >
                        {/* <span className="text-lg">+</span> */}
                        <span className="text-xs">Add New Job</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
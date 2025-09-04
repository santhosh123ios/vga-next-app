'use client';

import { useState } from 'react';

export default function JobPage() {
    const [jobs, setJobs] = useState([
        {
            id: 1,
            name: 'Web Development',
            price: 150
        },
        {
            id: 2,
            name: 'Mobile App Design',
            price: 200
        },
        {
            id: 3,
            name: 'Database Optimization',
            price: 120
        },
        {
            id: 1,
            name: 'Web Development',
            price: 150
        },
        {
            id: 2,
            name: 'Mobile App Design',
            price: 200
        },
        {
            id: 3,
            name: 'Database Optimization',
            price: 120
        },{
            id: 1,
            name: 'Web Development',
            price: 150
        },
        {
            id: 2,
            name: 'Mobile App Design',
            price: 200
        },
        {
            id: 3,
            name: 'Database Optimization',
            price: 120
        },
        {
            id: 1,
            name: 'Web Development',
            price: 150
        },
        {
            id: 2,
            name: 'Mobile App Design',
            price: 200
        },
        {
            id: 3,
            name: 'Database Optimization',
            price: 120
        }
    ]);

    const [newJob, setNewJob] = useState({
        name: '',
        price: ''
    });

    const addJob = () => {
        if (newJob.name && newJob.price) {
            const job = {
                id: jobs.length + 1,
                name: newJob.name,
                price: parseFloat(newJob.price)
            };
            setJobs([...jobs, job]);
            setNewJob({ name: '', price: '' });
        }
    };

    const deleteJob = (jobId) => {
        setJobs(jobs.filter(job => job.id !== jobId));
    };

    const totalEarnings = jobs.reduce((sum, job) => sum + job.price, 0);
    const totalJobs = jobs.length;

    return (
        <div className=" bg-gray-50 flex flex-col h-[100%]" >
            {/* Header */}
            <div className="bg-[#6C85FF] text-white p-6 flex-shrink-0 m-6 mb-0 rounded-lg shadow">
                <h1 className="text-2xl font-bold mb-2">Job Management</h1>
                <p className="text-blue-100">Track and manage your freelance projects</p>
            </div>

            {/* Main Content - Two Column Layout */}
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 p-6" style={{ minHeight: 0 }}>
                {/* Jobs List - Takes 2/3 of the space */}
                <div className="lg:col-span-2" style={{ minHeight: 0 }}>
                    <div className="bg-white rounded-lg shadow h-full flex flex-col">
                        <div className="px-6 py-4 border-b border-gray-200 flex-shrink-0">
                            <h2 className="text-lg font-semibold text-gray-900">Added Jobs</h2>
                        </div>
                        <div className="flex-1 overflow-y-auto" style={{ minHeight: 0 }}>
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Job Name
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                                                 <tbody className="bg-white divide-y divide-gray-200">
                                    {jobs.map((job) => (
                                        <tr key={job.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">{job.name}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                ${job.price}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button
                                                    onClick={() => deleteJob(job.id)}
                                                    className="text-red-600 hover:text-red-900 text-xs"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Add New Job - Takes 1/3 of the space */}
                <div className="lg:col-span-1" style={{ minHeight: 0 }}>
                    <div className="bg-white rounded-lg shadow p-6 h-full overflow-y-auto">

                
                        <div className="bg-gray-50 p-4 rounded-lg mb-6">
                            <div className="flex items-center">
                                <div className="p-2 bg-green-100 rounded-lg">
                                    <span className="text-xl">💰</span>
                                </div>
                                <div className="ml-3">
                                    <p className="text-xs text-gray-600">Total Earnings</p>
                                    <p className="text-lg font-bold text-gray-900">${totalEarnings}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg mb-8">
                            <div className="flex items-center">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <span className="text-xl">💼</span>
                                </div>
                                <div className="ml-3">
                                    <p className="text-xs text-gray-600">Total Jobs</p>
                                    <p className="text-lg font-bold text-gray-900">{totalJobs}</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Job</h2>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Job Name"
                                value={newJob.name}
                                onChange={(e) => setNewJob({...newJob, name: e.target.value})}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <input
                                type="number"
                                placeholder="Price ($)"
                                value={newJob.price}
                                onChange={(e) => setNewJob({...newJob, price: e.target.value})}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <button
                                onClick={addJob}
                                className="w-full bg-[#6C85FF] hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors mt-6"
                            >
                                Add Job
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
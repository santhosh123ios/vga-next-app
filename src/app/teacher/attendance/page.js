'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function AttendancePage() {
    const searchParams = useSearchParams();
    const studentId = searchParams.get('studentId');

    const [attendanceData, setAttendanceData] = useState({
        'ST001': 'present',
        'ST002': 'present',
        'ST003': 'absent',
        'ST004': 'present',
        'ST005': 'late',
        'ST006': 'present',
        'ST007': 'present',
        'ST008': 'absent',
        'ST009': 'present',
        'ST010': 'present'
    });

    const students = [
        { id: 'ST001', name: 'Mohameed AL Mohameed' },
        { id: 'ST002', name: 'Sarah Johnson' },
        { id: 'ST003', name: 'Michael Chen' },
        { id: 'ST004', name: 'Emma Davis' },
        { id: 'ST005', name: 'Alex Rodriguez' },
        { id: 'ST006', name: 'Sophie Williams' },
        { id: 'ST007', name: 'David Kim' },
        { id: 'ST008', name: 'Olivia Brown' },
        { id: 'ST009', name: 'James Wilson' },
        { id: 'ST010', name: 'Ava Garcia' }
    ];

    const handleAttendanceChange = (studentId, status) => {
        setAttendanceData(prev => ({
            ...prev,
            [studentId]: status
        }));
    };

    const handleSubmit = () => {
        console.log('Attendance submitted:', attendanceData);
        // Here you would typically send the data to your backend
        alert('Attendance submitted successfully!');
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'present':
                return 'bg-green-100 text-green-800 border-green-300';
            case 'absent':
                return 'bg-red-100 text-red-800 border-red-300';
            case 'late':
                return 'bg-yellow-100 text-yellow-800 border-yellow-300';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-300';
        }
    };

    return (
        <div className="p-6 h-full flex flex-col overflow-hidden">
            {/* Header */}
            <div className="mb-4">
                <h1 className="text-xl font-bold text-gray-900 mb-1">Daily Attendance</h1>
                <p className="text-sm text-gray-600">Mark attendance for all students</p>
            </div>

            {/* Student Grid */}
            <div className="grid grid-cols-5 gap-3 flex-1 overflow-y-auto">
                {students.map((student) => (
                    <div key={student.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        {/* Student Profile */}
                        <div className="text-center mb-2">
                            <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-1 flex items-center justify-center">
                                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div className="text-xs font-medium text-gray-900 text-center leading-tight">
                                {student.name}
                            </div>
                        </div>

                        {/* Attendance Status */}
                        <div className="space-y-1">
                            <button
                                onClick={() => handleAttendanceChange(student.id, 'present')}
                                className={`w-full py-1 px-2 rounded-md text-xs font-medium border transition-colors ${
                                    attendanceData[student.id] === 'present'
                                        ? 'bg-green-100 text-green-800 border-green-300'
                                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-green-50'
                                }`}
                            >
                                Present
                            </button>
                            <button
                                onClick={() => handleAttendanceChange(student.id, 'absent')}
                                className={`w-full py-1 px-2 rounded-md text-xs font-medium border transition-colors ${
                                    attendanceData[student.id] === 'absent'
                                        ? 'bg-red-100 text-red-800 border-red-300'
                                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-red-50'
                                }`}
                            >
                                Absent
                            </button>
                            <button
                                onClick={() => handleAttendanceChange(student.id, 'late')}
                                className={`w-full py-1 px-2 rounded-md text-xs font-medium border transition-colors ${
                                    attendanceData[student.id] === 'late'
                                        ? 'bg-yellow-100 text-yellow-800 border-yellow-300'
                                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-yellow-50'
                                }`}
                            >
                                Late
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Summary and Submit */}
            <div className="flex justify-between items-center bg-white rounded-lg shadow-sm border border-gray-200 p-4 mt-4">
                <div className="flex space-x-6">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">
                            Present: {Object.values(attendanceData).filter(status => status === 'present').length}
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">
                            Absent: {Object.values(attendanceData).filter(status => status === 'absent').length}
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">
                            Late: {Object.values(attendanceData).filter(status => status === 'late').length}
                        </span>
                    </div>
                </div>
                
                <button
                    onClick={handleSubmit}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
                >
                    Submit Attendance
                </button>
            </div>
        </div>
    );
}
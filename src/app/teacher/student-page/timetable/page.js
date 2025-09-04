'use client';

import { useState } from 'react';

export default function TimetablePage() {
    const [selectedSubjects, setSelectedSubjects] = useState({});

    // Get current week dates
    const getCurrentWeekDates = () => {
        const today = new Date();
        const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
        
        // Get the start of the current week (Sunday)
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - currentDay);
        
        const weekDays = [];
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        // Generate dates for the current week
        for (let i = 0; i < 5; i++) { // Monday to Friday (5 days)
            const date = new Date(startOfWeek);
            date.setDate(startOfWeek.getDate() + i);
            
            weekDays.push({
                name: dayNames[date.getDay()],
                date: date.toLocaleDateString('en-US', { 
                    month: '2-digit', 
                    day: '2-digit', 
                    year: 'numeric' 
                })
            });
        }
        
        return weekDays;
    };

    const days = getCurrentWeekDates();

    const subjectOptions = ['Maths', 'English', 'Lab', 'Creative', 'Other'];

    const handleSubjectChange = (timeSlot, dayIndex, subject) => {
        setSelectedSubjects(prev => ({
            ...prev,
            [`${timeSlot}-${dayIndex}`]: subject
        }));
    };

    const timeSlots = [
        { time: '7:45', timeRange: '7:45 - 7:50', activity: 'Gates Open', label: 'Arrival' },
        { time: '7:50', timeRange: '7:50 - 8:00', activity: 'Registration', label: 'Check-in' },
        { time: '8:00', timeRange: '8:00 - 8:30', activity: 'Morning Kickoff', label: 'Motivation' },
        { time: '8:30', timeRange: '8:30 - 8:50', activity: 'Learning Block 1', label: 'Learning' },
        { time: '8:50', timeRange: '8:50 - 9:00', activity: 'Break', label: 'Rest' },
        { time: '9:00', timeRange: '9:00 - 9:20', activity: 'Learning Block 2', label: 'Learning' },
        { time: '9:30', timeRange: '9:30 - 9:50', activity: 'Learning Block 3', label: 'Learning' },
        { time: '9:50', timeRange: '9:50 - 10:00', activity: 'Break', label: 'Rest' },
        { time: '10:00', timeRange: '10:00 - 10:20', activity: 'Learning Block 4', label: 'Learning' },
        { time: '10:30', timeRange: '10:30 - 10:50', activity: 'Learning Block 5', label: 'Learning' },
        { time: '10:50', timeRange: '10:50 - 11:00', activity: 'Break', label: 'Rest' },
        { time: '11:00', timeRange: '11:00 - 11:20', activity: 'Learning Block 6', label: 'Learning' },
        { time: '11:30', timeRange: '11:30 - 11:50', activity: 'Learning Block 7', label: 'Learning' }
    ];

    const getSubjectForTimeSlot = (time) => {
        const subjectMap = {
            '8:00': 'Motivation Session',
            '8:30': 'Maths',
            '8:50': '',
            '9:00': 'English',
            '9:30': 'Maths',
            '9:50': '',
            '10:00': 'Maths',
            '10:30': 'English',
            '10:50': '',
            '11:00': 'Maths',
            '11:30': 'English'
        };
        return subjectMap[time] || '';
    };

    return (
        <div className=" h-[100%] bg-gray-50 p-6">
            {/* Main Header */}
            <div className="bg-blue-800 text-white text-center py-4 rounded-t-lg mb-4 h-[10%]">
                <h1 className="text-2xl font-bold">TIMETABLE</h1>
            </div>

            {/* Timetable Container */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[90%] flex flex-col">
                {/* Days Header - Fixed */}
                <div className="grid grid-cols-6 border-b flex-shrink-0">
                    <div className="p-6 bg-gray-100 border-r">
                        {/* <div className="text-sm text-gray-600">Time</div> */}
                        <div className="font-semibold text-blue-800">Time Schedule</div>
                    </div>
                    {days.map((day, index) => (
                        <div key={index} className="p-4 bg-blue-100 text-center">
                            <div className="text-xs text-gray-600">{day.date}</div>
                            <div className="font-semibold text-blue-800">{day.name}</div>
                        </div>
                    ))}
                </div>

                {/* Timetable Rows - Scrollable */}
                <div className="flex-1 overflow-y-auto mb-2">
                    <div className="grid grid-cols-6">
                        {timeSlots.map((slot, index) => (
                            <div key={index} className="contents">
                                {/* Time and Activity Column */}
                                <div className="p-3 bg-gray-50 border-b border-gray-200">
                                    <div className="text-sm text-black font-bold">{slot.timeRange}</div>
                                    <div className="text-sm text-gray-600 mt-1">{slot.activity}</div>
                                </div>
                                
                                {/* Day Columns */}
                                {days.map((day, dayIndex) => (
                                    <div key={dayIndex} className="p-3 border-b border-gray-200">
                                        <select
                                            value={selectedSubjects[`${slot.time}-${dayIndex}`] || ''}
                                            onChange={(e) => handleSubjectChange(slot.time, dayIndex, e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                                        >
                                            <option value="">Select Subject</option>
                                            {subjectOptions.map((subject, index) => (
                                                <option key={index} value={subject}>
                                                    {subject}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            {/* <div className="flex justify-end items-center gap-4 mt-6">
                <button className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </button>
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Save
                </button>
            </div> */}
        </div>
    );
}